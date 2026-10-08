"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Wrench,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  Activity,
  HeartPulse,
  PhoneCall,
  Send,
  AlertTriangle,
  Building,
  User,
  MapPin,
  Check,
} from "lucide-react";
import { REPAIR_SERVICES, COMPANY_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ServicesPage() {
  const { openServiceModal } = useCart();
  const [engineerName, setEngineerName] = useState("");
  const [hospital, setHospital] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Karachi");
  const [equipmentType, setEquipmentType] = useState("Heart Lung Machine (HLM)");
  const [serviceTier, setServiceTier] = useState("Emergency Breakdown (Immediate)");
  const [description, setDescription] = useState("");
  const [ticketSent, setTicketSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSent(true);

    const msg = `*BIOMEDICAL ENGINEERING SERVICE REQUEST*\n` +
      `----------------------------------------\n` +
      `*Facility:* ${hospital}\n` +
      `*Incharge:* ${engineerName}\n` +
      `*Contact:* ${phone}\n` +
      `*Location:* ${city}\n` +
      `*Equipment:* ${equipmentType}\n` +
      `*Service Urgency:* ${serviceTier}\n` +
      `*Fault Summary:* ${description || "Routine calibration / Fault diagnosis"}\n` +
      `----------------------------------------\n` +
      `Please dispatch an engineer or call to confirm schedule.`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold">
                <Wrench className="w-3.5 h-3.5" />
                <span>Karachi Biomedical Engineering Division</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Biomedical Equipment Repair & Annual Maintenance (AMC)
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Minimizing hospital downtime and maximizing clinical patient safety. Tech Wiz International operates an authorized biomedical workshop in North Karachi with mobile diagnostic vans on call 24/7.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#book-service"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg transition flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Dispatch Service Ticket</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 border border-white/10"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Helpline: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Engineering Services */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
              Clinical Engineering Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Specialized Biomedical Support
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Calibrated testing equipment, OEM component replacement, and factory-standard inspection protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REPAIR_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 group-hover:bg-emerald-700 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors mb-6 shadow-xs">
                    <Activity className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-bold text-emerald-700 mb-4">
                    {srv.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Scope of Care:
                    </span>
                    {srv.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => openServiceModal(srv.title)}
                    className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Book Service Ticket</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AMC Maintenance Tiers Table */}
        <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                Annual Maintenance Contracts (AMC)
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Hospital Maintenance Packages
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Tailored preventive care agreements for hospitals, cardiac surgery institutes, and critical care units across Pakistan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Silver Plan */}
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Routine Care
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    Silver Maintenance
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 mb-6">
                    Quarterly preventive checks and routine electrical safety testing.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>4 Scheduled PM Visits per year</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Electrical Safety & Leakage Current Testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Sensor Calibration Reports</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-400">
                      <span className="w-4 h-4 text-center">—</span>
                      <span>Spare parts billed separately</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => openServiceModal("Silver AMC Contract")}
                  className="w-full py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition"
                >
                  Select Silver AMC
                </button>
              </div>

              {/* Gold Plan (Featured) */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/50 shadow-xl flex flex-col justify-between relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow">
                  Most Popular For ICUs
                </span>

                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Priority Coverage
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    Gold Comprehensive
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 mb-6">
                    Priority breakdown dispatch, bi-monthly visits, and 15% discount on OEM parts.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-200 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>6 Scheduled PM Visits per year</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Priority 12-Hour Breakdown Response</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>15% Discount on All Accessories & Spares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Unlimited Emergency Telephone Consultations</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => openServiceModal("Gold Comprehensive AMC")}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md"
                >
                  Select Gold Comprehensive
                </button>
              </div>

              {/* Platinum Plan */}
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Zero-Failure
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    Platinum Critical Care
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 mb-6">
                    Dedicated cardiopulmonary & cardiac surgery standby with backup loaner units.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Monthly Inspection & Tuning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>24/7 Immediate On-Call Engineer Dispatch</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Emergency Standby Loaner Machines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>All Consumables & Filters at Preferred Rates</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => openServiceModal("Platinum Critical Care AMC")}
                  className="w-full py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition"
                >
                  Select Platinum Tier
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Booking Ticket Form */}
        <section id="book-service" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
            {ticketSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Service Request Transmitted
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your repair ticket has been routed to our on-call Biomedical Engineering supervisor at{" "}
                  <span className="font-bold text-emerald-700">{COMPANY_INFO.phone}</span>.
                </p>
                <button
                  onClick={() => setTicketSent(false)}
                  className="mt-4 px-6 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition"
                >
                  Submit Another Ticket
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                      Biomedical Dispatch Desk
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      Submit Equipment Breakdown / Repair Ticket
                    </h3>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Incharge / Engineer Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Engr. Kashif / Dr. Naveed"
                        value={engineerName}
                        onChange={(e) => setEngineerName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      />
                    </div>

                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Hospital / Medical Center *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. NICVD / Civil Hospital / Private Clinic"
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0325-2719192"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      />
                    </div>

                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Karachi (Sector 11-A, etc.)"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      />
                    </div>

                    <div>
                      <label className="text-slate-700 font-semibold block mb-1 text-xs">
                        Urgency Level *
                      </label>
                      <select
                        value={serviceTier}
                        onChange={(e) => setServiceTier(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs text-slate-800"
                      >
                        <option value="Emergency Breakdown (Immediate)">Critical Breakdown (Immediate)</option>
                        <option value="Urgent (Within 24 Hours)">Urgent (Within 24h)</option>
                        <option value="Routine Maintenance (Scheduled)">Routine Preventive Maintenance</option>
                        <option value="Calibration & Certification">Annual Calibration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 font-semibold block mb-1 text-xs">
                      Equipment Model & Fault Symptoms *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Mention equipment model (e.g. Stockert S5, Hamilton C2, Philips MP50) and error code or fault symptoms..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 text-xs sm:text-sm transition"
                    >
                      <Send className="w-4 h-4" />
                      <span>Dispatch Service Ticket to Tech Wiz ({COMPANY_INFO.phone})</span>
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-2">
                      Head Office: Sector 11-A, North Karachi • 24/7 Mobile Service Vans Active
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
