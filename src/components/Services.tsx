import React from 'react';
import { MessageSquare, Users, ShoppingCart, Bot, Briefcase, Zap, Brain, Award, ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  // تحديد لون البطاقة بناءً على الفهرس
  const getGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-cyan-400',
      'from-purple-500 to-pink-400',
      'from-green-500 to-emerald-400',
      'from-orange-500 to-amber-400',
      'from-red-500 to-rose-400',
      'from-indigo-500 to-violet-400',
      'from-teal-500 to-green-400',
      'from-fuchsia-500 to-purple-400'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="relative group perspective h-full">
      {/* البطاقة الأمامية */}
      <div className="card-front relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-500 group-hover:shadow-xl transform-gpu group-hover:scale-[0.98] border border-gray-100/50 h-full flex flex-col">
        {/* خلفية متدرجة متوهجة */}
        <div className={`absolute -inset-1 opacity-30 group-hover:opacity-100 rounded-xl blur-xl bg-gradient-to-br ${getGradient(index)} transition-all duration-700 -z-10`}></div>

        {/* نمط خلفية البطاقة */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40 z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIgMmgzNnYzNkgyVjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 z-0"></div>

        {/* أيقونة الخدمة */}
        <div className={`relative z-10 w-16 h-16 rounded-lg flex items-center justify-center mb-5 text-white bg-gradient-to-br ${getGradient(index)} shadow-lg transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          {icon}
        </div>

        {/* عنوان الخدمة */}
        <h3 className="relative z-10 text-xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-2">{title}</h3>

        {/* وصف الخدمة */}
        <p className="relative z-10 text-gray-600 transition-all duration-300 group-hover:text-gray-700 flex-grow">{description}</p>

        {/* زر المزيد */}
        <div className="relative z-10 mt-5 flex justify-end">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${getGradient(index)} opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg`}>
            <ArrowRight size={18} />
          </div>
        </div>

        {/* زخرفة الزاوية */}
        <div className={`absolute -bottom-2 -left-2 w-16 h-16 rounded-full bg-gradient-to-br ${getGradient(index)} opacity-20 blur-xl transition-all duration-500 group-hover:opacity-30 group-hover:w-20 group-hover:h-20`}></div>
        <div className={`absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${getGradient(index)} opacity-20 blur-xl transition-all duration-500 group-hover:opacity-30 group-hover:w-16 group-hover:h-16`}></div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <MessageSquare size={28} />,
      title: "بوتات الشات التفاعلية",
      description: "بوتات محادثة ذكية تتفاعل مع مستخدميك وتقدم تجربة تواصل سلسة ومُخصصة."
    },
    {
      icon: <Users size={28} />,
      title: "بوتات خدمة العملاء",
      description: "استقبال استفسارات العملاء والرد عليها آلياً أو توجيهها للفريق المختص على مدار الساعة."
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "بوتات التسوق الإلكتروني",
      description: "تمكّن عملائك من تصفح المنتجات وإضافتها للسلة وإتمام عمليات الشراء مباشرة عبر تليجرام."
    },
    {
      icon: <Brain size={28} />,
      title: "بوتات الألعاب",
      description: "ألعاب تفاعلية ومسابقات لزيادة تفاعل المستخدمين مع قناتك أو مجموعتك."
    },
    {
      icon: <Briefcase size={28} />,
      title: "بوتات إدارة الأعمال",
      description: "أتمتة المهام اليومية مثل جدولة المواعيد، تذكير بالمهام، وتنظيم الاجتماعات."
    },
    {
      icon: <Bot size={28} />,
      title: "بوتات مخصصة",
      description: "تصميم وتطوير بوتات فريدة حسب احتياجاتك الخاصة مهما كانت متطلباتك."
    },
    {
      icon: <Award size={28} />,
      title: "بوتات تسويقية",
      description: "زيادة المبيعات من خلال بوتات تسويقية ذكية تروج لمنتجاتك وتقدم عروض مخصصة للعملاء."
    },
    {
      icon: <Zap size={28} />,
      title: "بوتات مدمجة مع API",
      description: "ربط البوتات مع أنظمة وتطبيقات خارجية مثل أنظمة المحاسبة والـ CRM وغيرها."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* خلفية متدرجة مع نمط */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-80 z-0"></div>

      {/* نمط شبكي خفيف */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>

      {/* دوائر زخرفية */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0"></div>

      <div className="container-custom relative z-10">
        <div className="section-title relative py-8">
          {/* خلفية متوهجة للعنوان */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"></div>

          {/* زخارف هندسية */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/20 rounded-sm transform rotate-45"></div>
          <div className="absolute bottom-0 right-1/4 w-6 h-6 border-2 border-secondary/20 rounded-sm transform rotate-12"></div>
          <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-secondary/10 rounded-full"></div>

          <div className="relative z-10">
            <div className="relative inline-block group cursor-pointer">
              {/* العنوان الرئيسي مع تأثيرات متقدمة */}
              <h2 className="text-4xl md:text-5xl font-bold mb-2 relative">
                <span className="relative inline-block">
                  {/* طبقة الظل */}
                  <span className="absolute -left-1 top-1 text-gray-200 blur-[1px] select-none transition-all duration-300 group-hover:blur-[2px] group-hover:text-gray-300">ماذا يمكنني أن أقدم لك؟</span>

                  {/* طبقة النص الرئيسية */}
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-x transition-all duration-300 group-hover:scale-105 inline-block">ماذا يمكنني أن أقدم لك؟</span>

                  {/* تأثير الخط المتحرك تحت النص */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                </span>
              </h2>

              {/* تأثير توهج عند التحويم */}
              <div className="absolute -inset-1 bg-primary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* خط مزخرف تحت العنوان */}
              <div className="flex items-center justify-center gap-2 mt-3 mb-6">
                <span className="block w-12 h-0.5 bg-primary/30 rounded-full"></span>
                <span className="block w-2 h-2 bg-primary rounded-full"></span>
                <span className="block w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                <span className="block w-2 h-2 bg-secondary rounded-full"></span>
                <span className="block w-12 h-0.5 bg-secondary/30 rounded-full"></span>
              </div>
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto text-center mt-6 relative z-10 leading-relaxed">
              أقدم مجموعة متنوعة من خدمات برمجة بوتات تليجرام المتخصصة التي تساعدك على زيادة المبيعات، تحسين خدمة العملاء، وأتمتة العمليات
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="h-full min-h-[320px]">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center relative">
          {/* تأثير توهج خلف الزر */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-primary/20 rounded-full blur-xl"></div>

          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transform hover:translate-y-[-2px] transition-all duration-300 overflow-hidden group z-10"
          >
            <span className="relative z-10">احصل على استشارة مجانية</span>

            {/* تأثير التوهج عند التحويم */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>

            {/* أيقونة السهم المتحركة */}
            <span className="relative z-10 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
              <ArrowRight size={14} className="text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;