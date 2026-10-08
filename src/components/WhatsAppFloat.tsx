"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs p-3.5 rounded-2xl shadow-xl border border-slate-200 max-w-xs relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-bold text-emerald-800">Biomedical Engineer Online</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug">
            Need urgent ventilator circuits, ECG cables, or Heart Lung Machine support? Chat directly with Tech Wiz International.
          </p>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-700/50 hover:scale-105 transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
}
