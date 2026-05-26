import { useEffect, useRef, useState } from "react";
import { Check, Star } from "lucide-react";

interface PricingProps {
  onJoinClick: () => void;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export default function Pricing({ onJoinClick }: PricingProps) {
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

  const plans: Plan[] = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners starting their fitness journey.",
      features: [
        "Access to gym floor",
        "Basic equipment usage",
        "Locker room access",
        "2 group classes/week",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$59",
      period: "/month",
      description: "Our most popular plan for serious fitness enthusiasts.",
      features: [
        "Full gym access 24/7",
        "All equipment included",
        "Unlimited group classes",
        "2 personal training sessions/month",
        "Nutrition consultation",
        "Sauna & steam room",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      description: "The ultimate fitness experience with VIP perks.",
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "Custom meal plans",
        "Priority booking",
        "Exclusive member events",
        "Free merchandise quarterly",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 bg-zinc-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-4">
            CHOOSE YOUR <span className="text-rose-500">PLAN</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle and goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-rose-500/20 to-zinc-900 border-2 border-rose-500 scale-105"
                  : "bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700"
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-bold flex items-center gap-1">
                  <Star size={14} className="fill-current" />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                <span className="text-zinc-500">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-rose-500" : "bg-zinc-700"}`}>
                      <Check size={12} className="text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={onJoinClick}
                className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:shadow-lg hover:shadow-rose-500/30"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}