import React, { useRef, useEffect, useState } from 'react';
import { Send, Phone, Mail, Instagram, Twitter, Linkedin, Facebook, User } from 'lucide-react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const bgCircle1Ref = useRef<HTMLDivElement>(null);
  const bgCircle2Ref = useRef<HTMLDivElement>(null);
  const bgCircle3Ref = useRef<HTMLDivElement>(null);
  const bgCircle4Ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // تتبع حركة الماوس
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const { clientWidth, clientHeight } = footerRef.current;
        // تحويل موقع الماوس إلى نسبة مئوية من حجم القسم
        const x = (e.clientX / clientWidth) - 0.5; // -0.5 إلى 0.5
        const y = (e.clientY / clientHeight) - 0.5; // -0.5 إلى 0.5
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // تحريك الدوائر الخلفية بناءً على موقع الماوس
  useEffect(() => {
    const moveCircles = () => {
      if (bgCircle1Ref.current && bgCircle2Ref.current && bgCircle3Ref.current && bgCircle4Ref.current) {
        // تحريك كل دائرة بسرعة مختلفة وفي اتجاه مختلف
        bgCircle1Ref.current.style.transform = `translate(${mousePosition.x * -30}px, ${mousePosition.y * -20}px)`;
        bgCircle2Ref.current.style.transform = `translate(${mousePosition.x * 40}px, ${mousePosition.y * 25}px)`;
        bgCircle3Ref.current.style.transform = `translate(${mousePosition.x * -50}px, ${mousePosition.y * 30}px)`;
        bgCircle4Ref.current.style.transform = `translate(${mousePosition.x * 60}px, ${mousePosition.y * -35}px)`;
      }
    };

    // استخدام requestAnimationFrame للحصول على أداء أفضل
    const animationId = requestAnimationFrame(moveCircles);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-gray-800 to-primary-dark text-white pt-16 pb-8 overflow-hidden">
      {/* خلفية متحركة مع تأثيرات تفاعلية */}
      <div className="absolute inset-0 overflow-hidden">
        {/* دوائر متحركة تتفاعل مع حركة الماوس */}
        <div
          ref={bgCircle1Ref}
          className="absolute top-20 left-0 w-40 h-40 bg-primary opacity-10 rounded-full blur-xl transition-transform duration-1000 ease-out"
          style={{ filter: 'blur(40px)' }}
        ></div>
        <div
          ref={bgCircle2Ref}
          className="absolute top-40 right-10 w-60 h-60 bg-secondary opacity-10 rounded-full blur-xl transition-transform duration-1000 ease-out"
          style={{ filter: 'blur(50px)' }}
        ></div>
        <div
          ref={bgCircle3Ref}
          className="absolute bottom-20 left-10 w-80 h-80 bg-primary opacity-10 rounded-full blur-xl transition-transform duration-1000 ease-out"
          style={{ filter: 'blur(60px)' }}
        ></div>
        <div
          ref={bgCircle4Ref}
          className="absolute -bottom-10 right-40 w-96 h-96 bg-secondary opacity-10 rounded-full blur-xl transition-transform duration-1000 ease-out"
          style={{ filter: 'blur(70px)' }}
        ></div>

        {/* جزيئات متحركة */}
        <div className="absolute inset-0 opacity-50 z-10">
          {[
            { top: '10%', left: '20%', size: 3, delay: 0, duration: 15, type: 1 },
            { top: '15%', left: '80%', size: 4, delay: 2, duration: 18, type: 2 },
            { top: '25%', left: '30%', size: 2, delay: 1, duration: 20, type: 3 },
            { top: '30%', left: '70%', size: 5, delay: 3, duration: 16, type: 4 },
            { top: '40%', left: '15%', size: 3, delay: 2, duration: 22, type: 5 },
            { top: '45%', left: '85%', size: 4, delay: 0, duration: 19, type: 1 },
            { top: '55%', left: '25%', size: 5, delay: 4, duration: 17, type: 2 },
            { top: '60%', left: '75%', size: 3, delay: 1, duration: 21, type: 3 },
            { top: '70%', left: '10%', size: 4, delay: 3, duration: 18, type: 4 },
            { top: '75%', left: '60%', size: 2, delay: 2, duration: 23, type: 5 }
          ].map((particle, index) => (
            <div
              key={index}
              className={`particle bg-white rounded-full absolute animate-float-${particle.type}`}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: particle.top,
                left: particle.left,
                opacity: 0.7,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            ></div>
          ))}
        </div>

        {/* شبكة خلفية */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* طبقة شفافة داكنة مع تأثير تدرج */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-0"></div>

      {/* تأثيرات توهج في الخلفية */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* توهج أساسي */}
        <div
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"
          style={{ filter: 'blur(80px)' }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-[100px] animate-pulse"
          style={{ filter: 'blur(60px)' }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">بوت تليجرام</h3>
            <p className="mb-4 text-gray-400">
              خدمات برمجة بوتات تليجرام احترافية - بوتات تفاعلية، خدمة عملاء، ألعاب، تسوق إلكتروني وأكثر!
            </p>

            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">الخدمات</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">طريقة العمل</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#examples" className="text-gray-400 hover:text-white transition-colors">أمثلة المشاريع</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">بوتات الشات التفاعلية</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">بوتات خدمة العملاء</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">بوتات التسوق الإلكتروني</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">بوتات الألعاب</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">بوتات إدارة الأعمال</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">بوتات مخصصة</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">اشترك في النشرة البريدية</h3>
            <p className="mb-4 text-gray-400">
              احصل على آخر النصائح والتحديثات في عالم بوتات تليجرام
            </p>

            <form className="flex">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-gray-800 border-0 rounded-r-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="bg-primary text-white rounded-l-lg px-4 hover:bg-primary-dark transition-colors">
                <Send size={18} />
              </button>
            </form>

            <div className="mt-6 space-y-2">
              <div className="flex items-center text-gray-400">
                <User size={18} className="ml-2" />
                <span>محمد بدر</span>
              </div>
              <a href="tel:+201028576824" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone size={18} className="ml-2" />
                <span dir="ltr">+201028576824</span>
              </a>
              <a href="mailto:Sales@autobot.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="ml-2" />
                <span>Sales@autobot.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} بوت تليجرام. جميع الحقوق محفوظة.
            </p>

            <div className="flex space-x-4 space-x-reverse text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;