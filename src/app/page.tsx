"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandCompatibility from "@/components/BrandCompatibility";
import RepairServicesSection from "@/components/RepairServicesSection";
import FlyersGallery from "@/components/FlyersGallery";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import {
  CATEGORIES,
  PRODUCTS,
  Product,
  TESTIMONIALS,
  COMPANY_INFO,
} from "@/data/products";
import {
  Star,
  ShieldCheck,
  Award,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  Flame,
  Activity,
  HeartPulse,
  Wrench,
  ChevronRight,
  Cpu,
  Layers,
  BatteryCharging,
  Stethoscope,
  Trash2,
  Truck,
  FileCheck2,
  Clock,
  PhoneCall,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function HomePage() {
  const { openServiceModal, openQuoteModal } = useCart();

  const trendingProducts = PRODUCTS.slice(0, 8);
  const wholesaleSpecials = [
    PRODUCTS.find((p) => p.id === "hamilton-ventilator-breathing-circuit-adult")!,
    PRODUCTS.find((p) => p.id === "hospital-color-coded-pedal-dustbins")!,
    PRODUCTS.find((p) => p.id === "ecg-suction-chest-electrodes-adult")!,
    PRODUCTS.find((p) => p.id === "philips-zoll-defibrillator-battery")!,
  ].filter(Boolean);

  const departments = [
    {
      name: "Ventilator Accessories",
      category: "ventilator-accessories",
      icon: Activity,
      color: "bg-[#151838] text-[#06b6d4]",
    },
    {
      name: "Patient Monitoring",
      category: "patient-monitoring",
      icon: Stethoscope,
      color: "bg-gradient-to-br from-[#151838] to-[#1e2352] text-white",
    },
    {
      name: "ECG & Telemetry",
      category: "ecg-accessories",
      icon: HeartPulse,
      color: "bg-[#059669] text-white",
    },
    {
      name: "Machinery & Equipment",
      category: "specialized-equipment",
      icon: Cpu,
      color: "bg-gradient-to-br from-[#059669] to-[#047857] text-white",
    },
    {
      name: "Medical Batteries",
      category: "medical-batteries",
      icon: BatteryCharging,
      color: "bg-gradient-to-br from-[#151838] to-[#059669] text-white",
    },
    {
      name: "Hospital Plastics & Bins",
      category: "hospital-plastics-consumables",
      icon: Trash2,
      color: "bg-gradient-to-br from-[#059669] to-[#06b6d4] text-white",
    },
  ];

  const hlmProduct = PRODUCTS.find((p) => p.id === "hlm-perfusion-system");
  const hypProduct = PRODUCTS.find((p) => p.id === "hyper-hypothermia-machine");

  return (
    <div className="bg-[#f8fafc] min-h-screen selection:bg-[#059669] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section matching Industrial Edge */}
        <HeroSection />

        {/* Section 1: Shop by Department matching Industrial Edge */}
        <section className="py-14 bg-gradient-to-b from-slate-200/70 via-slate-100 to-slate-200/50 border-b border-slate-300/80">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-extrabold text-[#059669] uppercase tracking-wider block mb-1">
                  Explore Segments
                </span>
                <h2 className="text-2xl font-black text-[#151838] tracking-tight">
                  Shop by Department
                </h2>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-[#059669] hover:text-[#047857] transition flex items-center gap-1 group bg-emerald-50/80 px-3 py-1.5 rounded-lg border border-emerald-200/60"
              >
                <span>All Departments</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 6 Category Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {departments.map((dept, idx) => {
                const Icon = dept.icon;
                return (
                  <Link
                    key={idx}
                    href={`/products?category=${dept.category}`}
                    className="h-full p-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#059669]/60 transition-all duration-300 group text-center flex flex-col items-center justify-center shadow-xs hover:shadow-lg"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl ${dept.color} shadow-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <h4 className="text-xs font-black text-[#151838] group-hover:text-[#059669] line-clamp-2 transition-colors">
                      {dept.name}
                    </h4>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Trending Supplies matching Industrial Edge */}
        <section className="py-16 bg-gradient-to-b from-[#f1f5f9] via-slate-100 to-slate-200/60 border-b border-slate-300/70">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-[#059669] uppercase tracking-wider block mb-1">
                  Top Rated Sourcing
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#151838] tracking-tight">
                  Trending Medical Supplies
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 hover:border-[#059669] hover:text-[#059669] rounded-xl text-xs font-bold text-slate-700 transition shadow-xs hover:shadow-md group"
              >
                <span>Browse Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Grid of Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trendingProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Bulk Wholesale Specials matching Industrial Edge */}
        <section className="py-14 bg-gradient-to-br from-[#151838]/5 via-emerald-50/40 to-slate-100 border-y border-slate-200/80">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <span className="p-2 bg-red-100 text-red-600 rounded-xl">
                  <Flame className="w-5 h-5 animate-pulse text-red-600" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#151838]">
                    Hospital Bulk & Institutional Specials
                  </h3>
                  <p className="text-xs text-slate-500">
                    High-volume discounted pricing for ICUs, surgical suites and clinical clinics
                  </p>
                </div>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-[#059669] hover:underline"
              >
                View All Deals →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wholesaleSpecials.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Heart Lung Machine & Perfusion Spotlight (from Flyers 1 & 3) */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <HeartPulse className="w-4 h-4 text-emerald-700 animate-pulse" />
                  <span>Cardiopulmonary Bypass Solutions</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#151838] tracking-tight leading-tight">
                  Heart Lung Machine Repairing & Capital Sales
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Tech Wiz International provides expert repair services for heart lung machines and offers high quality cardiopulmonary bypass systems for sale, along with hyper & hypothermia temperature regulation units.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Diagnostic & Troubleshooting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Perfusion Pump Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Genuine OEM Spares</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>24/7 Breakdown Standby</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-3">
                  <Link
                    href="/heart-lung-machine"
                    className="px-6 py-3 bg-[#059669] hover:bg-[#047857] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition flex items-center gap-2"
                  >
                    <span>View Perfusion Division</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => openServiceModal("Heart Lung Machine Urgent Service")}
                    className="px-6 py-3 bg-[#151838] hover:bg-[#1e2352] text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-[#06b6d4]" />
                    <span>Book Repair Technician</span>
                  </button>
                </div>
              </div>

              {/* Right Visual Image */}
              <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 relative">
                <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-950 p-2 flex items-center justify-center">
                  <Image
                    src="/flyers/heart-lung-machine-banner.jpeg"
                    alt="Heart Lung Machine Sales & Repair"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Cardiopulmonary Bypass (New & Certified Pre-Owned)</span>
                  <span className="text-emerald-400 font-bold">North Karachi Lab</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Brand Compatibility Matrix */}
        <BrandCompatibility
          onSelectBrand={(b) => {
            window.location.href = `/products?brand=${encodeURIComponent(b)}`;
          }}
        />

        {/* Section 6: Official Flyers Gallery with High-Res Zoom */}
        <FlyersGallery />

        {/* Section 7: B2B Value Pillars matching Industrial Edge */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-8 h-8 text-[#059669] mb-3" />
                <h4 className="font-black text-[#151838] text-sm mb-1">
                  100% Genuine & Tested
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every SpO2 probe, ECG cable, and circuit passes biomedical patient simulation testing before packing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <Truck className="w-8 h-8 text-[#059669] mb-3" />
                <h4 className="font-black text-[#151838] text-sm mb-1">
                  Same-Day Karachi Dispatch
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Direct dispatch to hospitals across Karachi; insured overnight courier to Lahore, Islamabad, and nationwide.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <FileCheck2 className="w-8 h-8 text-[#059669] mb-3" />
                <h4 className="font-black text-[#151838] text-sm mb-1">
                  FBR GST & NTN Invoices
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Institutional commercial invoicing with official NTN for hospitals, clinics, and government tenders.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <Clock className="w-8 h-8 text-[#059669] mb-3" />
                <h4 className="font-black text-[#151838] text-sm mb-1">
                  24/7 Breakdown Response
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  On-call cardiopulmonary and intensive care biomedical engineers ready for emergency intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Institutional RFQ Callout matching Industrial Edge */}
        <section className="py-14 sm:py-20 bg-gradient-to-r from-[#111538] via-[#172554] to-[#044337] text-white">
          <div className="w-full px-4 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
              Institutional Healthcare Sourcing
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Require Custom Hospital Tenders or Annual Maintenance?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with our biomedical sales and engineering team for custom parts procurement, contract quotes, and emergency spare shipments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065f46] text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg transition"
              >
                Submit Hospital RFQ
              </Link>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 bg-[#1e224d]/80 hover:bg-[#151838] text-white rounded-xl text-xs sm:text-sm font-bold border border-emerald-500/30 transition flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
