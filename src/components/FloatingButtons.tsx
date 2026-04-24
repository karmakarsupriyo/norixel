import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function FloatingButtons() {
  const handleWhatsApp = () => window.open(`https://wa.me/${CONTACT_INFO.whatsapp_number}`, "_blank");
  const handleCall = () => window.open(`tel:${CONTACT_INFO.phone1}`, "_self");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      
      {/* Call Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCall}
        className="w-12 h-12 bg-blue-500 rounded-full text-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
      >
        <Phone size={20} fill="currentColor" />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="relative group w-14 h-14 bg-[#25D366] rounded-full text-white shadow-xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      >
        {/* Pulse effect */}
        <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        
        <MessageCircle size={28} className="relative z-10" />

        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Chat with us!
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
        </div>
      </motion.button>

    </div>
  );
}
