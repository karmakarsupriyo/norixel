import { motion } from "motion/react";
import { FEATURES } from "../constants";

export default function Features() {
  const half = Math.ceil(FEATURES.length / 2);
  const row1 = FEATURES.slice(0, half);
  const row2 = FEATURES.slice(half);

  // We duplicate arrays to create seamless infinite scrolling
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-norixel-navy mb-4 tracking-tight">
          Everything You Need to Scale
        </h2>
        <p className="text-gray-500">Over 40+ powerful marketing and sales features under one roof.</p>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Gradients to hide edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex w-fit overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * row1.length] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-4 pr-4 pl-4"
          >
             {marqueeRow1.map((feature, i) => (
                <div key={`r1-${i}`} className="whitespace-nowrap px-6 py-3 bg-white border border-gray-100 rounded-full text-norixel-navy font-medium shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {feature}
                </div>
             ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex w-fit overflow-hidden">
          <motion.div
            animate={{ x: [-100 * row2.length, 0] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-4 pr-4 pl-4"
          >
             {marqueeRow2.map((feature, i) => (
                <div key={`r2-${i}`} className="whitespace-nowrap px-6 py-3 bg-white border border-gray-100 rounded-full text-norixel-navy font-medium shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  {feature}
                </div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
