"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { TbHeart, TbLayoutGrid, TbStars, TbMoodSmile } from "react-icons/tb";

const AboutSection = () => {
  // إحصائيات دقيقة ومخصصة لمركز طب الأسنان الحديث
  const clinicStats = [
    { icon: <TbMoodSmile />, label: "Sourires Sublimés", value: "3500+" },
    { icon: <TbHeart />, label: "Soins & Confort Patient", value: "100%" },
    { icon: <TbStars />, label: "Blanchiments & Facettes", value: "950+" },
    { icon: <TbLayoutGrid />, label: "Cabinet Digital Moderne", value: "Premium" },
  ];

  return (
    <section id="apropos" className="py-20 md:py-28 bg-white overflow-hidden relative">
      
      {/* لمسة جمالية خلفية ناعمة ونظيفة */}
      <div className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-50/60 rounded-full blur-3xl -z-10 pointer-events-none select-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* =========================================================
              1. الجزء الأيسر: عرض صور طب الأسنان المتداخلة هندسياً
              ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px]">
              
              {/* الصورة الرئيسية: العيادة الرقمية وتجهيزات الأسنان المتطورة */}
              <div className="absolute top-0 left-0 w-[82%] h-[82%] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-slate-50/80">
                <Image 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Centre Dentaire Doctor Maroc Tanger"
                  fill
                  sizes="(max-width: 768px) 85vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  priority
                  unoptimized
                />
              </div>

              {/* الصورة الثانوية المتداخلة: جودة الابتسامة والنتيجة الطبيعية */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute bottom-0 right-0 w-[58%] h-[58%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 md:border-8 border-white"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop" 
                  alt="Sourire Éclatant à Tanger - Doctor Maroc"
                  fill
                  sizes="(max-width: 768px) 55vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  unoptimized
                />
              </motion.div>

              {/* زخرفة هندسية خلف الصور */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-tr from-cyan-200/40 to-cyan-100/20 rounded-3xl -z-10 blur-sm" />
            </div>
          </motion.div>

          {/* =========================================================
              2. الجزء الأيمن: النصوص الخاصة بمركز الأسنان والبيانات المعتمدة
              ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="text-center lg:text-left space-y-4">
              <span className="text-cyan-600 font-extrabold uppercase tracking-[0.2em] text-xs bg-cyan-50 px-4 py-1.5 rounded-full inline-block">
                Centre Médical Dentaire
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                L'Art de Créer des Sourires Parfaits.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium pt-2">
                Bienvenue chez <span className="text-cyan-600 font-bold">Doctor Maroc</span>, votre centre médical de référence dédié exclusivement aux soins dentaires de pointe et à l'esthétique du sourire à Tanger. Nous nous engageons à fournir les meilleurs soins médicaux avec des technologies de pointe et une équipe d'experts dévoués à votre santé.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                Qu'il s'agisse d'une transformation esthétique (Hollywood Smile), d'aligneurs invisibles, d'implants ou de soins préventifs, notre cabinet situé au <strong>123 Avenue Mohamed V, Tanger</strong> vous accueille dans un environnement moderne pensé pour votre confort absolu. Pour toute question, contactez-nous sur <strong>ex@doctormaroc.com</strong>.
              </p>
            </div>

            {/* شبكة الإحصائيات المخصصة لطب الأسنان */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {clinicStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-cyan-100 bg-slate-50/50 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-white text-cyan-600 border border-slate-100 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-all duration-300 shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900 leading-none">
                      {stat.value}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-semibold">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;