import { Link, useLocation } from "react-router-dom";
import { Layers, Briefcase, Award, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Layers, label: "Home" },
    { path: "/work", icon: Briefcase, label: "Work" },
    { path: "/skills", icon: Award, label: "Skills" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-primary-light transition-colors"
          >
            Intersk Portfolio
          </Link>
          <div className="flex items-center space-x-6">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`group flex items-center space-x-2 px-6 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === path
                    ? "bg-white text-primary font-semibold shadow-lg hover:bg-opacity-90"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                  location.pathname === path ? "text-primary" : "text-white"
                }`} />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;