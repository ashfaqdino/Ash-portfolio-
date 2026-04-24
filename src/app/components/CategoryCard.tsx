import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Monitor, Smartphone, Share2, Palette, Video } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  icon: string;
  index: number;
}

const iconMap = {
  monitor: Monitor,
  smartphone: Smartphone,
  share2: Share2,
  palette: Palette,
  video: Video,
};

export function CategoryCard({ id, title, description, coverImage, icon, index }: CategoryCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Monitor;
  
  return (
    <Link to={`/category/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg cursor-pointer h-[400px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-white/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8">
          <div className="mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">
              {description}
            </p>
          </div>
          
          <motion.div 
            className="flex items-center gap-2 text-blue-600 text-sm font-medium"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <span>View Projects</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
        </div>
      </motion.div>
    </Link>
  );
}