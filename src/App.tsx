import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Work from "./pages/Work";
import RobloxWork from "./pages/RobloxWork";
import Skills from "./pages/Skills";
import WebDevelopment from "./pages/WebDevelopment";
import RobloxDevelopment from "./pages/RobloxDevelopment";
import GameDevelopment from "./pages/GameDevelopment";
import OtherSkills from "./pages/OtherSkills";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/roblox" element={<RobloxWork />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills/web" element={<WebDevelopment />} />
          <Route path="/skills/roblox" element={<RobloxDevelopment />} />
          <Route path="/skills/game" element={<GameDevelopment />} />
          <Route path="/skills/other" element={<OtherSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;