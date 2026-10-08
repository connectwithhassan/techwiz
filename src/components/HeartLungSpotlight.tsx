"use client";

import React from "react";
import Image from "next/image";
import {
  HeartPulse,
  ThermometerSnowflake,
  ShieldCheck,
  CheckCircle,
  Wrench,
  Clock,
  FileText,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, COMPANY_INFO } from "@/data/products";

export default function HeartLungSpotlight() {
  const { openQuoteModal, openServiceModal } = useCart();

  const hlmProduct = PRODUCTS.find((p) => p.id === "hlm-perfusion-system");
  const hypProduct = PRODUCTS.find((p) => p.id === "hyper-hypothermia-machine");

  return (
    <section id="heart-lung-machine" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold mb-4 shadow-xs">
            <HeartPulse className="w-4 h-4 text-emerald-700 animate-pulse" />
            <span>Cardiopulmonary Perfusion & Critical Care Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            HEART LUNG MACHINE
            <span className="block text-emerald-700 text-2xl sm:text-4xl mt-1 font-extrabold">
              REPAIRING & SALES
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Keep Your Cardiac Program Running with Reliable Biomedical Support.
            Tech Wiz International provides expert repair services for heart lung machines and offers high quality cardiopulmonary bypass systems for sale, along with hyper & hypothermia machines.
          </p>
        </div>

        {/* 2 Main Columns: Repair Services vs Machines for Sale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Repairing Services */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-700/20">
                  <Wrench className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Comprehensive Engineering Care
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Heart Lung Machine Repairing Services
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Extending the life of your perfusion equipment, minimizing procedural downtime, and ensuring zero-failure patient safety in the operation theater.
              </p>

              {/* Bullet Checklist from flyer */}
              <div className="space-y-3.5 mb-8">
                {[
                  {
                    title: "Diagnostic & Troubleshooting",
                    desc: "Precision fault tracing on pump controllers, circuit boards, and optical level alarms.",
                  },
                  {
                    title: "Performance Optimization",
                    desc: "Roller head tension calibration, RPM encoder verification, and continuous speed tuning.",
                  },
                  {
                    title: "Replacement of Faulty Components",
                    desc: "100% genuine biomedical spare parts with tested reliability.",
                  },
                  {
                    title: "Routine Maintenance & Preventive Care",
                    desc: "Scheduled periodic checks, electrical safety validation, and leakage testing.",
                  },
                  {
                    title: "On-Site & Off-Site Support",
                    desc: "Rapid deployment to cardiac centers across Karachi and emergency dispatch nationwide.",
                  },
                  {
                    title: "Skilled Biomedical Engineers",
                    desc: "Experienced engineers specialized in cardiopulmonary bypass technologies.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge Bar */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-emerald-950 text-white rounded-2xl mb-8">
                <div className="text-center">
                  <span className="block text-xs font-black text-emerald-400">Expert</span>
                  <span className="text-[10px] text-slate-300">Technicians</span>
                </div>
                <div className="text-center border-x border-emerald-800">
                  <span className="block text-xs font-black text-emerald-400">Genuine</span>
                  <span className="text-[10px] text-slate-300">Biomedical Parts</span>
                </div>
                <div className="text-center">
                  <span className="block text-xs font-black text-emerald-400">Fast & Reliable</span>
                  <span className="text-[10px] text-slate-300">Emergency Service</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openServiceModal("Heart Lung Machine Repair & Maintenance")}
                className="w-full py-3.5 px-6 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Heart Lung Machine Repair / Maintenance</span>
              </button>
            </div>
          </div>

          {/* Right Column: Machines Available For Sale */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <HeartPulse className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Certified Medical Equipment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Machines Available For Sale
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                High-performance, reliable and fully functional machines for your critical care and cardiac surgery needs.
              </p>

              {/* 2 Sub-Cards: HLM & Hyper/Hypothermia */}
              <div className="space-y-4 mb-6">
                {/* HLM Card */}
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-24 bg-slate-950 rounded-xl overflow-hidden shrink-0 border border-slate-700 p-1">
                      <Image
                        src="/flyers/heart-lung-machine-banner.jpeg"
                        alt="Heart Lung Machine"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">
                          Heart Lung Machine (HLM)
                        </h4>
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-semibold">
                          Cardiopulmonary Bypass
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                        Precision multi-roller console with integrated safety modules, bubble detection, and cardioplegia thermal controller.
                      </p>
                      <div className="mt-2.5 flex items-center gap-2">
                        <button
                          onClick={() => hlmProduct && openQuoteModal(hlmProduct)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Request Quotation</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hyper / Hypothermia Card */}
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-24 bg-slate-950 rounded-xl overflow-hidden shrink-0 border border-slate-700 p-1">
                      <Image
                        src="/flyers/heart-lung-repair-sales.jpeg"
                        alt="Hyper & Hypothermia Machine"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">
                          Hyper & Hypothermia Machine
                        </h4>
                        <span className="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800 font-semibold">
                          Temperature Management
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                        Accurate dual-circuit thermal regulation system for adult & pediatric cardiopulmonary hypothermia.
                      </p>
                      <div className="mt-2.5 flex items-center gap-2">
                        <button
                          onClick={() => hypProduct && openQuoteModal(hypProduct)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Request Quotation</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features List from flyer */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High Performance & Reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suitable for Cardiac Surgery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>New / Pre-Owned Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Installation & Training Assistance</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/40 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Cardiac Equipment Specialist: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
