import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, MessageSquare, Users, Brain, ArrowLeft, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Example {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
}

const Examples: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // تغيير الشريحة تلقائيًا كل 3 ثوان
  useEffect(() => {
    // إيقاف التشغيل التلقائي عند تفكيك المكون
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setActiveIndex(prevIndex => (prevIndex + 1) % examples.length);
        }
      }, 5000); // 3 ثوان
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const examples: Example[] = [
    {
      icon: <ShoppingCart size={24} />,
      title: "بوت متجر إلكتروني",
      description: "بوت تسوق متكامل يعرض المنتجات ويتيح للعملاء الشراء مباشرة عبر تليجرام مع نظام دفع آمن.",
      features: [
        "عرض المنتجات مع الصور والأسعار",
        "سلة تسوق وإتمام الطلب",
        "ربط مع بوابات الدفع الإلكتروني",
        "تتبع الطلبات والشحن",
        "إشعارات آلية للعملاء"
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "بوت خدمة العملاء",
      description: "بوت ذكي للرد على استفسارات العملاء على مدار الساعة وتوجيههم للأقسام المختصة عند الحاجة.",
      features: [
        "الرد على الأسئلة الشائعة تلقائياً",
        "توجيه الاستفسارات للموظفين المختصين",
        "تذاكر دعم فني وتتبع الحالة",
        "قاعدة معرفة متكاملة",
        "تقارير وإحصائيات التفاعل"
      ],
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-green-600 to-green-400"
    },
    {
      icon: <Users size={24} />,
      title: "بوت إدارة المجموعات",
      description: "بوت متطور لإدارة مجموعات تليجرام بشكل احترافي مع ميزات متعددة للتفاعل والحماية.",
      features: [
        "الترحيب بالأعضاء الجدد",
        "حذف الرسائل المخالفة تلقائياً",
        "حظر المستخدمين المزعجين",
        "استطلاعات رأي وتصويت",
        "إحصائيات المجموعة والتفاعل"
      ],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: <Brain size={24} />,
      title: "بوت ألعاب تفاعلية",
      description: "بوت يقدم ألعاب وتحديات تفاعلية لزيادة نشاط المستخدمين والترفيه عنهم.",
      features: [
        "ألعاب متنوعة وتفاعلية",
        "نظام نقاط ومكافآت",
        "تصنيفات وقوائم المتصدرين",
        "تحديات يومية وأسبوعية",
        "مسابقات جماعية"
      ],
      image: "https://images.pexels.com/photos/9158673/pexels-photo-9158673.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-yellow-600 to-yellow-400"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % examples.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + examples.length) % examples.length);
  };

  // إيقاف التغيير التلقائي عند تحويم المؤشر
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // استئناف التغيير التلقائي عند مغادرة المؤشر
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const currentExample = examples[activeIndex];

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="أمثلة على المشاريع"
          subtitle="إليك بعض الأمثلة عن البوتات التي يمكن تطويرها لتلبية احتياجات مختلفة"
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div
            className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full lg:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${currentExample.color} flex items-center justify-center text-white`}>
                  {currentExample.icon}
                </div>
                <h3 className="text-2xl font-bold mr-3">{currentExample.title}</h3>
              </div>

              <p className="text-gray-600 mb-6">{currentExample.description}</p>

              <h4 className="font-bold text-lg mb-3">المميزات الرئيسية:</h4>
              <ul className="mb-8">
                {currentExample.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start mb-2">
                    <div className="mr-2 mt-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a href="#contact" className="btn btn-primary">
                  أريد بوت مشابه
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative min-h-[300px]">
              <div className="absolute inset-0">
                <img
                  src={currentExample.image}
                  alt={currentExample.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${currentExample.color} opacity-60`}></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">هل تحتاج لمساعدة؟</h3>
                    <p className="mb-4">دعني أساعدك في بناء بوت مشابه يناسب احتياجاتك</p>
                    <a href="#contact" className="inline-block py-2 px-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      تواصل الآن
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors mr-4">
              <ArrowRight size={20} />
            </button>

            <div className="flex items-center">
              {examples.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 mx-1 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>

            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors mr-4">
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;