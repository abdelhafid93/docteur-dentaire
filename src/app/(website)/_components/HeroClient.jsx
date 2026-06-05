"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  // البيانات الثابتة لعيادة الأسنان (بديلة لـ Sanity)
  const data = {
    title: "Un Sourire Éclatant, Une Santé Durable",
    subtitle: "Chirurgie & Esthétique Dentaire de Pointe",
    description: "Découvrez des soins dentaires d'exception dans un cadre moderne et chaleureux. Notre équipe d'experts met tout en œuvre pour sublimer votre sourire et préserver votre santé bucco-dentaire au Maroc.",
    // يمكنك استبدال هذه الصورة بمسار صورتك الخاصة في مجلد public لاحقاً (مثال: /hero-dentist.jpg)
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
  };

  // دالة للتمرير السلس إلى قسم الخدمات عند الضغط على زر Nos Services
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative w-full min-h-[85vh] lg:h-[85vh] flex items-center bg-[#EBFDFF] overflow-hidden py-12 lg:py-0">
      
      {/* الدوائر الجمالية الخلفية لإعطاء تأثير طبي معاصر ومريح للنظر */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-slate-200/30 rounded-full blur-2xl z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* =========================
              القسم الأيسر: النصوص والأزرار
              ========================= */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6 order-2 lg:order-1">
            <div className="space-y-3">
              {/* العنوان الرئيسي */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight"
              >
                {data.title}
              </motion.h1>
              
              {/* العنوان الفرعي باللون الـ Cyan المعتمد لديك */}
              <motion.h2
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-600 tracking-wide"
              >
                {data.subtitle}
              </motion.h2>
            </div>

            {/* الوصف */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium mx-auto md:mx-0"
            >
              {data.description}
            </motion.p>

            {/* الأزرار التفاعلية */}
            <div className="flex  items-center flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <Link
                  href="/reservations"
                  className="inline-block  bg-cyan-600 text-white px-6 md:px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/20 active:scale-95 text-center"
                >
                  Prendre RDV
                </Link>
              </motion.div>

       
            </div>
          </div>

          {/* =========================
              القسم الأيمن: الصورة الجمالية للعيادة
              ========================= */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full aspect-square max-w-[450px] lg:max-w-none h-[350px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src={data.heroImage}
                alt={data.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-102"
                priority
                unoptimized // مضافة لضمان عمل روابط الصور الخارجية بدون مشاكل config
              />
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Hero;