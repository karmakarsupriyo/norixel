import { motion } from "motion/react";
import { ArrowRight, PhoneCall, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Hero() {
  const handleWhatsApp = () => window.open(`https://wa.me/${CONTACT_INFO.whatsapp_number}`, "_blank");
  const handleCall = () => window.open(`tel:${CONTACT_INFO.phone1}`, "_self");

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white glass border border-gray-100 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-norixel-navy tracking-wide uppercase">Award Winning Digital Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-norixel-navy leading-[1.1] tracking-tight mb-6"
          >
            Turn Your Brand Into a <br className="hidden sm:block" />
            <span className="text-gradient">Market Leader</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed font-light"
          >
            We help businesses grow with smart digital strategies. Elevate your presence, multiply your leads, and dominate your industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={handleWhatsApp}
              className="group relative flex items-center justify-center gap-3 bg-norixel-navy text-white px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-norixel-navy/20 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-out]" />
              <MessageCircle size={22} />
              Chat on WhatsApp
            </button>
            <button 
              onClick={handleCall}
              className="group flex items-center justify-center gap-3 bg-white text-norixel-navy border-2 border-gray-100 hover:border-gray-200 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:shadow-md active:scale-95"
            >
              <PhoneCall size={22} className="text-blue-500" />
              Call Now
            </button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-400"
          >
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden`}>
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 text-yellow-400">
                {"★★★★★".split('').map((s,i) => <span key={i}>{s}</span>)}
              </div>
              <span>Trusted by 500+ businesses</span>
            </div>
          </motion.div>
        </div>

        {/* Right side Illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="relative lg:h-[600px] w-full hidden md:block"
        >
          {/* Creating an abstract CSS illustration that looks premium */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
             <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[500px]">
                {/* Main Glass Card */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute inset-0 glass-dark rounded-3xl z-20 flex flex-col p-6 overflow-hidden border-t border-l border-white/20"
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                      <ArrowRight className="-rotate-45" />
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 text-xs uppercase tracking-wider">Conversion</div>
                      <div className="text-2xl font-bold text-white">+248%</div>
                    </div>
                  </div>
                  {/* Chart representation */}
                  <div className="flex-1 w-full bg-white/5 rounded-xl border border-white/10 p-4 flex items-end gap-2 relative overflow-hidden">
                    {[30, 45, 25, 60, 50, 80, 100].map((h, i) => (
                      <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         animate={{ height: `${h}%` }}
                         transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                         className="flex-1 bg-gradient-to-t from-blue-600 to-blue-300 rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* Floating Elements Backdrop */}
                <motion.div 
                  animate={{ y: [15, -15, 15], rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-full blur-2xl z-0"
                />
                <motion.div 
                   animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
                   transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                   className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-2xl shadow-xl z-30 p-4 border border-gray-100 flex flex-col justify-center gap-2"
                >
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-green-400 rounded-full" />
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Setup complete</div>
                </motion.div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
