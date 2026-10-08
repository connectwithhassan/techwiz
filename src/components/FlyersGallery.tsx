"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Download, X, Maximize2, FileCheck2 } from "lucide-react";

interface FlyerItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  category: string;
}

const FLYERS: FlyerItem[] = [
  {
    id: "f1",
    title: "Heart Lung Machine Repairing & Sales",
    subtitle: "Keep Your Cardiac Program Running with Reliable Biomedical Support",
    src: "/flyers/heart-lung-machine-banner.jpeg",
    category: "Cardiac & Perfusion",
  },
  {
    id: "f2",
    title: "Ventilator Accessories & Consumables",
    subtitle: "Hamilton, Dräger, Philips & Mindray Compatible Breathing Circuits & Sensors",
    src: "/flyers/ventilator-accessories-flyer.jpeg",
    category: "Respiratory & Critical Care",
  },
  {
    id: "f3",
    title: "Patient Monitoring & ECG Accessories",
    subtitle: "SpO2 Probes, ECG Cables, Reusable Electrodes & Bladderless NIBP Cuffs",
    src: "/flyers/patient-monitoring-accessories.jpeg",
    category: "Patient Monitoring",
  },
  {
    id: "f4",
    title: "Professional Repair & Maintenance Services",
    subtitle: "Minimizing Downtime & Maximizing Patient Safety with Genuine Parts",
    src: "/flyers/heart-lung-repair-sales.jpeg",
    category: "Biomedical Engineering",
  },
  {
    id: "f5",
    title: "Biomedical Equipment & Compatibility Overview",
    subtitle: "Full Catalog of Batteries, EtCO2, Diathermy, and Hospital Plasticware",
    src: "/flyers/biomedical-equipment-overview.jpeg",
    category: "Complete Catalog",
  },
  {
    id: "f6",
    title: "Accessories Catalog Grid & Hospital Supplies",
    subtitle: "Color-coded Biohazard Dustbins, Bedpans, and Defibrillator Batteries",
    src: "/flyers/accessories-catalog-grid.jpeg",
    category: "Consumables & Plastics",
  },
];

export default function FlyersGallery() {
  const [selectedFlyer, setSelectedFlyer] = useState<FlyerItem | null>(null);

  return (
    <section id="flyers" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle backdrop elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800/80 text-emerald-400 text-xs font-bold mb-3">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Official Brand Catalogs & Flyers</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Authentic Product Catalogs & Service Brochures
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Inspect our high-resolution flyers and brochures for Heart Lung Machines, Hamilton-compatible ventilator parts, monitoring sensors, and hospital plastics.
            </p>
          </div>

          <div className="text-xs text-slate-400 bg-slate-800/80 border border-slate-700/80 px-4 py-2.5 rounded-xl flex items-center gap-2">
            <span>Verified Tech Wiz International Karachi Head Office Documentation</span>
          </div>
        </div>

        {/* Grid of Flyers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLYERS.map((flyer) => (
            <div
              key={flyer.id}
              onClick={() => setSelectedFlyer(flyer)}
              className="group bg-slate-800/60 rounded-2xl border border-slate-700/80 hover:border-emerald-500/60 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/20 flex flex-col justify-between"
            >
              <div className="relative h-72 w-full bg-slate-950 overflow-hidden">
                <Image
                  src={flyer.src}
                  alt={flyer.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                    <span>View High-Res Flyer</span>
                  </span>
                </div>

                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-emerald-700/90 text-white px-2.5 py-1 rounded backdrop-blur-xs">
                  {flyer.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                  {flyer.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {flyer.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen High-Res Flyer Modal */}
      {selectedFlyer && (
        <div
          onClick={() => setSelectedFlyer(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-800 shadow-2xl"
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {selectedFlyer.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Tech Wiz International • North Karachi Head Office
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedFlyer.src}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-700 hover:bg-emerald-600 text-white transition text-xs font-medium flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Save Flyer</span>
                </a>
                <button
                  onClick={() => setSelectedFlyer(null)}
                  className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 min-h-[500px] bg-black p-4 flex items-center justify-center overflow-auto">
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedFlyer.src}
                  alt={selectedFlyer.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
