"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Search,
  Menu,
  X,
  Activity,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Flame,
  HeartPulse,
} from "lucide-react";
import { COMPANY_INFO, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const liveResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.compatibleBrands.some((b) =>
            b.toLowerCase().includes(searchQuery.toLowerCase())
          )
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchFocused(false);
    }
  };

  const navLinks = [
    { label: "Store / Products", href: "/products" },
    { label: "Heart Lung & Perfusion", href: "/heart-lung-machine" },
    { label: "Biomedical Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact / RFQ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100">
      {/* Top Bar matching Industrial Edge */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800">
        <div className="w-full px-1 sm:px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto space-x-6">
            <span className="flex items-center justify-center gap-1.5 text-emerald-400 font-semibold text-[11px] sm:text-xs text-center">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              Direct Biomedical Sourcing & Hospital Bulk Pricing
            </span>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-400">
            <span>Karachi Head Office | Nationwide Delivery</span>
            <Link
              href="/contact"
              className="text-emerald-400 hover:text-emerald-300 font-medium shrink-0 flex items-center gap-1"
            >
              <span>Submit Hospital RFQ</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Header (h-20) */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo matching Industrial Edge structure */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group py-1">
            <div className="relative w-12 h-12 shrink-0 flex items-center justify-center bg-gradient-to-br from-[#151838] to-[#059669] rounded-2xl shadow-md text-white group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[19px] font-bold tracking-tight text-[#1e428a] leading-tight">
                Tech Wiz International
              </span>
              <span className="text-[10.5px] font-semibold text-slate-500 tracking-wider leading-tight uppercase">
                Healthcare Solutions Guaranteed
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div ref={searchRef} className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search ventilator circuits, ECG cables, monitors, parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-slate-100 hover:bg-slate-50 focus:bg-white border border-transparent focus:border-emerald-500 rounded-full focus:outline-none transition duration-150 shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
            </form>

            {/* Live Search Popup */}
            {searchFocused && liveResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in duration-150">
                <div className="text-[11px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                  Suggested Products
                </div>
                {liveResults.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    onClick={() => setSearchFocused(false)}
                    className="flex items-center gap-3 p-2 hover:bg-emerald-50 rounded-xl transition group"
                  >
                    <div className="relative w-10 h-10 bg-slate-50 rounded-lg p-1 shrink-0 border border-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-700">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono">
                        {item.sku} • {item.priceFormatted}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation Links with Industrial Edge Hover Effect */}
          <nav className="hidden lg:flex items-center space-x-2 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative inline-block group px-3.5 py-1.5 overflow-hidden rounded-md transition-colors"
                >
                  <span
                    className={`relative z-10 block transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute inset-0 border-t-2 border-b-2 border-[#059669] pointer-events-none transition-all duration-300 origin-center transform scale-y-[2] opacity-0 group-hover:scale-y-100 group-hover:opacity-100 ${
                      isActive ? "scale-y-100 opacity-100" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute inset-0 bg-gradient-to-r from-[#151838] to-[#059669] pointer-events-none transition-all duration-300 origin-top transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 ${
                      isActive ? "scale-100 opacity-100" : ""
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Cart & Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-[#059669] transition flex items-center gap-2 border border-slate-200/80 hover:border-emerald-200 cursor-pointer shadow-2xs"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline font-bold text-xs">Cart</span>
              {totalItems > 0 && (
                <span className="bg-[#059669] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full min-w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search medical products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-100 border border-gray-200 rounded-lg focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </form>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 animate-in fade-in duration-150">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 hover:text-[#059669] rounded-lg px-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-[#059669]"
            >
              View Cart ({totalItems} items)
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg"
            >
              Submit RFQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
