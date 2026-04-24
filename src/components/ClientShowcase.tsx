import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UploadCloud, Image as ImageIcon, X } from "lucide-react";

export default function ClientShowcase() {
  const [uploads, setUploads] = useState<{url: string, name: string}[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      setUploads(prev => [...prev, { url, name: file.name }]);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsHovering(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      Array.from(e.dataTransfer.files).forEach(handleFile);
    }
  };

  const removeUpload = (index: number) => {
    setUploads(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-norixel-navy mb-4 tracking-tight">
            Client Showcase & Proof
          </h2>
          <p className="text-gray-500 mb-8">
            See the transformative results we've achieved for our clients. (Demo functionality)
          </p>
        </div>

        {/* Upload Zone */}
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsHovering(true); }}
          onDragLeave={() => setIsHovering(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`max-w-2xl mx-auto border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all duration-300 mb-12 ${
            isHovering ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-400 hover:bg-gray-50"
          }`}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*,video/*"
            multiple
            onChange={(e) => {
              if (e.target.files) Array.from(e.target.files).forEach(handleFile);
              // Reset so same file can be uploaded again if needed
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
          />
          <div className="w-20 h-20 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <UploadCloud size={32} />
          </div>
          <h3 className="text-xl font-bold text-norixel-navy mb-2">Drag & Drop Your Success Stories</h3>
          <p className="text-gray-500">or click to browse from your computer (Images/Videos)</p>
        </div>

        {/* Gallery Grid */}
        {uploads.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {uploads.map((upload, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm"
                >
                  <img src={upload.url} alt={upload.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-norixel-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                    <ImageIcon className="text-white mb-2" size={32} />
                    <span className="text-white text-sm font-medium text-center truncate w-full">{upload.name}</span>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeUpload(index); }}
                    className="absolute top-3 right-3 p-1.5 bg-white text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
