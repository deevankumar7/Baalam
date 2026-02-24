import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "ASK Academy transformed my son's approach to learning. He went from memorizing to truly understanding concepts.",
      author: "Parent of Grade IX Student",
      school: "CBSE Board"
    },
    {
      text: "The focus on Higher Order Thinking Skills helped me crack my entrance exams with confidence. Highly recommended!",
      author: "Former Student",
      school: "Now at IIT Madras"
    },
    {
      text: "Baalam is a wonderful place for early education. The teachers are caring and the curriculum is perfectly balanced.",
      author: "Parent of Nursery Student",
      school: "Baalam Academy"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-24">
          <span className="text-orange-600 text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Community Voices</span>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 heading-serif leading-tight mb-8">
            Trusted by Generations of Families
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Real stories from parents and students who have experienced the ASK & BAALAM difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3rem] border border-slate-100 relative group hover:shadow-2xl transition-all duration-500">
              <Quote className="text-orange-50 absolute top-10 right-10 group-hover:text-orange-100 transition-colors" size={80} />
              <p className="text-2xl text-slate-700 leading-relaxed mb-12 relative z-10 italic heading-serif">
                "{t.text.replace(/ASK Academy/g, 'ASK ACADEMY').replace(/Baalam/g, 'BAALAM')}"
              </p>
              <div className="relative z-10 pt-8 border-t border-slate-50">
                <p className="font-bold text-slate-900 text-xl">{t.author}</p>
                <p className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">{t.school.replace(/Baalam Academy/g, 'BAALAM ACADEMY')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
