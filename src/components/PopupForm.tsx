import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { CONTACT_INFO } from "../constants";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Simulate redirect delay
    setTimeout(() => {
      window.open(`https://wa.me/${CONTACT_INFO.whatsapp_number}?text=Hi%20Norixel!%20I%20would%20like%20a%20free%20consultation.`, "_blank");
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-norixel-navy/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-6 md:p-8 glass rounded-3xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-norixel-navy transition-colors rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-norixel-navy mb-2">Success!</h3>
                <p className="text-gray-600 mb-4">Redirecting you to our digital growth expert on WhatsApp...</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-norixel-navy mb-2 text-center">Let's Grow Together</h2>
                <p className="text-gray-600 text-center mb-6 text-sm">
                  Fill in your details for a complimentary brand strategy session.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-norixel-navy/20 focus:border-norixel-navy transition-all bg-white/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-norixel-navy/20 focus:border-norixel-navy transition-all bg-white/50"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-norixel-navy/20 focus:border-norixel-navy transition-all bg-white/50"
                    >
                      <option value="" disabled selected>Select your industry</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="realestate">Real Estate</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="saas">SaaS / Tech</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full relative group overflow-hidden bg-norixel-navy text-white rounded-xl py-4 font-semibold text-lg hover:shadow-lg hover:shadow-norixel-navy/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out]" />
                    <span>Get Free Consultation</span>
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
