import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "View All Roblox Projects",
    description: "Explore my complete portfolio of Roblox games and experiences",
    link: "/work/roblox"
  },
  {
    id: 2,
    title: "View All Web Projects",
    description: "Explore my collection of web development projects and applications",
    link: "/skills/web"
  }
];

const Work = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.link.startsWith('http')) {
      window.open(project.link, '_blank');
    } else {
      navigate(project.link);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary pt-20">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">My Work</h1>
          <p className="text-white/80">Explore my latest projects</p>
        </motion.div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleProjectClick(project)}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <motion.h3 
                className="text-xl font-semibold text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-white/80"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;