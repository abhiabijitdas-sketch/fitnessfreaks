import { useEffect, useRef, useState } from "react";
import { Users } from "lucide-react";

interface Trainer {
  name: string;
  role: string;
  experience: string;
  image: string;
}

export default function Trainers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trainers: Trainer[] = [
    {
      name: "Mike Johnson",
      role: "Head Strength Coach",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1567013127542-490d7575314b?w=400&h=400&fit=crop",
    },
    {
      name: "Sarah Williams",
      role: "Cardio Specialist",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
    },
    {
      name: "James Chen",
      role: "CrossFit Coach",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
    },
    {
      name: "Emma Davis",
      role: "Yoga & Mobility",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1518611012118-640e2a0f6a06?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section
      id="trainers"
      ref={sectionRef}
      className="py-24 bg-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-4">
            EXPERT <span className="text-rose-500">TRAINERS</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Meet our team of certified fitness professionals dedicated to helping you achieve your goals.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-rose-500 text-sm font-medium mb-2">{trainer.role}</p>
                <p className="text-zinc-500 text-sm">{trainer.experience} experience</p>

                {/* Social Links */}
                <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-rose-500 flex items-center justify-center transition-colors">
                    <Users size={14} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}