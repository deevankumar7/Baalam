import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What boards do you support for ASK Academy?",
      answer: "We provide coaching for students from SSC, CBSE, and ICSE boards, focusing on strengthening fundamentals and building Higher Order Thinking Skills (HOTS)."
    },
    {
      question: "When do the new batches for ASK Academy commence?",
      answer: "Batches for the 2026-2027 academic year commence on 27th March 2026. We have summer classes until 16th May and reopen on 1st June."
    },
    {
      question: "What is the age group for Baalam Preschool?",
      answer: "Baalam Academy serves children from 2 to 6 years old, divided into Playgroup (2-3 yrs), Nursery (3-4 yrs), and Pre-Primary (4-6 yrs)."
    },
    {
      question: "Do you offer any admission discounts?",
      answer: "Yes, for Baalam Academy, we have a Founders' Provision offering a 5% institutional discount for the first 15 enrollments."
    },
    {
      question: "What is the 'Pratibalam Prati Baalam' philosophy?",
      answer: "It means 'Nurturing inner strength'. We believe in developing a child's internal resilience and curiosity through a blend of Montessori and play-way pedagogy."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Information Desk</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white heading-serif leading-tight mb-8">
              Common Inquiries
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium mb-10">
              Find answers to common questions about our programs, pedagogy, and admission process.
            </p>
            <div className="p-8 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 shadow-2xl">
              <HelpCircle className="text-orange-500 mb-6" size={40} />
              <p className="text-base text-slate-300 font-medium leading-relaxed">Still have questions? Reach out to our registry office directly for personalized guidance.</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden transition-all hover:bg-white/10 shadow-xl">
                <button 
                  className="w-full px-10 py-8 text-left flex items-center justify-between transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-bold text-white text-xl md:text-2xl heading-serif leading-tight">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'rotate-180 bg-orange-500' : ''}`}>
                    <ChevronDown size={24} className={openIndex === idx ? 'text-white' : 'text-slate-400'} />
                  </div>
                </button>
                {openIndex === idx && (
                  <div className="px-10 pb-10 text-slate-300 text-lg leading-relaxed font-medium">
                    {faq.answer.replace(/ASK Academy/g, 'ASK ACADEMY').replace(/Baalam Academy/g, 'BAALAM ACADEMY').replace(/Baalam/g, 'BAALAM')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
