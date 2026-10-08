"use client";

import React from "react";
import {
  Wrench,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  HeartHandshake,
  Activity,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { REPAIR_SERVICES, COMPANY_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function RepairServicesSection() {
  const { openServiceModal } = useCart();

  return (
    <section id="repair-services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-4">
            <Wrench className="w-3.5 h-3.5 text-emerald-700" />
            <span>Biomedical Engineering & Maintenance Division</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Professional Biomedical Repair & Maintenance
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Extend the Life of Your Equipment • Minimize Downtime • Maximize Patient Safety
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REPAIR_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 group-hover:bg-emerald-600 text-emerald-800 group-hover:text-white flex items-center justify-center transition-colors mb-6 shadow-sm">
                  <Activity className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs font-semibold text-emerald-700 mb-3">
                  {srv.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Scope of Service & Maintenance:
                  </span>
                  {srv.keyBenefits.slice(0, 4).map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Supported Systems:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {srv.supportedEquipment.map((eq, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded font-medium"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => openServiceModal(srv.title)}
                  className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Book Service / Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Reliability Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-emerald-900/60 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-700/60 text-emerald-300 text-xs font-bold mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>Round-the-Clock Critical Breakdown Standby</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Minimize Clinical Downtime with Our Dedicated Karachi Biomedical Lab
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Operating rooms and intensive care units cannot afford equipment delays. Our skilled biomedical engineers are equipped with calibrated test analyzers, OEM spare boards, and mobile repair kits for instant on-site diagnostics.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => openServiceModal("Emergency Breakdown Response")}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-emerald-700/30 transition flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Request Emergency Technician Dispatch</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-bold border border-white/20 transition flex items-center gap-2"
                >
                  <Headphones className="w-4 h-4 text-emerald-400" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right side 4 Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Genuine Parts</h4>
                <p className="text-xs text-slate-300 mt-1">
                  100% genuine biomedical components and tested sensor modules.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                <Zap className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Rapid Turnaround</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Urgent 24-hour repair cycle for operation theater equipment.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                <HeartHandshake className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Annual Maintenance (AMC)</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Comprehensive preventive care agreements for hospitals.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                <Activity className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-white">Safety Certified</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Calibrated according to IEC 60601 medical electrical standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
