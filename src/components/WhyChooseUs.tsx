import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE_US } from "../constants";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-norixel-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3"
            >
              Why Choose Us
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
            >
              We Don't Just Work, We Deliver Results.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-8"
            >
              Partner with an agency that prioritizes your ROI. We bring unparalleled expertise and dedication to every campaign.
            </motion.p>
            
            <div className="space-y-6">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 text-blue-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="aspect-square bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[2rem] p-8 glass-dark relative overflow-hidden flex items-center justify-center"
            >
               {/* Abstract geometric composition inside */}
               <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border border-blue-500/30 rounded-full border-dashed"
                  />
                  <div className="absolute w-48 h-48 bg-blue-500/20 rounded-full blur-xl" />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-10 text-center"
                  >
                    <div className="text-6xl font-bold text-white mb-2 tracking-tighter">10x</div>
                    <div className="text-blue-200 tracking-widest uppercase text-xs font-semibold">Growth Potential</div>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
