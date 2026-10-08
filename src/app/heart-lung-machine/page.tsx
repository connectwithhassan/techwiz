"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HeartPulse,
  ThermometerSnowflake,
  Wrench,
  ShieldCheck,
  CheckCircle,
  FileText,
  PhoneCall,
  Clock,
  Activity,
  ArrowRight,
  Settings,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, COMPANY_INFO } from "@/data/products";

export default function HeartLungMachinePage() {
  const { openQuoteModal, openServiceModal } = useCart();

  const hlmProduct = PRODUCTS.find((p) => p.id === "hlm-perfusion-system");
  const hypProduct = PRODUCTS.find((p) => p.id === "hyper-hypothermia-machine");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                <HeartPulse className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Cardiopulmonary Perfusion & Critical Care Division</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Heart Lung Machine{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-300">
                  Repairing & Sales
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Ensuring uninterrupted performance for critical care and life-saving procedures.
                Tech Wiz International provides expert repair services for heart lung machines and offers high quality cardiopulmonary bypass systems for sale, along with hyper & hypothermia machines.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => openServiceModal("Heart Lung Machine Repair & Maintenance")}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-emerald-700/30 transition flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book Urgent Perfusion Service</span>
                </button>

                {hlmProduct && (
                  <button
                    onClick={() => openQuoteModal(hlmProduct)}
                    className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>Request Machine Quotation</span>
                  </button>
                )}

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 border border-white/10"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* 3 Core Trust Badges from Flyer */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex flex-col">
                  <span className="font-bold text-emerald-400 text-sm">Expert Technicians</span>
                  <span className="text-[11px] text-slate-400">Cardiopulmonary Engineers</span>
                </div>
                <div className="flex flex-col border-x border-slate-800 px-3">
                  <span className="font-bold text-emerald-400 text-sm">Genuine Parts</span>
                  <span className="text-[11px] text-slate-400">Tested Biomedical Spares</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-emerald-400 text-sm">Fast & Reliable</span>
                  <span className="text-[11px] text-slate-400">24/7 Breakdown Response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Machines Available for Sale Grid */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
              Critical Care Capital Equipment
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Life Support Machinery Available for Sale
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              High-performance, reliable and fully functional machines for your critical care and surgical programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Machine 1: Heart Lung Machine */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all">
              <div>
                <div className="relative h-64 w-full bg-slate-50 rounded-2xl overflow-hidden mb-6 p-4 border border-slate-100 flex items-center justify-center">
                  <Image
                    src="/flyers/heart-lung-machine-banner.jpeg"
                    alt="Heart Lung Machine"
                    fill
                    className="object-contain"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[11px] font-bold px-3 py-1 rounded">
                    Cardiopulmonary Bypass
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase">
                    Cardiac Surgery Console
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    New & Pre-Owned Available
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                  Heart Lung Machine (HLM)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Modular multi-roller pump console with integrated arterial bubble detector, level sensing modules, cardioplegia delivery system, and comprehensive battery backup.
                </p>

                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>High Performance & Reliable Equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Suitable for Cardiac Surgery & Advanced Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>New / Pre-Owned Certified Options Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Technical Support & Installation Assistance in Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => hlmProduct && openQuoteModal(hlmProduct)}
                  className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Machine Quote & Specs</span>
                </button>
                <Link
                  href="/products/hlm-perfusion-system"
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Machine 2: Hyper & Hypothermia */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all">
              <div>
                <div className="relative h-64 w-full bg-slate-50 rounded-2xl overflow-hidden mb-6 p-4 border border-slate-100 flex items-center justify-center">
                  <Image
                    src="/flyers/heart-lung-repair-sales.jpeg"
                    alt="Hyper & Hypothermia Machine"
                    fill
                    className="object-contain"
                  />
                  <span className="absolute top-3 left-3 bg-teal-700 text-white text-[11px] font-bold px-3 py-1 rounded">
                    Temperature Management
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-teal-700 uppercase">
                    Thermal Regulation
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Dual Water Circuits
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                  Hyper & Hypothermia Machine
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Precision dual-reservoir patient warming and cooling system engineered for adult and pediatric cardiopulmonary bypass and neuro-critical hypothermia protocols.
                </p>

                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Accurate Temperature Control (3°C to 42°C)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Reliable & Safe Dual-Reservoir Switching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Ideal for Cardiac & Neuro Procedures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Installation & Operator Training Support</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => hypProduct && openQuoteModal(hypProduct)}
                  className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Machine Quote & Specs</span>
                </button>
                <Link
                  href="/products/hyper-hypothermia-machine"
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Repair & Maintenance Division Deep Dive */}
        <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                  <Wrench className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Precision Biomedical Engineering</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Comprehensive Heart Lung Machine Repair Services
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  We provide comprehensive repair and maintenance services for all major brands of heart lung machines, including Maquet, Stockert S3/S5, Sorin, and Medtronic.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      title: "Diagnostic & Troubleshooting",
                      desc: "Motherboard error diagnostics and electronic sensor calibration.",
                    },
                    {
                      title: "Performance Optimization",
                      desc: "Peristaltic pump RPM calibration and occlusion pressure testing.",
                    },
                    {
                      title: "Genuine Parts Replacement",
                      desc: "OEM replacement roller bearings, motors, and interface screens.",
                    },
                    {
                      title: "Routine Maintenance (PM)",
                      desc: "Scheduled electrical safety testing and preventive maintenance.",
                    },
                    {
                      title: "On-Site & Off-Site Support",
                      desc: "Immediate technician deployment across Karachi and nationwide.",
                    },
                    {
                      title: "Skilled Biomedical Engineers",
                      desc: "Certified engineers with extensive clinical perfusion exposure.",
                    },
                  ].map((srv, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{srv.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-snug">{srv.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => openServiceModal("Heart Lung Machine Repair & Maintenance")}
                    className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Book Repair & Maintenance Consultation</span>
                  </button>
                </div>
              </div>

              {/* Right: Technical Image Box */}
              <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 relative overflow-hidden">
                <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-slate-950 p-4 border border-slate-800">
                  <Image
                    src="/flyers/heart-lung-repair-sales.jpeg"
                    alt="Heart Lung Machine Repairing & Overhaul"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Tech Wiz International Biomedical Lab
                    </h4>
                    <p className="text-xs text-slate-400">
                      Sector 11-A, North Karachi Head Office
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                    24/7 Response
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
