import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { BRAND_NAME, CONTACT_INFO } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-norixel-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="font-extrabold text-2xl tracking-tighter text-white mb-6">
              NORIXEL
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your partner in digital growth. We build strategies that turn your brand into a market leader.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Case Studies', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
               <li>Performance Marketing</li>
               <li>Social Media Management</li>
               <li>SEO Strategy</li>
               <li>Web Development</li>
               <li>Brand Identity</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="top-1 relative flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <div className="flex flex-col">
                  <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone1}</a>
                  <a href={`tel:${CONTACT_INFO.phone2}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone2}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
