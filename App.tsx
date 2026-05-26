import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/Footer";
import MembershipModal from "./components/MembershipModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar onJoinClick={handleJoinClick} />
      <Hero onJoinClick={handleJoinClick} />
      <Programs />
      <Trainers />
      <Pricing onJoinClick={handleJoinClick} />
      <Location />
      <Footer />
      
      <MembershipModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}