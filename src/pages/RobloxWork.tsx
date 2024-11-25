import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface RobloxProject {
  title: string;
  role: string;
  summary: string;
  details: string[];
  link: string;
  groupName?: string;
}

const RobloxWork = () => {
  const navigate = useNavigate();

  const projects: RobloxProject[] = [
    {
      title: "Stewap's USAR",
      role: "Co-Lead Scripter",
      summary: "Developed immersive military roleplay features like rank progression, training modules, and a locker system for United States Army Roblox.",
      details: [
        "Rank progression system",
        "Training modules and PT exercises",
        "Locker system for uniform saving",
        "Realistic loadout and role management"
      ],
      link: "https://www.roblox.com/groups/35046015/USAR-United-States-Army",
      groupName: "USAR Group"
    },
    {
      title: "Seaborne Cruiselines",
      role: "Co-Lead Developer",
      summary: "Implemented a luxury cruise roleplay experience with engaging activities, interactive NPCs, and player customization features.",
      details: [
        "Outfit loader and buyer system",
        "Daily activities guided by NPCs",
        "Swimming and music customization systems",
        "Interactive social dimensions like gyms and breakfast activities"
      ],
      link: "https://www.roblox.com/groups/33862880/Seaborne-Cruiselines-Roleplay#!/about",
      groupName: "Seaborne Cruiselines Group"
    },
    {
      title: "Super Duper Easy Obby",
      role: "Lead Developer",
      summary: "A 100-stage obstacle course featuring dynamic traps, checkpoint systems, and anti-cheat measures for a fun and fair gameplay experience.",
      details: [
        "100 unique stages with increasing difficulty",
        "Checkpoint and save system",
        "Dynamic traps and timed puzzles",
        "Custom anti-cheat measures"
      ],
      link: "https://www.roblox.com/games/101042738895594/Super-Duper-Easy-Obby"
    },
    {
      title: "Button Frenzy",
      role: "Lead Developer",
      summary: "A fast-paced arena-style game where players race to click randomly spawning buttons. Features dynamic leaderboards and competitive multiplayer.",
      details: [
        "Randomized button spawn locations",
        "Competitive multiplayer with leaderboards",
        "Interactive UI with stats and timers"
      ],
      link: "https://www.roblox.com/games/131307392188892/Button-Frenzy"
    },
    {
      title: "Build to Survive",
      role: "Lead Developer",
      summary: "Sandbox survival game featuring customizable building mechanics and randomized disasters. Players strategically build defenses to survive.",
      details: [
        "Randomized disasters and survival challenges",
        "Wide range of materials for building mechanics",
        "Multiplayer with cooperative and competitive modes"
      ],
      link: "https://www.roblox.com/games/94078711002291/Bulid-to-Survive-NEW"
    },
    {
      title: "FPS Game Test",
      role: "Lead Developer",
      summary: "An experimental FPS game featuring randomized loadouts, fluid shooting mechanics, and dynamic spawning systems for replayable matches.",
      details: [
        "Custom weapon mechanics with recoil and animations",
        "Randomized player loadouts for each match",
        "Optimized multiplayer gameplay"
      ],
      link: "https://www.roblox.com/games/121918910236815/FPS-Game-Test"
    },
    {
      title: "Gravity Wall Stick Test",
      role: "Lead Developer",
      summary: "Created custom gravity manipulation mechanics for wall-walking and ceiling traversal, enabling unique player movement experiences.",
      details: [
        "Custom gravity system for surface transitions",
        "Smooth wall and ceiling traversal mechanics",
        "Seamless controls for immersive gameplay"
      ],
      link: "https://www.roblox.com/games/87143330688818/Gravity-Wall-Stick-Test"
    },
    {
      title: "Lag Tester V1",
      role: "Lead Developer",
      summary: "A utility game for testing PC performance by spawning client-side objects with adjustable spawn rates and settings.",
      details: [
        "Real-time FPS counter and diagnostics",
        "Adjustable object spawning for stress tests",
        "Client-side optimization techniques"
      ],
      link: "https://www.roblox.com/games/136395968142360/Lag-Tester-V1-2024"
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
          <h1 className="text-4xl font-bold text-white mb-4">Roblox Projects</h1>
          <p className="text-white/80">A showcase of my Roblox development experience</p>
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
                  <span>{project.groupName || "Play Now"}</span>
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

export default RobloxWork;