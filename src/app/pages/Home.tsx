import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Award, Users, Mail, Palette, Gamepad2, Code2 } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import statsImage from '../../imports/statics-2.jpg';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-purple-50 to-white" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-[120px] animate-pulse delay-1000" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* removed badge */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6"
          >
            Refined Pixels
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Deliver Magical Results
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto p-[0px] mx-[0px] mt-[0px] mb-[48px]"
          >
            From requirements to branding, I create clean and useful designs that turn complicated ideas into simple, powerful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/category/websites"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-0 px-0">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={statsImage}
          alt="Design Statistics"
          className="w-full h-auto"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200 flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether it's a project, collaboration, or a new role, I'm always open to discussing meaningful opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:addinweb786@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                addinweb786@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}