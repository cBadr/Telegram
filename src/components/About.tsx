import React, { useRef, useEffect } from 'react';
import { Calendar, Award, Users, Briefcase as BriefcaseBusiness, Bot, Code, Zap, Clock, CheckCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { TypeWriter } from './Hero';

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string;
  label: string;
}> = ({ icon, value, label }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center mb-3">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-600 text-center">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const iconRef1 = useRef<HTMLDivElement>(null);
  const iconRef2 = useRef<HTMLDivElement>(null);
  const iconRef3 = useRef<HTMLDivElement>(null);

  // تأثير حركة الأيقونات عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current && iconRef1.current && iconRef2.current && iconRef3.current) {
        const scrollPosition = window.scrollY;
        const aboutPosition = aboutRef.current.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight > aboutPosition) {
          const offset = (scrollPosition + windowHeight - aboutPosition) * 0.1;
          iconRef1.current.style.transform = `translateY(${Math.sin(offset * 0.05) * 10}px)`;
          iconRef2.current.style.transform = `translateY(${Math.sin(offset * 0.05 + 2) * 10}px)`;
          iconRef3.current.style.transform = `translateY(${Math.sin(offset * 0.05 + 4) * 10}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-800/5 to-primary/5">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      {/* أيقونات متحركة في الخلفية */}
      <div ref={iconRef1} className="absolute top-20 left-10 w-32 h-32 text-primary/5 transform transition-transform duration-1000 ease-in-out">
        <Bot size={128} />
      </div>
      <div ref={iconRef2} className="absolute bottom-40 right-10 w-32 h-32 text-secondary/5 transform transition-transform duration-1000 ease-in-out">
        <Code size={128} />
      </div>
      <div ref={iconRef3} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-primary/3 transform transition-transform duration-1000 ease-in-out opacity-5">
        <Bot size={256} />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title="من نحن؟"
        />

        <div ref={aboutRef} className="mt-12 relative">
          {/* بطاقة المعلومات الرئيسية */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-white/20 relative overflow-hidden">
            {/* خلفية متوهجة */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-x"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>

            {/* عنوان متحرك */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-center relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  <TypeWriter
                    texts={[
                      'دعم فني على مدار الساعة!',
                      'خدمات برمجة بوتات تليجرام احترافية',
                      'خدمة عملاء متميزة'
                    ]}
                    typeSpeed={40}
                    backSpeed={30}
                    delayBetweenTexts={3000}
                    loop={true}
                    minHeight="3rem"
                    highlightWords={true}
                    glowEffect={true}
                    cursorStyle="block"
                    transitionEffect="fade"
                  />
                </h2>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full"></div>
              </div>
            </div>

            {/* أيقونات الخدمات */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center bg-primary/5 rounded-full px-4 py-2 border border-primary/10 shadow-sm">
                <Bot className="text-primary ml-2" size={20} />
                <span className="font-medium">بوتات تليجرام احترافية</span>
              </div>
              <div className="flex items-center bg-secondary/5 rounded-full px-4 py-2 border border-secondary/10 shadow-sm">
                <Users className="text-secondary ml-2" size={20} />
                <span className="font-medium">خدمة عملاء متميزة</span>
              </div>
              <div className="flex items-center bg-primary/5 rounded-full px-4 py-2 border border-primary/10 shadow-sm">
                <Clock className="text-primary ml-2" size={20} />
                <span className="font-medium">دعم على مدار الساعة</span>
              </div>
            </div>

            {/* محتوى النص */}
            <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <p className="text-lg">
                نحن فريق متخصص في <span className="text-primary font-semibold">برمجة وتطوير بوتات تليجرام الاحترافية</span> باستخدام أحدث التقنيات والأدوات البرمجية. نمتلك خبرة واسعة في تصميم <span className="text-secondary font-semibold">روبوتات محادثة ذكية</span> تعمل على منصة تليجرام لمساعدة الشركات والمؤسسات على تحسين تواصلها مع العملاء وأتمتة العمليات اليومية.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <Bot size={24} />
                    </div>
                    <h3 className="text-xl font-bold">بوتات تليجرام متميزة</h3>
                  </div>
                  <p>
                    تتميز <span className="text-primary font-semibold">بوتات تليجرام</span> التي نطورها بالكفاءة العالية والأداء المتميز، حيث نحرص على تقديم <span className="text-secondary font-semibold">حلول مخصصة</span> تلبي احتياجات عملك الفريدة وتساهم في تعزيز تواجدك الرقمي.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-secondary/20 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-3">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold">حلول متكاملة</h3>
                  </div>
                  <p>
                    سواء كنت تبحث عن بوت لـ <span className="text-primary font-semibold">خدمة العملاء</span>، <span className="text-secondary font-semibold">التسويق الإلكتروني</span>، <span className="text-primary font-semibold">إدارة المبيعات</span>، أو <span className="text-secondary font-semibold">أتمتة المهام</span>، فإن فريقنا قادر على تحويل أفكارك إلى واقع ملموس.
                  </p>
                </div>
              </div>

              <p className="text-lg">
                نفخر بتقديم <span className="text-primary font-semibold">خدمات برمجة بوتات تليجرام</span> عالية الجودة تساعد في <span className="text-secondary font-semibold">زيادة المبيعات</span>، <span className="text-primary font-semibold">تحسين رضا العملاء</span>، و<span className="text-secondary font-semibold">توفير الوقت والجهد</span> من خلال أتمتة العمليات المتكررة. تعاون معنا اليوم لتطوير بوت تليجرام احترافي يدعم نمو مشروعك ويعزز تنافسيتك في السوق.
              </p>
            </div>

            {/* إحصائيات */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Calendar size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300">12</div>
                <div className="text-gray-700">سنوات الخبرة</div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-4 text-center border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} />
                </div>
                <div className="text-3xl font-bold text-secondary mb-1 group-hover:scale-105 transition-transform duration-300">+100</div>
                <div className="text-gray-700">مشروع ناجح</div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300">+50</div>
                <div className="text-gray-700">عميل راضٍ</div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-4 text-center border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Bot size={24} />
                </div>
                <div className="text-3xl font-bold text-secondary mb-1 group-hover:scale-105 transition-transform duration-300">+200</div>
                <div className="text-gray-700">بوت تم تطويره</div>
              </div>
            </div>

            {/* مهارات تقنية */}
            <div className="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-center relative">
                <span className="relative z-10">مهاراتنا التقنية</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium flex items-center">
                        <Code size={18} className="inline ml-2 text-primary" />
                        Python
                      </span>
                      <span className="text-primary font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" style={{ width: '95%' }}>
                        <div className="w-full h-full bg-gradient-to-r from-primary/80 to-secondary/80 animate-pulse-slow"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium flex items-center">
                        <Bot size={18} className="inline ml-2 text-primary" />
                        Telegram Bot API
                      </span>
                      <span className="text-primary font-bold">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" style={{ width: '90%' }}>
                        <div className="w-full h-full bg-gradient-to-r from-primary/80 to-secondary/80 animate-pulse-slow"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium flex items-center">
                        <BriefcaseBusiness size={18} className="inline ml-2 text-primary" />
                        إدارة المشاريع
                      </span>
                      <span className="text-primary font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" style={{ width: '85%' }}>
                        <div className="w-full h-full bg-gradient-to-r from-primary/80 to-secondary/80 animate-pulse-slow"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium flex items-center">
                        <CheckCircle size={18} className="inline ml-2 text-primary" />
                        قواعد البيانات
                      </span>
                      <span className="text-primary font-bold">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" style={{ width: '80%' }}>
                        <div className="w-full h-full bg-gradient-to-r from-primary/80 to-secondary/80 animate-pulse-slow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* أزرار الدعوة للعمل */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <a href="#contact" className="btn btn-primary flex items-center justify-center gap-2 px-8 py-3 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group">
                <span className="group-hover:scale-105 transition-transform duration-300">تواصل معنا</span>
                <Zap size={20} className="group-hover:animate-pulse" />
              </a>
              <a href="#examples" className="btn btn-outline flex items-center justify-center gap-2 px-8 py-3 text-lg border-primary text-primary hover:bg-primary/5 transition-all duration-300 group">
                <span className="group-hover:scale-105 transition-transform duration-300">مشاهدة أعمالنا</span>
                <Bot size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;