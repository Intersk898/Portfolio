import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-[80vh] text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-32 rounded-full bg-primary-light/20 backdrop-blur-lg mb-8 flex items-center justify-center overflow-hidden"
          >
            <img 
              src="/lovable-uploads/ce14b8f9-5d26-459c-aa9e-cc9a42192f09.png" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm Intersk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl"
          >
            Roblox Developer & Web Engineer crafting immersive digital experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex space-x-6"
          >
            <a
              href="/work"
              className="px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-primary-light hover:text-white transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
