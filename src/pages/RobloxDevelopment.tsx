import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RobloxDevelopment = () => {
  const navigate = useNavigate();
  
  const skills = [
    {
      title: "Gameplay Systems",
      items: [
        "Combat & Weapon Systems",
        "Physics and Movement",
        "Character Controllers",
        "Animation Systems",
        "Inventory Management",
        "Quest Systems",
        "NPC AI Behavior"
      ]
    },
    {
      title: "Multiplayer Features",
      items: [
        "Server-Client Architecture",
        "Data Replication",
        "Network Optimization",
        "Anti-Cheat Systems",
        "Player Synchronization",
        "Real-time Events",
        "Match Making Systems"
      ]
    },
    {
      title: "Technical Skills",
      items: [
        "Lua Programming",
        "Object-Oriented Design",
        "Performance Optimization",
        "Memory Management",
        "DataStore Systems",
        "UI/UX Development",
        "Asset Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary pt-20">
      <div className="container mx-auto px-6 py-16">
        <Button
          variant="ghost"
          className="text-white mb-8"
          onClick={() => navigate("/skills")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Skills
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Roblox Development Skills</h1>
          <p className="text-white/80">Comprehensive breakdown of Roblox development capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-white/90 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-primary-light rounded-full" />
                    <span>{item}</span>
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

export default RobloxDevelopment;