import { motion } from "motion/react";

export default function FeaturePoster() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative group">
        
        {/* Background dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-norixel-navy via-[#0f2a4a] to-[#1a406e] z-0" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 px-8 py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-sm font-semibold tracking-wider font-mono mb-8 uppercase"
          >
            The Ultimate Scaling Framework
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] max-w-5xl mx-auto mb-10"
          >
            DOMINATE YOUR MARKET WITH DATA-DRIVEN PRECISION.
          </motion.h2>

          <motion.p
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            Stop guessing. Start growing. We build automated funnels and aggressive marketing campaigns that convert clicks into loyal customers.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-white text-norixel-navy px-10 py-5 rounded-full font-bold text-xl uppercase tracking-widest overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-out]" />
            Get Started Now
          </motion.button>
        </div>
      </div>
    </section>
  );
}
