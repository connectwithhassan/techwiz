"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Activity,
  HeartPulse,
  Wrench,
  ShieldCheck,
  Clock,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { COMPANY_INFO, CATEGORIES } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Footer() {
  const { openServiceModal } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md">
                <Activity className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white">
                    TECH WIZ
                  </span>
                  <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                    INTERNATIONAL
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing reliable biomedical equipment, ventilator accessories, patient monitoring probes, medical batteries, and certified Heart Lung Machine repair services to hospitals, surgical centers, and clinics throughout Pakistan.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Medical Supplies
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="hover:text-emerald-400 transition line-clamp-1"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-emerald-400 font-semibold hover:underline block pt-1"
                >
                  View Full Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Engineering & Repairs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Engineering & Care
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/heart-lung-machine" className="hover:text-emerald-400 transition">
                  Heart Lung Machine Repair
                </Link>
              </li>
              <li>
                <Link href="/heart-lung-machine" className="hover:text-emerald-400 transition">
                  Cardiopulmonary Bypass Sales
                </Link>
              </li>
              <li>
                <Link href="/heart-lung-machine" className="hover:text-emerald-400 transition">
                  Hyper / Hypothermia Units
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition">
                  Ventilator & Monitor Servicing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition">
                  Annual Maintenance (AMC) Plans
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openServiceModal("Annual Maintenance Contract")}
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  Book Biomedical Service →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Company Links & Standby */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Tech Wiz
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-emerald-400 transition">
                  Procurement Cart
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-[11px] font-bold text-white block mb-1">
                Emergency Breakdown:
              </span>
              <span className="text-xs text-emerald-400 font-semibold block">
                24/7 Response in Karachi
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {COMPANY_INFO.workingHours}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Tech Wiz International. All rights reserved.</span>
            <span>•</span>
            <span>Sector 11-A, North Karachi, Pakistan</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Biomedical Quality Assurance</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
