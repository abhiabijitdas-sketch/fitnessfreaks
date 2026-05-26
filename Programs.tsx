import { useEffect, useRef, useState } from "react";
import { Dumbbell, Heart, Zap, Target } from "lucide-react";

interface Program {
  icon: React.ElementType;
  title: string;
  description: string;
  intensity: string;
  duration: string;
}

export default function Programs() {
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

  const programs: Program[] = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle mass and increase your overall strength with our comprehensive weight training programs.",
      intensity: "High",
      duration: "60 min",
    },
    {
      icon: Heart,
      title: "Cardio Blast",
      description: "Boost your endurance and burn calories with our high-energy cardio sessions and HIIT workouts.",
      intensity: "Medium-High",
      duration: "45 min",
    },
    {
      icon: Zap,
      title: "CrossFit",
      description: "Challenge yourself with varied functional movements performed at high intensity for total body conditioning.",
      intensity: "Extreme",
      duration: "75 min",
    },
    {
      icon: Target,
      title: "Personal Training",
      description: "Get personalized attention and custom workout plans tailored to your specific fitness goals.",
      intensity: "Custom",
      duration: "Flexible",
    },
  ];

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="py-24 bg-zinc-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-4">
            TRAIN LIKE A <span className="text-rose-500">CHAMPION</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Discover our range of fitness programs designed to help you achieve your goals, whether you're a beginner or a seasoned athlete.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-rose-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <program.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
              <p className="text-zinc-400 mb-6">{program.description}</p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 font-medium">
                  {program.intensity}
                </span>
                <span className="text-zinc-500">{program.duration}</span>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}