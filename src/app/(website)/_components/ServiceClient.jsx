"use client";

import Link from "next/link";
import Image from "next/image";
import {
  TbDental,
  TbStars,
  TbScissors,
  TbShieldCheck,
  TbMask,
  TbActivity,
} from "react-icons/tb";
import { FaAnglesRight } from "react-icons/fa6";
import { motion } from "framer-motion";

function ServiceClient({ data }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  // مصفوفة أيقونات مستقرة ومتوفرة في جميع إصدارات الحزمة ومناسبة لطب الأسنان
  const icons = [
    TbDental,       // للخدمات العامة والفحوصات
    TbStars,        // لتجميل الأسنان وتبييضها (Hollywood Smile)
    TbScissors,     // للجراحة وزراعة الأسنان (Chirurgie)
    TbShieldCheck,  // لحماية اللثة والوقاية (Parodontologie)
    TbMask,         // للتعقيم والطب الوقائي والأقنعة الطبية
    TbActivity,     // للمتابعة الدورية وصحة الفم الكاملة
  ];

  // مصفوفة صور Unsplash الاحترافية المخصصة لطب الأسنان
  const fallbackImages = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=600&auto=format&fit=crop", 
  ];

  return (
    <section id="services" className="py-20 bg-slate-50/60">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-cyan-600 font-extrabold uppercase tracking-[0.2em] text-xs bg-cyan-50 px-4 py-1.5 rounded-full inline-block"
          >
            Nos Services Dentaires
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight max-w-2xl mx-auto"
          >
            Des solutions modernes pour un sourire sain et éclatant
          </motion.h2>
          
          <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {data?.map((item, index) => {
            const Icon = icons[index % icons.length];
            const cardImage = item?.image || fallbackImages[index % fallbackImages.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-cyan-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-600/5 transition-all duration-300 flex flex-col h-full"
              >
                {/* حاوية الصورة العلوية */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                  <Image
                    src={cardImage}
                    alt={item?.title || "Service Dentaire"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                </div>

                {/* محتوى المربع */}
                <div className="p-8 flex flex-col justify-between flex-grow relative">
                  
                  <div className="space-y-5">
                    {/* Icon Wrapper العائم */}
                    <div className="absolute -top-7 left-8 w-14 h-14 bg-white text-cyan-600 rounded-2xl flex items-center justify-center text-3xl shadow-md border border-slate-50 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-all duration-300">
                      <Icon />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3 pt-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                        {item?.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                        {item?.description}
                      </p>
                    </div>
                  </div>

                  {/* Call to Action Button */}
                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                    <Link
                      href={`/service/${item?.slug}`}
                      onClick={scrollToTop}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-cyan-600 group/link transition-colors duration-200"
                    >
                      <span>En savoir plus</span>
                      <FaAnglesRight className="text-xs text-slate-400 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceClient;