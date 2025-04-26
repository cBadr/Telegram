import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full text-right py-4 flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "ما هي المدة التي يستغرقها تطوير بوت تليجرام؟",
      answer: "تختلف المدة حسب تعقيد وحجم المشروع. البوتات البسيطة قد تستغرق من 3-7 أيام، بينما المشاريع المعقدة قد تستغرق 2-4 أسابيع. سأقدم لك تقديراً دقيقاً للوقت بعد فهم متطلباتك بالتفصيل."
    },
    {
      question: "كم تكلفة تطوير بوت تليجرام؟",
      answer: "تعتمد التكلفة على مدى تعقيد البوت والميزات المطلوبة. تبدأ الأسعار من 100 دولار للبوتات البسيطة وقد تصل إلى 1000 دولار أو أكثر للبوتات المتقدمة. سأقدم لك عرض سعر تفصيلي بعد تحليل متطلباتك."
    },
    {
      question: "هل يمكن ربط البوت بأنظمة أخرى مثل موقعي أو تطبيقي؟",
      answer: "نعم، يمكن ربط بوت التليجرام مع مختلف الأنظمة والتطبيقات الخارجية من خلال واجهات برمجة التطبيقات (APIs). يمكن دمجه مع مواقع الويب، تطبيقات الجوال، أنظمة إدارة المحتوى، أنظمة إدارة علاقات العملاء، وغيرها الكثير."
    },
    {
      question: "هل أحتاج لخبرة تقنية للتعامل مع البوت بعد تسليمه؟",
      answer: "لا، يتم تصميم البوتات بواجهة سهلة الاستخدام لا تتطلب خبرة تقنية. سأقدم لك دليل استخدام مفصل وتدريب على كيفية إدارة البوت. وفي حال احتجت لأي مساعدة، أقدم دعم فني مستمر."
    },
    {
      question: "هل يمكن تحديث البوت وإضافة ميزات جديدة مستقبلاً؟",
      answer: "بالتأكيد، البوتات مصممة بطريقة مرنة تسمح بإضافة ميزات جديدة وتحديثات مستقبلية بسهولة. يمكننا الاتفاق على خطة صيانة وتطوير مستمرة لإبقاء البوت محدثاً ومواكباً لاحتياجاتك المتغيرة."
    },
    {
      question: "هل يمكن أن يعمل البوت بلغات متعددة؟",
      answer: "نعم، يمكن برمجة البوت للعمل بلغات متعددة حسب احتياجك. يمكن للمستخدمين اختيار اللغة المفضلة لديهم، مما يجعل البوت مناسباً للاستخدام العالمي أو في مناطق متعددة اللغات."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="الأسئلة الشائعة"
          subtitle="إليك إجابات على الأسئلة الأكثر شيوعاً حول خدمات برمجة بوتات تليجرام"
        />

        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="mb-4">هل لديك سؤال آخر لم تجد إجابته؟</p>
          <a href="#contact" className="btn btn-primary">اسألني مباشرة</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;