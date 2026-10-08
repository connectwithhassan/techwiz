"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("General Inquiry / Quotation");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `*NEW CONTACT MESSAGE - TECH WIZ INTERNATIONAL*\n` +
      `----------------------------------------\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "Not specified"}\n` +
      `*Subject:* ${subject}\n` +
      `*Message:* ${message}\n` +
      `----------------------------------------\n` +
      `Please reply at the earliest convenience.`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(waMsg)}`,
        "_blank"
      );
    }, 400);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Head Office & Warehouse</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Get In Touch With Tech Wiz International
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Connect with our biomedical sales department, request institutional tenders, or consult our senior biomedical engineers for emergency machinery support.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 text-xs sm:text-sm">
              {/* Phone & WhatsApp */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-5 bg-slate-50 hover:bg-emerald-50 rounded-2xl border border-slate-200 hover:border-emerald-300 transition flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Call & WhatsApp Support
                  </span>
                  <span className="text-base font-black text-slate-900 group-hover:text-emerald-700 transition">
                    {COMPANY_INFO.phone}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct line to sales & on-call biomedical engineers
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-5 bg-slate-50 hover:bg-emerald-50 rounded-2xl border border-slate-200 hover:border-emerald-300 transition flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <span className="text-base font-black text-slate-900 group-hover:text-emerald-700 transition">
                    {COMPANY_INFO.email}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For institutional tenders, purchase orders & quotations
                  </p>
                </div>
              </a>

              {/* Head Office Address */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Karachi Head Office Address
                  </span>
                  <span className="text-sm font-bold text-slate-900 leading-snug block">
                    {COMPANY_INFO.address}
                  </span>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    Sector 11-A, North Karachi, Karachi, Pakistan
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0" />
                <div className="text-xs text-emerald-950 font-medium">
                  <span className="font-bold block text-emerald-900">
                    Operation & Dispatch Hours:
                  </span>
                  {COMPANY_INFO.workingHours}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Tender Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Message Transmitted!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Tech Wiz International. Our healthcare representative has received your communication on WhatsApp and will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                  Send an Inquiry / Quotation Request
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your requirements below for an immediate response from our Karachi sales and engineering desk.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Engineer / Purchaser Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0325-2719192"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="procurement@hospital.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Inquiry Subject *
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-xs sm:text-sm text-slate-800"
                      >
                        <option value="Heart Lung Machine Purchase/Repair">Heart Lung Machine Purchase / Repair</option>
                        <option value="Ventilator Accessories Quotation">Ventilator Accessories Quotation (Hamilton/Dräger)</option>
                        <option value="Patient Monitoring & ECG Cables">Patient Monitoring & ECG Cables</option>
                        <option value="Medical Batteries Procurement">Medical Batteries (Philips, Zoll, Mindray)</option>
                        <option value="Hospital Biohazard Dustbins & Plastics">Hospital Biohazard Dustbins & Plastics</option>
                        <option value="Biomedical Annual Maintenance Contract">Biomedical Annual Maintenance Contract (AMC)</option>
                        <option value="Bulk Hospital Tender Proposal">Bulk Hospital Tender Proposal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 font-semibold block mb-1 text-xs">
                      Detailed Message / Required Quantities & Models *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please specify machine model, cable pin type, required quantities, or equipment error symptoms..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-xs sm:text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 text-sm transition"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Tech Wiz WhatsApp ({COMPANY_INFO.phone})</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Fast institutional dispatch across Karachi, Lahore, Islamabad, Peshawar, Quetta & nationwide.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
