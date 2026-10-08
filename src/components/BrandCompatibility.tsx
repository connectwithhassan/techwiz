"use client";

import React from "react";
import { Check, ShieldCheck, Cpu } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function BrandCompatibility({
  onSelectBrand,
}: {
  onSelectBrand: (brand: string) => void;
}) {
  return (
    <section id="compatibility" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <Cpu className="w-3.5 h-3.5 text-emerald-700" />
            <span>Multi-Vendor Biomedical Compatibility</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Accessories & Spares for All Major Brands
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            One-Stop Procurement Solution for Hospitals, ICUs & Operation Theaters. Click any brand to filter compatible accessories.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {COMPANY_INFO.compatibleBrands.map((b) => (
            <button
              key={b.name}
              onClick={() => onSelectBrand(b.name)}
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition text-left group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition block">
                  {b.name}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1 line-clamp-1">
                  {b.tag}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-1 text-[10px] text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <Check className="w-3 h-3" />
                <span>View Spares</span>
              </div>
            </button>
          ))}
        </div>

        {/* Assurance Box */}
        <div className="mt-10 p-5 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                100% Signal Integrity & Pin Configuration Guarantee
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500">
                All SpO2 sensors, ECG cables, and ventilator flow modules are verified with biomedical patient simulators prior to dispatch.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              "Hello Tech Wiz International, I am looking for a specific cable/accessory for my medical device. Can you confirm compatibility?"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition shadow-xs"
          >
            Check Compatibility on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
