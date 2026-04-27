import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { GalleryItem } from '../components/GalleryItem';
import { Lightbox } from '../components/Lightbox';
import { portfolioItems, categories } from '../data/portfolio';

export function CategoryGallery() {
  const { categoryId } = useParams();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const category = categories.find(c => c.id === categoryId);
  const items = portfolioItems.filter(item => item.category === categoryId);

  // Define masonry layout pattern - different sizes for tiles
  const getItemSize = (index: number) => {
    const pattern = [
      { cols: 1, rows: 1 }, // normal
      { cols: 1, rows: 2 }, // tall
      { cols: 1, rows: 1 }, // normal
      { cols: 1, rows: 1 }, // normal
      { cols: 1, rows: 2 }, // tall
      { cols: 1, rows: 1 }, // normal
      { cols: 1, rows: 1 }, // normal
      { cols: 1, rows: 1 }, // normal
      { cols: 1, rows: 2 }, // tall
      { cols: 1, rows: 1 }, // normal
    ];
    return pattern[index % pattern.length];
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
          <img 
            src={category.coverImage} 
            alt={category.title}
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Design Work Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A selection of my work, not the full story
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 backdrop-blur-sm">
                <span className="text-gray-700 text-sm">{items.length} Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[260px] gap-4">
            {items.map((item, index) => (
              <GalleryItem
                key={item.id}
                {...item}
                index={index}
                onClick={() => setSelectedIndex(index)}
                size={getItemSize(index)}
              />
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects available in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <Lightbox
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          image={selectedItem.image}
          title={selectedItem.title}
          type={selectedItem.type}
          videoUrl={selectedItem.videoUrl}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={selectedIndex !== null && selectedIndex < items.length - 1}
          hasPrevious={selectedIndex !== null && selectedIndex > 0}
        />
      )}

    </div>
  );
}
