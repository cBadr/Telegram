import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';

// مكون تأثير الكتابة المحسن مع تأثيرات إضافية
export const TypeWriter: React.FC<{
  texts: string[];
  typeSpeed?: number;
  backSpeed?: number;
  delayBetweenTexts?: number;
  loop?: boolean;
  className?: string;
  minHeight?: string;
  highlightWords?: boolean;
  glowEffect?: boolean;
  cursorStyle?: 'bar' | 'underscore' | 'block' | 'none';
  transitionEffect?: 'fade' | 'slide' | 'none';
}> = ({
  texts,
  typeSpeed = 50,
  backSpeed = 30,
  delayBetweenTexts = 1500,
  loop = true,
  className = "",
  minHeight = "2.5rem",
  highlightWords = false,
  glowEffect = false,
  cursorStyle = 'bar',
  transitionEffect = 'none'
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // تأثير التغيير بين النصوص
  useEffect(() => {
    if (transitionEffect !== 'none' && containerRef.current) {
      if (isChanging) {
        containerRef.current.classList.add(
          transitionEffect === 'fade' ? 'animate-fade-out' : 'animate-slide-out'
        );

        const timer = setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.classList.remove(
              transitionEffect === 'fade' ? 'animate-fade-out' : 'animate-slide-out'
            );
            containerRef.current.classList.add(
              transitionEffect === 'fade' ? 'animate-fade-in' : 'animate-slide-in'
            );
          }
          setIsChanging(false);
        }, 300);

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.classList.remove(
              transitionEffect === 'fade' ? 'animate-fade-in' : 'animate-slide-in'
            );
          }
        }, 500);

        return () => clearTimeout(timer);
      }
    }
  }, [isChanging, transitionEffect]);

  useEffect(() => {
    if (isPaused) return;

    const text = texts[currentIndex % texts.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));

        if (displayText === text) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, delayBetweenTexts);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));

        if (displayText === '') {
          setIsDeleting(false);
          setIsChanging(true);
          setCurrentIndex(currentIndex + 1);

          if (currentIndex === texts.length - 1) {
            setLoopNum(loopNum + 1);
            if (!loop && loopNum > 0) {
              return;
            }
          }
        }
      }
    }, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, typeSpeed, backSpeed, delayBetweenTexts, loop, loopNum]);

  // تقسيم النص إلى كلمات لتطبيق تأثيرات مختلفة على كل كلمة
  const renderText = () => {
    if (!highlightWords) {
      return <span className={className}>{displayText}</span>;
    }

    // تقسيم النص إلى كلمات
    const words = displayText.split(' ');

    return (
      <span className={className}>
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <span
              className={`inline-block transition-all duration-300 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'} hover:scale-105`}
              style={{
                animationDelay: `${index * 0.1}s`,
                textShadow: glowEffect ? `0 0 8px ${index % 2 === 0 ? 'rgba(var(--primary-rgb), 0.7)' : 'rgba(var(--secondary-rgb), 0.7)'}` : 'none'
              }}
            >
              {word}
            </span>
            {index < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </span>
    );
  };

  // تحديد نوع المؤشر
  const getCursor = () => {
    switch (cursorStyle) {
      case 'bar':
        return <span className="animate-pulse">|</span>;
      case 'underscore':
        return <span className="animate-pulse">_</span>;
      case 'block':
        return <span className="animate-pulse bg-primary/70 w-2 h-5 inline-block ml-1"></span>;
      case 'none':
        return null;
      default:
        return <span className="animate-pulse">|</span>;
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ minHeight }}
      className={`inline-block ${glowEffect ? 'text-shadow-glow' : ''}`}
    >
      {renderText()}
      {getCursor()}
    </div>
  );
};

const Hero: React.FC = () => {
  const botIlluRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const bgCircle1Ref = useRef<HTMLDivElement>(null);
  const bgCircle2Ref = useRef<HTMLDivElement>(null);
  const bgCircle3Ref = useRef<HTMLDivElement>(null);
  const bgCircle4Ref = useRef<HTMLDivElement>(null);

  const [showFirstMessage, setShowFirstMessage] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // تتبع حركة الماوس
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientWidth, clientHeight } = heroRef.current;
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
    // طباعة قيم موقع الماوس للتأكد من أنها تتغير
    console.log("Mouse position:", mousePosition);

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

  // تأخير ظهور الرسائل
  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirstMessage(true), 1000);
    const timer2 = setTimeout(() => setShowSecondMessage(true), 3000);
    const timer3 = setTimeout(() => setShowThirdMessage(true), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // تأثير التمرير على البوت
  useEffect(() => {
    const handleScroll = () => {
      if (botIlluRef.current) {
        const scrollValue = window.scrollY;
        botIlluRef.current.style.transform = `translateY(${scrollValue * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen pb-32 flex items-center pt-16 overflow-hidden bg-gradient-to-br from-gray-800 to-primary-dark">
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

        {/* جزيئات متحركة - تم تحسينها لتكون أكثر وضوحاً */}
        <div className="absolute inset-0 opacity-50 z-10">
          {/* استخدام مصفوفة ثابتة بدلاً من مصفوفة عشوائية لضمان الثبات */}
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
            { top: '75%', left: '60%', size: 2, delay: 2, duration: 23, type: 5 },
            { top: '85%', left: '35%', size: 5, delay: 0, duration: 16, type: 1 },
            { top: '90%', left: '80%', size: 3, delay: 4, duration: 20, type: 2 },
            { top: '20%', left: '50%', size: 4, delay: 1, duration: 19, type: 3 },
            { top: '50%', left: '40%', size: 5, delay: 2, duration: 17, type: 4 },
            { top: '65%', left: '90%', size: 3, delay: 3, duration: 22, type: 5 },
            { top: '80%', left: '5%', size: 4, delay: 0, duration: 18, type: 1 },
            { top: '5%', left: '65%', size: 5, delay: 2, duration: 21, type: 2 },
            { top: '35%', left: '95%', size: 3, delay: 1, duration: 19, type: 3 },
            { top: '95%', left: '45%', size: 4, delay: 3, duration: 17, type: 4 },
            { top: '15%', left: '5%', size: 5, delay: 4, duration: 20, type: 5 }
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

      {/* تأثيرات توهج محسنة في الخلفية */}
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

        {/* توهج إضافي */}
        <div
          className="absolute top-10 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-float"
          style={{ filter: 'blur(70px)' }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[80px] animate-pulse-slow"
          style={{ filter: 'blur(50px)' }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            {/* خلفية شفافة للنص */}
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                بوت تليجرام <span className="text-primary">احترافى</span>
                <br />
                <div className="mt-4"></div> {/* إضافة مسافة بين السطر الأول والثاني */}
                <div className="relative">
                  {/* خلفية متوهجة متحركة خلف النص */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg blur-md"></div>

                  {/* تأثير الكتابة المحسن */}
                  <TypeWriter
                    texts={[
                      'يحول أفكارك إلى واقع',
                      'يزيد من مبيعاتك',
                      'يحسن تجربة عملائك',
                      'يوفر الوقت والجهد',
                      'يعزز تواجدك الرقمي',
                      'يخدمك على مدار الساعة',
                      'يساعد في نمو أعمالك',
                      'يتفاعل مع جمهورك',
                      'يدير عمليات البيع والشراء',
                      'يجيب على استفسارات العملاء',
                      'ينظم المهام والمواعيد'
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    delayBetweenTexts={2500}
                    loop={true}
                    className="relative z-10 font-bold"
                    minHeight="4rem"
                    highlightWords={true}
                    glowEffect={true}
                    cursorStyle="block"
                    transitionEffect="fade"
                  />
                </div>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                من الفكرة إلى التنفيذ، نقدم خدمات برمجة بوتات تليجرام متكاملة ومخصصة تناسب احتياجاتك. سواء كنت تريد بوت خدمة عملاء، تسوق إلكتروني، أو ألعاب تفاعلية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn btn-primary flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                  <MessageCircle size={18} />
                  <span>تواصل معنا</span>
                </a>
                <a href="#examples" className="btn btn-outline flex items-center justify-center gap-2 border-white text-white hover:bg-white/10 hover:text-white">
                  <span>مشاهدة الأمثلة</span>
                </a>
              </div>
            </div>
          </div>

          <div ref={botIlluRef} className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[450px] animate-float">
              {/* إضافة تأثيرات توهج متحركة خلف البوت */}
              <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute top-1/3 right-1/3 transform translate-x-1/3 -translate-y-1/3 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary opacity-15 rounded-full blur-2xl animate-pulse"></div>

              {/* إطار خارجي متحرك */}
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-br from-primary-light to-secondary-light opacity-20 rounded-3xl transform rotate-6 backdrop-blur-sm border border-white/20 shadow-2xl hover:rotate-3 transition-transform duration-700"></div>

              {/* إطار داخلي مع تأثير حركة عند التحويم */}
              <div className="absolute top-5 right-5 left-5 bottom-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex items-center justify-center border border-white/50 transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30">
                <div className="w-full max-w-xs">
                  {showFirstMessage && (
                    <div className="bg-primary/10 rounded-lg p-4 mb-4 animate-fade-in transform transition-all duration-500">
                      <div className="h-8 w-8 bg-primary rounded-full mb-2 flex items-center justify-center text-white font-bold shadow-md animate-bounce-slow">ب</div>
                      <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                        <p className="text-sm">
                          <TypeWriter
                            texts={['مرحباً! أنا بوت المساعد الخاص بك. كيف يمكنني مساعدتك اليوم؟']}
                            typeSpeed={40}
                            loop={false}
                            minHeight="1.5rem"
                          />
                        </p>
                      </div>
                    </div>
                  )}

                  {showSecondMessage && (
                    <div className="bg-gray-100 rounded-lg p-4 mb-4 mr-10 animate-slide-in transform transition-all duration-500">
                      <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                        <p className="text-sm">
                          <TypeWriter
                            texts={['أريد معرفة أسعار خدماتكم']}
                            typeSpeed={40}
                            loop={false}
                            minHeight="1.5rem"
                          />
                        </p>
                      </div>
                    </div>
                  )}

                  {showThirdMessage && (
                    <div className="bg-primary/10 rounded-lg p-4 animate-fade-in transform transition-all duration-500">
                      <div className="h-8 w-8 bg-primary rounded-full mb-2 flex items-center justify-center text-white font-bold shadow-md animate-bounce-slow">ب</div>
                      <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                        <p className="text-sm">
                          <TypeWriter
                            texts={[
                              'بالتأكيد! إليك قائمة بالخدمات والأسعار...',
                              'بوت خدمة العملاء: يبدأ من 100$',
                              'بوت التسوق الإلكتروني: يبدأ من 200$',
                              'بوت الألعاب التفاعلية: يبدأ من 150$'
                            ]}
                            typeSpeed={40}
                            backSpeed={20}
                            delayBetweenTexts={1500}
                            loop={true}
                            minHeight="1.5rem"
                          />
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* تم إزالة زر اكتشف المزيد من هنا ونقله إلى خارج الحاوية */}
      </div>
      {/* زر اكتشف المزيد - تصميم جديد أكثر احترافية */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <div className="relative">
          {/* تأثير توهج خلف الزر */}
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl animate-pulse-slow"></div>

          {/* زر اكتشف المزيد بتصميم جديد */}
          <a
            href="#services"
            className="relative group flex items-center gap-3 bg-gradient-to-r from-primary/90 to-primary px-6 py-3 rounded-lg backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            <span className="text-white font-medium text-lg">اكتشف المزيد</span>
            <div className="relative w-6 h-6 overflow-hidden">
              <ArrowDown
                size={24}
                className="text-white absolute top-0 left-0 group-hover:translate-y-6 transition-transform duration-300"
              />
              <ArrowDown
                size={24}
                className="text-white absolute -top-6 left-0 group-hover:translate-y-6 transition-transform duration-300"
              />
            </div>
          </a>

          {/* خط متوهج يمتد لأسفل */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-primary/80 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;