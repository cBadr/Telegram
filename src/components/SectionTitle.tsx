import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
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
              <span className="absolute -left-1 top-1 text-gray-200 blur-[1px] select-none transition-all duration-300 group-hover:blur-[2px] group-hover:text-gray-300">{title}</span>
              
              {/* طبقة النص الرئيسية */}
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-x transition-all duration-300 group-hover:scale-105 inline-block">{title}</span>
              
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
        
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto text-center mt-6 relative z-10 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
