
import React from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Official Registry</span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 heading-serif">Contact Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <User />, 
              title: "Principal & Director", 
              value: "V. Lakshmi Padmaja", 
              sub: "M.Sc. M. Ed.",
              border: "border-slate-100" 
            },
            { 
              icon: <Phone />, 
              title: "Direct Lines", 
              value: "92465 43851", 
              sub: "89772 24488",
              border: "border-blue-100" 
            },
            { 
              icon: <Mail />, 
              title: "Institutional Mail", 
              value: "askacademy@gmail.com", 
              sub: "Response within 24h",
              border: "border-orange-100" 
            },
            { 
              icon: <MapPin />, 
              title: "Main Campus", 
              value: "Vidyanagar", 
              sub: "Hyderabad-500044",
              border: "border-slate-100" 
            }
          ].map((item, i) => (
            <div key={i} className={`p-10 rounded-2xl bg-white border-2 ${item.border} text-center transition-all hover:shadow-md`}>
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900">
                {/* Fixed TypeScript error by adding <any> to React.ReactElement cast to allow 'size' prop in cloneElement */}
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.title}</p>
              <p className="text-lg font-black text-slate-900 leading-tight">{item.value}</p>
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
