"use client";

import React, { useState } from "react";
import { X, Wrench, AlertTriangle, Send, User, Building, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { COMPANY_INFO } from "@/data/products";

export default function ServiceModal() {
  const { serviceModalService, closeServiceModal } = useCart();
  const [engineerName, setEngineerName] = useState("");
  const [hospital, setHospital] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Karachi");
  const [equipmentType, setEquipmentType] = useState("Heart Lung Machine (Cardiopulmonary Bypass)");
  const [serviceType, setServiceType] = useState("Emergency Breakdown Repair");
  const [urgency, setUrgency] = useState("Critical / Patient On-Hold");
  const [problemDescription, setProblemDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!serviceModalService) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*BIOMEDICAL SERVICE / REPAIR REQUEST - TECH WIZ INTERNATIONAL*\n` +
      `----------------------------------------\n` +
      `*Equipment Type:* ${equipmentType}\n` +
      `*Service Required:* ${serviceType}\n` +
      `*Urgency Level:* 🚨 ${urgency}\n` +
      `----------------------------------------\n` +
      `*Hospital / Facility:* ${hospital}\n` +
      `*Contact Person:* ${engineerName}\n` +
      `*Phone Number:* ${phone}\n` +
      `*City / Location:* ${city}\n` +
      `*Problem Details:* ${problemDescription || "Routine inspection / Fault diagnosis"}\n` +
      `----------------------------------------\n` +
      `Please dispatch a biomedical engineering specialist or contact immediately.`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(url, "_blank");
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeServiceModal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Service Ticket Dispatched!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Your breakdown request has been transmitted directly to our on-call Biomedical Engineering team at{" "}
              <span className="font-bold text-emerald-700">{COMPANY_INFO.phone}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                closeServiceModal();
              }}
              className="mt-4 px-6 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-5">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 border border-emerald-200/80">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                  24/7 Biomedical Engineering Support
                </span>
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  Book Repair & Maintenance Service
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    Equipment Category *
                  </label>
                  <select
                    value={equipmentType}
                    onChange={(e) => setEquipmentType(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs text-slate-800"
                  >
                    <option value="Heart Lung Machine (Cardiopulmonary Bypass)">Heart Lung Machine (HLM)</option>
                    <option value="Hyper / Hypothermia Machine (Temperature Management)">Hyper / Hypothermia Machine</option>
                    <option value="ICU Ventilator (Hamilton, Dräger, etc.)">ICU Ventilator (Hamilton, Dräger, Philips)</option>
                    <option value="Multi-Parameter Patient Monitor">Multi-Parameter Patient Monitor</option>
                    <option value="Defibrillator & Pacer Unit">Defibrillator & Pacer Unit</option>
                    <option value="Electrosurgical Diathermy Unit">Electrosurgical Diathermy Unit</option>
                    <option value="Other Biomedical Machinery">Other Biomedical Machinery</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    Service Type *
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs text-slate-800"
                  >
                    <option value="Emergency Breakdown Repair">Emergency Breakdown Repair</option>
                    <option value="Routine Preventive Maintenance (PM)">Routine Preventive Maintenance (PM)</option>
                    <option value="Sensor & Flow Calibration">Sensor & Flow Calibration</option>
                    <option value="Component / Motherboard Replacement">Component / Motherboard Replacement</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                    <option value="Pre-Purchase Inspection & Certification">Pre-Purchase Inspection & Certification</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">
                  Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Normal (3-5 days)", val: "Routine / Normal" },
                    { label: "Urgent (Within 24h)", val: "Urgent (24h)" },
                    { label: "Critical Breakdown (Immediate)", val: "Critical Emergency" },
                  ].map((lvl) => (
                    <button
                      key={lvl.val}
                      type="button"
                      onClick={() => setUrgency(lvl.val)}
                      className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition ${
                        urgency === lvl.val
                          ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    Contact Person Name & Title *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Engr. Asim / Dr. Farooq"
                      value={engineerName}
                      onChange={(e) => setEngineerName(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    Hospital / Institution *
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. NICVD / Civil / Aga Khan"
                      value={hospital}
                      onChange={(e) => setHospital(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="0325-2719192"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    City / Hospital Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Karachi (Sector 11-A, etc.)"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">
                  Observed Fault / Error Code / Symptoms
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Pump 3 occlusion alarm, error code E04, temperature failing to cool below 25°C..."
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 text-xs sm:text-sm transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Engineer Request to Tech Wiz ({COMPANY_INFO.phone})</span>
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  Head Office: Sector 11-A, North Karachi • On-site mobile engineering vans active
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
