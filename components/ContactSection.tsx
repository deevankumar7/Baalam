
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-8">
            <span className="text-orange-600 text-sm font-bold uppercase tracking-[0.3em] block">Connect With Us</span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 heading-serif leading-tight">
              Institutional Registry
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              For admissions, academic inquiries, or faculty appointments, please visit our registry office or reach out through the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-3">Office Hours</h4>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  <Clock size={24} className="text-orange-600" />
                </div>
                <div className="text-lg font-bold text-slate-700">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-slate-400 font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-3">Location</h4>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  <MapPin size={24} className="text-orange-600" />
                </div>
                <div className="text-lg font-bold text-slate-700">
                  <p>Vidyanagar, Hyderabad</p>
                  <p className="text-slate-400 font-medium">Telangana - 500044</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-3">Direct Lines</h4>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  <Phone size={24} className="text-orange-600" />
                </div>
                <div className="text-lg font-bold text-slate-700">
                  <p>+91 92465 43851</p>
                  <p>+91 89772 24488</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-3">Email Registry</h4>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  <Mail size={24} className="text-orange-600" />
                </div>
                <div className="text-lg font-bold text-slate-700">
                  <p>askacademy@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
