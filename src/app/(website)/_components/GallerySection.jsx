"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TbEye } from "react-icons/tb";

function GallerySection() {
  const images = [
    {
      id: 5,
      src: "resp.jpg",
      title: "Esthétique Dentaire",
      // تأخذ الصف بالكامل (4 أعمدة) وتمتد لصفين لتبدو كبانوراما عريضة وفخمة
      size: "col-span-1 sm:col-span-2 md:col-span-4 row-span-2", 
      objectMode: "object-cover", // أفضل من contain لمنع الحواف الفارغة داخل الكارت الدائري
    },
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
      title: "Consultation Moderne",
      size: "col-span-1 md:col-span-2 row-span-2", // كارت عمودي كبير متوازن
      objectMode: "object-cover",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop",
      title: "Sourire Éclatant",
      size: "col-span-1 row-span-1",
      objectMode: "object-cover",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
      title: "Équipements Digitaux",
      size: "col-span-1 row-span-1",
      objectMode: "object-cover",
    },
    {
      id: 4,
      src: "/12534.jpg",
      title: "Soin Précis",
      size: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1", // يغلق الصف الأخير تماماً بجانب الصورة الأولى (2 + 2 = 4)
      objectMode: "object-cover",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* العناوين الرئيسية للقسم */}
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-cyan-600 font-extrabold uppercase tracking-[0.2em] text-xs bg-cyan-50 px-4 py-1.5 rounded-full inline-block"
          >
            Notre Galerie
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight"
          >
            Un Aperçu de Notre Cabinet & Résultats
          </motion.h2>
          
          <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        {/* شبكة هندسية محكمة الإغلاق تعتمد على 4 أعمدة في الشاشات الكبيرة بدون فراغات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-cyan-950/5 transition-all duration-500 bg-white ${image.size}`}
            >
              {/* الصورة مع كلاس القص الديناميكي المستدعى من المصفوفة */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`transition-transform duration-750 ease-out group-hover:scale-103 ${image.objectMode}`}
                unoptimized
              />

              {/* تأثير الـ Hover السينمائي المطور مع تدرج لوني يعزز وضوح الخط */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6 md:p-8">
                <motion.div 
                  className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
                >
                  <div className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white text-xl shadow-inner border border-white/10">
                    <TbEye />
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-bold tracking-wide">
                    {image.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GallerySection;