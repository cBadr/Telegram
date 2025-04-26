import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container-custom">
        <SectionTitle
          title="تواصل معنا"
          subtitle="جاهز لبدء مشروعك؟ راسلنا الآن وسنرد عليك في أقرب وقت ممكن"
        />

        <div className="flex flex-col lg:flex-row gap-10 mt-12">
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 ml-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">البريد الإلكتروني</h4>
                    <a href="mailto:mohamedbadr@example.com" className="text-gray-600 hover:text-primary">mohamedbadr@example.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 ml-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">رقم الهاتف</h4>
                    <a href="tel:+2012345678" className="text-gray-600 hover:text-primary">+20 12 345 678</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 ml-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">الموقع</h4>
                    <p className="text-gray-600">القاهرة، مصر</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">لماذا تختارني؟</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle size={18} className="ml-2 flex-shrink-0" />
                  <span>خبرة 12 عاماً في بناء وإدارة المشاريع</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="ml-2 flex-shrink-0" />
                  <span>تطوير بوتات تليجرام احترافية وفعالة</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="ml-2 flex-shrink-0" />
                  <span>دعم فني مستمر ما بعد التسليم</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="ml-2 flex-shrink-0" />
                  <span>أسعار تنافسية وجودة عالية</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="ml-2 flex-shrink-0" />
                  <span>تسليم المشاريع في الموعد المحدد</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold mb-6">أرسل رسالة</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">تم إرسال رسالتك بنجاح!</h4>
                  <p className="text-gray-600 mb-4">سأقوم بالرد عليك في أقرب وقت ممكن، شكراً لتواصلك.</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="أدخل اسمك"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="example@domain.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+20 12 345 678"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block mb-2 font-medium">
                        نوع الخدمة <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">اختر نوع البوت</option>
                        <option value="شات تفاعلي">بوت شات تفاعلي</option>
                        <option value="خدمة عملاء">بوت خدمة عملاء</option>
                        <option value="تسوق إلكتروني">بوت تسوق إلكتروني</option>
                        <option value="ألعاب">بوت ألعاب</option>
                        <option value="إدارة المجموعات">بوت إدارة المجموعات</option>
                        <option value="آخر">آخر</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      تفاصيل المشروع <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="اشرح فكرة مشروعك بالتفصيل..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary px-10 flex items-center gap-2 mx-auto">
                      <Send size={18} />
                      <span>إرسال الرسالة</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;