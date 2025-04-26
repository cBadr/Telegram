import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Bot, Zap, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // تحديد حالة التمرير
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // إخفاء الـ Nav Bar عند التمرير لأسفل في نسخة الموبايل
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          // التمرير لأسفل
          setIsHidden(true);
        } else {
          // التمرير لأعلى
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-800/90 backdrop-blur-md shadow-lg py-3 border-b border-primary/20'
          : 'bg-transparent py-6'
      } ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center group relative">
          {/* لوجو متحرك */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-0.5 rounded-lg overflow-hidden group-hover:from-secondary group-hover:to-primary transition-all duration-500 shadow-lg shadow-primary/20">
            <div className="bg-gray-900 rounded-md p-2 flex items-center justify-center relative z-10">
              <Bot size={28} className="text-primary group-hover:text-secondary transition-all duration-500" />
            </div>
            {/* تأثير توهج خلف اللوجو */}
            <div className="absolute inset-0 blur-sm bg-gradient-to-br from-primary to-secondary opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
          </div>

          {/* اسم الموقع */}
          <div className="mr-3 flex flex-col">
            <div className="flex items-center">
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all duration-500">بوت تليجرام</span>
              <Zap size={18} className="text-primary mr-1 animate-pulse-slow" />
            </div>
            <span className="text-xs text-gray-400 flex items-center mt-0.5">
              <Code size={12} className="ml-1" />
              خدمات برمجة بوتات احترافية
            </span>
            {/* خط متحرك تحت اللوجو */}
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500"></span>
          </div>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-10 space-x-reverse">
            {[
              { href: "#services", label: "الخدمات" },
              { href: "#process", label: "طريقة العمل" },
              { href: "#about", label: "من نحن" },
              { href: "#examples", label: "أمثلة" },
              { href: "#faq", label: "الأسئلة الشائعة" }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white/90 hover:text-primary text-lg font-medium relative group transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn btn-primary flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all text-lg"
          >
            <MessageCircle size={20} />
            <span>تواصل معنا</span>
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-full hover:bg-primary/20 transition-all"
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isOpen
            ? <X size={28} className="text-primary transition-colors" />
            : <Menu size={28} className="hover:text-primary transition-colors" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed top-16 right-0 left-0 bg-gray-800/95 backdrop-blur-md shadow-lg p-8 h-auto z-40 transition-all duration-300 ease-in-out border-t border-primary/20"
        >
          {/* لوجو مصغر في قائمة الموبايل */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-0.5 rounded-lg overflow-hidden shadow-lg shadow-primary/20">
              <div className="bg-gray-900 rounded-md p-2 flex items-center justify-center relative z-10">
                <Bot size={24} className="text-primary" />
              </div>
              <div className="absolute inset-0 blur-sm bg-gradient-to-br from-primary to-secondary opacity-70"></div>
            </div>
            <div className="mr-3">
              <div className="flex items-center">
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">بوت تليجرام</span>
                <Zap size={16} className="text-primary mr-1 animate-pulse-slow" />
              </div>
              <span className="text-xs text-gray-400 flex items-center">
                <Code size={10} className="ml-1" />
                خدمات برمجة بوتات احترافية
              </span>
            </div>
          </div>

          <ul className="flex flex-col space-y-6">
            {[
              { href: "#services", label: "الخدمات" },
              { href: "#process", label: "طريقة العمل" },
              { href: "#about", label: "من نحن" },
              { href: "#examples", label: "أمثلة" },
              { href: "#faq", label: "الأسئلة الشائعة" }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className="block py-2 text-white/90 hover:text-primary text-xl font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={toggleMenu}
                className="btn btn-primary w-full text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all text-lg py-4"
              >
                <MessageCircle size={20} />
                <span>تواصل معنا</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;