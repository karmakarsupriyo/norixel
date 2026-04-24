import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const INITIAL_REVIEWS = [
  { id: 1, name: "Rahul Verma", role: "CEO, TechNova", rating: 5, text: "Norixel transformed our digital presence. Our lead volume has tripled in just 3 months. Professional, transparent, and absolutely results-driven." },
  { id: 2, name: "Priya Sharma", role: "Founder, LuxeBoutique", rating: 5, text: "The social media strategy they executed was flawless. We saw a 150% increase in online sales. Highly recommend their entire team!" },
  { id: 3, name: "Amit Patel", role: "Marketing Director", rating: 5, text: "Their SEO and Google Ads campaigns are top notch. We are dominating the search results in our area now. Incredible ROI." }
];

export default function Reviews() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
             <h2 className="text-3xl md:text-5xl font-bold text-norixel-navy mb-6 tracking-tight">
               Don't Just Take Our Word For It.
             </h2>
             <p className="text-gray-500 mb-8 text-lg">
               See what our partners say about the growth and scaling we've achieved together.
             </p>
             <button className="bg-white border-2 border-norixel-navy text-norixel-navy font-semibold px-8 py-3 rounded-xl hover:bg-norixel-navy hover:text-white transition-colors duration-300">
               Write a Review
             </button>
          </div>

          <div className="relative">
            <Quote className="absolute -top-10 -left-6 text-gray-200 w-24 h-24 rotate-180 z-0" />
            
            <div className="relative z-10 glass-dark bg-white/80 p-8 md:p-12 rounded-3xl min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={20} />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-norixel-navy font-medium leading-relaxed mb-8">
                    "{reviews[currentIndex].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                      {reviews[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-norixel-navy">{reviews[currentIndex].name}</div>
                      <div className="text-sm text-gray-500">{reviews[currentIndex].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button onClick={prev} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-norixel-navy hover:bg-gray-50 transition-colors shadow-sm">
                <ChevronLeft />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full bg-norixel-navy flex items-center justify-center text-white hover:bg-opacity-90 transition-colors shadow-md">
                <ChevronRight />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
