import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Code, Check, Zap, Settings, RefreshCw } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => {
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    let step = 0;
    const maxSteps = 5;

    const interval = setInterval(() => {
      if (step < maxSteps) {
        setActiveStep(step);
        step += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setActiveStep(0);
          startAnimation();
        }, 3000);
      }
    }, 1500);

    return () => clearInterval(interval);
  };

  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: "استشارة مجانية",
      description: "نبدأ بجلسة استشارية مجانية لفهم احتياجاتك وتحديد متطلبات البوت المثالي لمشروعك."
    },
    {
      icon: <Settings size={24} />,
      title: "تحليل المتطلبات",
      description: "أقوم بتحليل متطلباتك وإعداد خطة تطوير مفصلة تشمل الميزات والوظائف والتكلفة والجدول الزمني."
    },
    {
      icon: <Code size={24} />,
      title: "التطوير والبرمجة",
      description: "أبدأ في تطوير البوت باستخدام أحدث التقنيات لضمان أداء سريع وموثوق وتجربة مستخدم سلسة."
    },
    {
      icon: <Check size={24} />,
      title: "الاختبار والتسليم",
      description: "اختبار شامل لجميع وظائف البوت للتأكد من عمله بكفاءة قبل التسليم النهائي وإطلاقه."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "الدعم المستمر",
      description: "أقدم خدمات الدعم والصيانة المستمرة لضمان استمرار عمل البوت بشكل مثالي وتحديثه عند الحاجة."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="كيف نعمل معاً؟"
          subtitle="عملية واضحة وشفافة لتطوير بوت تليجرام مخصص يناسب احتياجاتك بدقة"
        />

        <div ref={stepsRef} className="relative mt-16 max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 right-1/2 w-1 bg-gray-200 translate-x-1/2 z-0"></div>

          <div className="relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex mb-12 items-start">
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-500 ${
                  activeStep >= index
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.icon}
                  {activeStep > index && (
                    <div className="absolute -left-2 -top-2 w-16 h-16 bg-primary/20 rounded-full animate-ping"></div>
                  )}
                </div>

                <div className={`bg-white rounded-lg shadow-md p-6 flex-grow transform transition-all duration-500 ${
                  activeStep === index
                    ? 'scale-105 border-r-4 border-primary'
                    : ''
                }`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#contact" className="btn btn-primary">
            <Zap className="inline-block ml-2" size={18} />
            <span>ابدأ مشروعك الآن</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;