import { useState } from "react";
import { X, Check, Loader2 } from "lucide-react";

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string | null;
}

export default function MembershipModal({ isOpen, onClose, selectedPlan }: MembershipModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    fitnessGoal: "general",
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          fitnessGoal: "general",
          agreeTerms: false,
        });
      }, 2000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check size={32} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Welcome to Fitness Freaks!</h3>
            <p className="text-zinc-400">We'll contact you shortly to complete your registration.</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-6 pb-0">
              <h3 className="text-2xl font-bold text-white mb-1">Join Fitness Freaks</h3>
              <p className="text-zinc-400 text-sm">
                {selectedPlan ? `Selected Plan: ${selectedPlan}` : "Start your fitness journey today"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-zinc-300 text-sm mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-zinc-300 text-sm mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-zinc-300 text-sm mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-zinc-300 text-sm mb-1.5">Fitness Goal</label>
                <select
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-zinc-800 border border-white/10 rounded-xl text-white focus:border-rose-500 focus:outline-none transition-colors"
                >
                  <option value="general">General Fitness</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="athletic">Athletic Performance</option>
                </select>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 rounded bg-zinc-800 border-white/20 text-rose-500 focus:ring-rose-500 focus:ring-offset-zinc-900 mt-0.5"
                />
                <label className="text-zinc-400 text-sm">
                  I agree to the terms and conditions and privacy policy
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Registration"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}