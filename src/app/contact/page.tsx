"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  ShieldCheck,
  Headphones,
  Navigation,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("Hospital Central Procurement");
  const [subject, setSubject] = useState("Equipment Quotation & Availability");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `*NEW CONTACT / TENDER INQUIRY - TECH WIZ INTERNATIONAL*\n` +
      `----------------------------------------\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "Not specified"}\n` +
      `*Department:* ${department}\n` +
      `*Subject:* ${subject}\n` +
      `*Message:* ${message}\n` +
      `----------------------------------------\n` +
      `Please provide formal response and commercial proposal.`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(waMsg)}`,
        "_blank"
      );
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Karachi Head Office & Technical Center</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Contact Tech Wiz International
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Direct access to our biomedical engineering workshop, equipment sales team, and 24/7 emergency cardiac life-support technicians.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Map Grid */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Cols: Directory Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-6 bg-white rounded-3xl border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center shrink-0 transition">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Direct Call & Helpline
                  </span>
                  <span className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition">
                    {COMPANY_INFO.phone}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    24/7 Emergency Line for Heart Lung Machines & ICU equipment
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-6 bg-white rounded-3xl border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 transition">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    WhatsApp Procurement Desk
                  </span>
                  <span className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition">
                    +92-325-2719192
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    Instant photos of connectors, pinouts, and quick invoicing
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-6 bg-white rounded-3xl border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-100 group-hover:bg-teal-600 text-teal-700 group-hover:text-white flex items-center justify-center shrink-0 transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Official Email
                  </span>
                  <span className="text-lg font-black text-slate-900 group-hover:text-teal-700 transition">
                    {COMPANY_INFO.email}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    For institutional RFPs, tenders & purchase orders
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-6 bg-white rounded-3xl border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Head Office & Workshop
                  </span>
                  <span className="text-sm font-bold text-slate-900 leading-snug block">
                    {COMPANY_INFO.address}
                  </span>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    North Karachi, Karachi, Pakistan
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

            {/* Right 7 Cols: Official RFP Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Inquiry Dispatched!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your institutional inquiry has been routed to our sales department. A representative will contact you via WhatsApp / phone shortly.
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
                    Institutional Tender / Quotation Request
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill in your hospital or clinic requirements below for a formal quote from our Karachi headquarters.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-700 font-semibold block mb-1 text-xs">
                          Contact Person Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. / Engineer / Procurement Officer"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm"
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
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-700 font-semibold block mb-1 text-xs">
                          Official Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="procurement@hospital.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-slate-700 font-semibold block mb-1 text-xs">
                          Department
                        </label>
                        <select
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm text-slate-800"
                        >
                          <option value="Hospital Central Procurement">Hospital Central Procurement</option>
                          <option value="Cardiopulmonary & Perfusion OT">Cardiopulmonary & Perfusion OT</option>
                          <option value="Intensive Care Unit (ICU)">Intensive Care Unit (ICU)</option>
                          <option value="Biomedical Engineering Department">Biomedical Engineering Dept</option>
                          <option value="Private Clinic / Nursing Home">Private Clinic / Nursing Home</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Subject *
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm text-slate-800"
                      >
                        <option value="Heart Lung Machine Purchase / Repair">Heart Lung Machine Purchase / Repair</option>
                        <option value="Ventilator Accessories Quotation (Hamilton/Dräger)">Ventilator Accessories Quotation (Hamilton/Dräger)</option>
                        <option value="Patient Monitoring & ECG Cables">Patient Monitoring & ECG Cables</option>
                        <option value="Medical Batteries Procurement">Medical Batteries Procurement</option>
                        <option value="Hospital Biohazard Dustbins & Plastics">Hospital Biohazard Dustbins & Plastics</option>
                        <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                        <option value="Bulk Institutional Tender">Bulk Institutional Tender</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Detailed Requirements / Quantities *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Mention required models, pin configurations, quantities or fault symptoms..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 text-xs sm:text-sm transition"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry to Tech Wiz WhatsApp ({COMPANY_INFO.phone})</span>
                      </button>
                      <p className="text-[11px] text-slate-500 text-center mt-2.5">
                        Official commercial quotation with NTN/STRN provided on official letterhead.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
