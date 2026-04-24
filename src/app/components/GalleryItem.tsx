import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState, useRef } from 'react';

interface GalleryItemProps {
  id: string;
  title: string;
  image: string;
  type: 'image' | 'video';
  videoUrl?: string;
  onClick: () => void;
  index: number;
  size?: { cols: number; rows: number };
}

export function GalleryItem({ title, image, type, videoUrl, onClick, index, size = { cols: 1, rows: 1 } }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Calculate grid span classes - only row span varies, col span is always 1
  const rowSpan = size.rows === 3 ? 'md:row-span-3' : size.rows === 2 ? 'md:row-span-2' : 'md:row-span-1';
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (type === 'video' && videoRef.current && !videoError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Video play failed:', error);
          setVideoError(true);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (type === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={`${rowSpan} flex flex-col min-h-0`}>
      {/* Tile Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ y: -4 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex-1"
      >
        {/* Image/Video Container */}
        <div className="absolute inset-0 overflow-hidden bg-gray-100">
          {type === 'video' && videoUrl ? (
            <>
              {/* Video Element (hidden until hover) */}
              <video
                ref={videoRef}
                src={videoUrl}
                muted
                loop
                playsInline
                className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                onError={() => setVideoError(true)}
              />
              {/* Poster Image (shown when not hovering) */}
              <img
                src={image}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                loading="lazy"
              />
            </>
          ) : (
            // Image with vertical pan on hover
            <motion.img
              src={image}
              alt={title}
              className="w-full h-[120%] object-cover"
              style={{ objectPosition: 'top' }}
              animate={{ 
                y: isHovered ? '-20%' : '0%' 
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeInOut"
              }}
              loading="lazy"
            />
          )}
        </div>

        {/* Video Indicator */}
        {type === 'video' && !isHovered && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200 flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-gray-900 fill-gray-900 ml-0.5" />
            </div>
          </div>
        )}
      </motion.div>

      {/* Title Below Tile - Outside the hoverable area */}
      <div className="mt-3 px-0.5 flex-shrink-0 mb-3">
        <h3 className="text-gray-900 text-sm font-semibold line-clamp-2 leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
}