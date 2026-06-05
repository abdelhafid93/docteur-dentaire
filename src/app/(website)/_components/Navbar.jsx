"use client"
import { useState, useEffect } from "react" 
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false) 
  const pathname = usePathname()

  // الخطوة 1: تحديث الروابط لتشير إلى أقسام عيادة الأسنان في الصفحة الرئيسية (Landing Page)
  const links = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/#services" }, // سينتقل مباشرة لقسم خدمات الأسنان
    { name: "À propos", href: "/#apropos" },   // نبذة عن طبيب الأسنان والعيادة
    { name: "Sourires", href: "/#gallery" },   // معرض صور الحالات (قبل وبعد)
  ];

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // إغلاق القائمة عند تغيير الصفحة
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const hideNavbarPaths = ['/studio', '/reservations'];

  if (hideNavbarPaths.some(path => pathname.startsWith(path))) {
    return null;
  }

  return (
    <header className="relative w-full">
      {/* =========================
          Top Bar (الشريط العلوي)
          ========================= */}
      <div className="bg-cyan-600 text-white py-2 md:h-12 flex items-center relative z-[60]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 px-6">
          
          <div className="flex items-center">
            <Image
              src="/logo1.svg"
              width={100}
              height={100}
              alt="logo"
              className="w-10 h-6 object-cover"
            />
            {/* تحديث نص الترحيب ليناسب عيادة الأسنان */}
            <span className="text-sm font-semibold tracking-wide uppercase text-white ml-2">
              Chirurgie & Esthétique Dentaire
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white font-bold text-[13px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Sur Rendez-vous</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          Navbar Principale
          ========================= */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 relative z-[50]">
        <nav className="container mx-auto flex items-center justify-between">

          {/* اسم اللوجو المحدث ليناسب الهوية الجديدة الموحدة */}
          <Link
            className="font-black text-xl md:text-2xl tracking-tighter text-slate-900"
            href="/"
          >
            Dentiste
            <span className="text-cyan-600 text-[16px] md:text-[18px]">
              {" "}
              Maroc
            </span>
          </Link>

          {/* Liens Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 font-bold transition-all rounded-lg ${
                    pathname === link.href
                      ? "text-cyan-600 bg-cyan-50"
                      : "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bouton RDV + Menu Mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="/reservations"
              className="hidden sm:block bg-cyan-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-cyan-700 transition-all shadow-md active:scale-95 text-sm"
            >
              RDV
            </Link>

            {/* Bouton Hamburger Mobile */}
            <button
              type="button"
              aria-label="toggle-menu"
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors relative z-[70]"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              )}
            </button>
          </div>
        </nav>

        {/* =========================
            Mobile Menu (Dropdown)
            ========================= */}
        <div 
          className={`
            md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl z-[40] overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col p-6 gap-2">
            {links.map((link, index) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                key={index}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 font-bold rounded-lg transition-all ${
                    pathname === link.href ? "text-cyan-600 bg-cyan-50" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <li className="mt-4 pt-4 border-t border-slate-100">
              <Link 
                href="/reservations" 
                onClick={closeMenu}
                className="block w-full text-center bg-cyan-600 text-white font-bold py-3 rounded-xl shadow-md"
              >
                Prendre un RDV
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* =========================
          Marquee (الشريط المتحرك)
          ========================= */}
      <div className="overflow-hidden bg-slate-900 text-white py-3">
        {/* اترك هذا الجزء كما هو خاص بـ motion.div */}
      </div>
    </header>
  )
}

export default Navbar;