"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Flame,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Activity,
  ArrowRight,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

export default function HeroSection() {
  const dealProducts = [
    {
      product: PRODUCTS.find((p) => p.id === "hamilton-ventilator-breathing-circuit-adult")!,
      discount: "-18% OFF",
      originalPrice: "PKR 3,900",
      dealPrice: "PKR 3,200",
      unit: "Kit",
      tag: "Ventilator Accessories",
    },
    {
      product: PRODUCTS.find((p) => p.id === "hlm-perfusion-system")!,
      discount: "CERTIFIED",
      originalPrice: "Perfusion Unit",
      dealPrice: "Official RFP",
      unit: "System",
      tag: "Cardiac Surgery Console",
    },
    {
      product: PRODUCTS.find((p) => p.id === "spo2-finger-probe-philips-mindray")!,
      discount: "-15% OFF",
      originalPrice: "PKR 3,300",
      dealPrice: "PKR 2,800",
      unit: "Probe",
      tag: "Patient Monitoring",
    },
    {
      product: PRODUCTS.find((p) => p.id === "philips-zoll-defibrillator-battery")!,
      discount: "-12% OFF",
      originalPrice: "PKR 43,000",
      dealPrice: "PKR 38,000",
      unit: "Pack",
      tag: "Medical Batteries",
    },
    {
      product: PRODUCTS.find((p) => p.id === "ecg-suction-chest-electrodes-adult")!,
      discount: "-14% OFF",
      originalPrice: "PKR 4,100",
      dealPrice: "PKR 3,500",
      unit: "Set of 6",
      tag: "ECG Accessories",
    },
    {
      product: PRODUCTS.find((p) => p.id === "hospital-color-coded-pedal-dustbins")!,
      discount: "-10% OFF",
      originalPrice: "PKR 5,000",
      dealPrice: "PKR 4,500",
      unit: "Unit",
      tag: "Hospital Consumables",
    },
  ].filter((d) => d.product !== undefined);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dealProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [dealProducts.length]);

  const activeDeal = dealProducts[currentSlide];

  return (
    <section className="relative bg-gradient-to-r from-[#111538] via-[#172554] to-[#044337] text-white overflow-hidden py-10 lg:py-14 lg:min-h-[calc(100vh-130px)] lg:flex lg:items-center">
      {/* Ambient Glowing Orbs matching industrial edge */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#059669]/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-[#06b6d4]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-6 pb-12 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typography & Action Buttons (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs self-start">
              Pakistan's Leading Biomedical & Healthcare E-Store
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight mb-4 text-white">
              Procure Biomedical Gear, Life Support & Supplies{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Online
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Order certified ventilator breathing circuits, monitoring sensor probes, ECG cables, hospital plastics, and Heart Lung Machines with transparent pricing, instant online procurement, and fast doorstep delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065f46] rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all duration-200 gap-2 w-full sm:w-auto"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Medical Catalog</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-bold text-slate-200 bg-[#1e224d]/80 hover:bg-[#151838] border border-emerald-500/30 rounded-xl hover:text-white transition duration-200 w-full sm:w-auto hover:border-emerald-400"
              >
                <span>Request Hospital RFQ</span>
              </Link>
            </div>

            {/* 3 Metric Stat Counters */}
            <div className="grid grid-cols-3 gap-6 pt-5 border-t border-slate-700/80 text-xs">
              <div className="group cursor-default">
                <span className="font-extrabold text-base sm:text-lg text-white block group-hover:text-emerald-400 transition-colors">
                  1,200+
                </span>
                <span className="text-slate-400 text-[11px]">Available SKUs</span>
              </div>
              <div className="group cursor-default">
                <span className="font-extrabold text-base sm:text-lg text-white block group-hover:text-emerald-400 transition-colors">
                  24 - 48 Hrs
                </span>
                <span className="text-slate-400 text-[11px]">Nationwide Dispatch</span>
              </div>
              <div className="group cursor-default">
                <span className="font-extrabold text-base sm:text-lg text-white block group-hover:text-emerald-400 transition-colors">
                  100% Tax
                </span>
                <span className="text-slate-400 text-[11px]">FBR GST Invoices</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Featured Medical Deal Slider (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex">
            <div className="relative w-full h-full min-h-[440px] lg:min-h-[500px] flex flex-col justify-between overflow-hidden group bg-[#111538]/60 rounded-3xl p-5 border border-slate-700/70 shadow-2xl backdrop-blur-md">
              {/* Header inside slider */}
              <div className="relative z-10 flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider shadow-sm">
                    <Flame className="w-3.5 h-3.5 animate-pulse" />
                    <span>Live Medical Deal</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-300 hidden sm:inline">
                    Deal {currentSlide + 1} of {dealProducts.length}
                  </span>
                </div>

                {/* Slider Dot Indicators */}
                <div className="flex items-center gap-1.5 bg-[#1e2352]/70 p-1.5 rounded-full border border-slate-700/50">
                  {dealProducts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === i
                          ? "w-6 bg-gradient-to-r from-[#059669] to-[#06b6d4]"
                          : "w-2 bg-slate-500/50 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slider Active Product Card */}
              {activeDeal && (
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div className="relative w-full aspect-16/10 sm:aspect-16/9 flex items-center justify-center my-auto overflow-hidden group/img bg-slate-950/40 rounded-2xl p-4 border border-slate-800">
                    <div className="relative w-full h-full transform group-hover/img:scale-105 transition-transform duration-500 flex items-center justify-center">
                      <Image
                        src={activeDeal.product.image}
                        alt={activeDeal.product.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                      />
                    </div>
                    <div className="absolute top-2 right-2 bg-red-600 text-white font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg shadow-red-900/50">
                      {activeDeal.discount}
                    </div>
                  </div>

                  <div className="pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      {activeDeal.tag}
                    </span>
                    <h3 className="font-extrabold text-lg sm:text-xl text-white mb-3 line-clamp-1">
                      {activeDeal.product.name}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-700/60">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-xl sm:text-2xl font-black text-white">
                          {activeDeal.dealPrice}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          {activeDeal.originalPrice}
                        </span>
                        <span className="text-xs text-slate-300 font-medium">
                          /{activeDeal.unit}
                        </span>
                      </div>

                      <Link
                        href={`/products/${activeDeal.product.id}`}
                        className="relative z-30 px-6 py-2.5 bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065f46] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-700/30 hover:shadow-emerald-600/50 transition-all duration-200 cursor-pointer shrink-0"
                      >
                        <span>View Product Deal</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Slider Arrow Controls */}
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) => (prev - 1 + dealProducts.length) % dealProducts.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#059669] text-white border border-white/10 transition duration-200 backdrop-blur-md z-20 cursor-pointer shadow-lg"
                aria-label="Previous Deal"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % dealProducts.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#059669] text-white border border-white/10 transition duration-200 backdrop-blur-md z-20 cursor-pointer shadow-lg"
                aria-label="Next Deal"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
