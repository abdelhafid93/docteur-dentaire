"use client"
import { useState } from "react" 
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"




function Navbar() {
  const [isOpen, setIsOpen] = useState(false) 
  const pathname = usePathname()

  const links = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réserver", href: "/reservations" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const hideNavbarPaths = ['/studio', '/reservations'];

if (hideNavbarPaths.some(path => pathname.startsWith(path))) {
  return null;
}

  return (
<header>
  {/* =========================
   Top Bar (الشريط العلوي)
   ========================= */}
<div className="bg-cyan-600 text-white py-2 md:h-12 flex items-center relative z-20">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
    
    {/* Logo صغير + رسالة ترحيب */}
    <div className="flex items-center">
      <Image
        src="/logo1.svg"
        width={100}
        height={100}
        alt="logo"
        className="w-10 h-6 object-cover"
      />
      <span className="text-sm font-semibold tracking-wide uppercase text-white">
        Bienvenue chez Centre Médical
      </span>
    </div>

    {/* معلومات إضافية */}
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
        <span>24h/24 7j/7</span>
      </div>
    </div>
  </div>
</div>

{/* =========================
   Navbar Principale
   ========================= */}
<div className="bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 relative z-20">
  <nav className="container mx-auto flex items-center justify-between">

    {/* Logo principal */}
    <Link
      className="font-black text-xl md:text-2xl tracking-tighter text-slate-900"
      href="/"
    >
      Centre
      <span className="text-cyan-600 text-[16px] md:text-[18px]">
        {" "}
        Médical
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
      {/* Bouton Réserver */}
      <Link
        href="/reservations"
        className="hidden sm:block bg-cyan-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-cyan-700 transition-all shadow-md active:scale-95 text-sm"
      >
        RDV
      </Link>

      {/* Bouton Hamburger Mobile */}
      <button
        aria-label="toggle-menu"
        onClick={toggleMenu}
        className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  </nav>
</div>

{/* =========================
   Marquee (الشريط المتحرك)
   ========================= */}
<div className="overflow-hidden bg-slate-900 text-white py-3">
  {/* ضع هنا الـ motion.div الخاص بك */}
</div>
</header>
  )
}

export default Navbar