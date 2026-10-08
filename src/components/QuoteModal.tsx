"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, FileText, Send, Building, Phone, Mail, User, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { COMPANY_INFO } from "@/data/products";

export default function QuoteModal() {
  const { quoteModalProduct, closeQuoteModal } = useCart();
  const [name, setName] = useState("");
  const [hospital, setHospital] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirementType, setRequirementType] = useState("New Equipment Purchase");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!quoteModalProduct) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*OFFICIAL QUOTATION REQUEST - TECH WIZ INTERNATIONAL*\n` +
      `----------------------------------------\n` +
      `*Equipment:* ${quoteModalProduct.name}\n` +
      `*SKU:* ${quoteModalProduct.sku}\n` +
      `*Requirement Type:* ${requirementType}\n` +
      `----------------------------------------\n` +
      `*Contact Person:* ${name}\n` +
      `*Hospital/Institution:* ${hospital}\n` +
      `*Phone/WhatsApp:* ${phone}\n` +
      `*Email:* ${email}\n` +
      (notes ? `*Notes:* ${notes}\n` : "") +
      `----------------------------------------\n` +
      `Please provide formal commercial proposal, warranty terms, and delivery timeline.`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(url, "_blank");
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={closeQuoteModal}
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
              Quotation Request Forwarded!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Your RFP for <span className="font-bold text-slate-800">{quoteModalProduct.name}</span> has been transferred to Tech Wiz International Biomedical sales desk.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                closeQuoteModal();
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
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                  Request Official Proposal
                </span>
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {quoteModalProduct.name}
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. / Engr. Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    Hospital / Medical Center *
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Hospital or Institute Name"
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
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="0325-XXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-semibold block mb-1">
                    Official Email
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="procurement@hospital.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">
                  Procurement Mode
                </label>
                <select
                  value={requirementType}
                  onChange={(e) => setRequirementType(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs text-slate-800"
                >
                  <option value="New Equipment Purchase">Brand New Equipment Purchase</option>
                  <option value="Certified Pre-Owned Unit">Certified Pre-Owned Unit</option>
                  <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  <option value="Emergency Repair & Calibration">Emergency Repair & Calibration</option>
                  <option value="Consumables / Accessories Bulk Order">Accessories & Consumables Bulk Order</option>
                </select>
              </div>

              <div>
                <label className="text-slate-700 font-semibold block mb-1">
                  Specific Requirements or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention configuration (e.g. 4-pump or 5-pump, neonatal accessories, urgent date...)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 text-xs sm:text-sm transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quotation Request to Tech Wiz ({COMPANY_INFO.phone})</span>
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  Head Office: Karachi, Pakistan • Immediate response within working hours
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
