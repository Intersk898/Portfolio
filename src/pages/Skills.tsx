import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();

  const skillCategories = [
    {
      title: "Web Development",
      route: "/skills/web",
      skills: ["HTML + CSS + JavaScript", "React", "TypeScript", "Tailwind CSS"],
      description: "Proficient in creating responsive, interactive, and visually appealing websites using modern web technologies."
    },
    {
      title: "Roblox Development",
      route: "/skills/roblox",
      skills: [
        "Lua Scripting",
        "Game Systems Design",
        "UI/UX Development",
        "Multiplayer Systems"
      ],
      description: "Experienced in designing engaging Roblox games using Lua scripting and custom models in Roblox Studio."
    },
    {
      title: "Game Development",
      route: "/skills/game",
      skills: ["Unity", "C#", "Game Design", "3D Modeling"],
      description: "Skilled in developing immersive 2D and 3D games using Unity, including physics, animation, and scripting."
    },
    {
      title: "Other Skills",
      route: "/skills/other",
      skills: ["Git", "Node.js", "Python", "Discord Bot Development"],
      description: "Additional programming experience across various technologies and platforms."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary pt-20">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">My Skills</h1>
          <p className="text-white/80">Click on any category to learn more</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => navigate(category.route)}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <p className="text-white/70 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-white/90 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary-light rounded-full" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;