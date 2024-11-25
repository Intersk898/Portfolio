import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface WebProject {
  title: string;
  role: string;
  summary: string;
  details: string[];
  link: string;
}

const WebDevelopment = () => {
  const navigate = useNavigate();

  const projects: WebProject[] = [
    {
      title: "Portfolio Website",
      role: "Lead Developer",
      summary: "A modern, responsive portfolio website built with React and Tailwind CSS",
      details: [
        "Responsive design for all devices",
        "Smooth animations and transitions",
        "Modern UI components",
        "Clean and maintainable code structure"
      ],
      link: "https://interskportfolio.netlify.app"
    },
    {
      title: "Minesweeper",
      role: "Developer",
      summary: "Classic Minesweeper game reimagined with modern web technologies",
      details: [
        "Classic gameplay mechanics",
        "Responsive design",
        "Score tracking",
        "Multiple difficulty levels"
      ],
      link: "https://intersk898.github.io/Minesweeper/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary pt-20">
      <div className="container mx-auto px-6 py-16">
        <Button
          variant="ghost"
          className="text-white mb-8"
          onClick={() => navigate("/work")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Web Development Projects</h1>
          <p className="text-white/80">A showcase of my web development experience</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-primary-light mb-4">({project.role})</p>
                <p className="text-white/80 mb-4">{project.summary}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-white/90 flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary-light rounded-full" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white hover:text-primary-light transition-colors"
                >
                  <span>Visit Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
