"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  CheckCircle,
  Clock,
  Wrench,
  Sparkles,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold">
                <Activity className="w-3.5 h-3.5" />
                <span>About Tech Wiz International</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Your Trusted Partner in Biomedical & Healthcare Solutions
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Dedicated to sustaining life-support systems, providing precision multi-vendor medical accessories, and delivering cardiopulmonary engineering excellence across Pakistan.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Bento */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                Our Foundation & Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Engineering Patient Safety with Zero Compromise
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Established with a vision to eliminate critical equipment downtime in hospitals, Tech Wiz International has grown into Pakistan's foremost provider of Heart Lung Machine repair services, ventilator consumables, and patient monitoring accessories.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Headquartered at Office 03, A-728, Sector 11-A, North Karachi, our certified laboratory is equipped with precision electrical safety analyzers, simulator patient monitors, and dedicated perfusion pump calibration benches.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-slate-200">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-700">250+</span>
                  <p className="text-xs text-slate-600 mt-1 font-semibold">
                    Partner Hospitals & Surgical Centers
                  </p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-700">1,200+</span>
                  <p className="text-xs text-slate-600 mt-1 font-semibold">
                    Biomedical Accessories & Spare SKUs
                  </p>
                </div>
              </div>
            </div>

            {/* Right Flyer Visual */}
            <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 p-2">
                <Image
                  src="/flyers/biomedical-equipment-overview.jpeg"
                  alt="Tech Wiz International Overview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Karachi Head Office Operation</span>
                <span className="text-emerald-400 font-bold">Sector 11-A, North Karachi</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Tech Wiz */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                Why Healthcare Centers Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Core Engineering Commitments
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                  100% Genuine Components
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every ECG cable, SpO2 sensor, and ventilator module conforms to strict manufacturer tolerances.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <HeartPulse className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                  Perfusion Specialized
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Specialized repair and testing for cardiopulmonary bypass machines and hyper/hypothermia units.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <Clock className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                  24/7 Breakdown Standby
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Immediate emergency response in Karachi for operating room and ICU equipment failures.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <Award className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                  IEC 60601 Standards
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Strict electrical safety inspection and leakage tests performed on all serviced machinery.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition"
              >
                <span>Visit Our Karachi Facility / Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
