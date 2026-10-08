"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, Product, COMPANY_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  ShoppingBag,
  MessageCircle,
  FileText,
  PhoneCall,
  Clock,
  ArrowLeft,
  Building,
  Activity,
  Layers,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const { addToCart, openQuoteModal } = useCart();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "compatibility" | "warranty">("specs");

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-24 text-center px-4">
          <div className="max-w-md space-y-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Activity className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-slate-900">
              Medical Product Not Found
            </h1>
            <p className="text-xs text-slate-500">
              The requested biomedical accessory or equipment item does not exist or may have been updated.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Products Catalog</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Tech Wiz International, I am interested in inquiring about:\n\n*Product:* ${product.name}\n*SKU:* ${product.sku}\n*Price:* ${product.priceFormatted}\n*Requested Quantity:* ${qty}\n\nPlease share availability, NTN invoice details, and dispatch timeframe.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumbs Navigation */}
        <div className="bg-white border-b border-slate-200/80 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-emerald-700 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <Link href="/products" className="hover:text-emerald-700 transition">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-emerald-700 transition capitalize"
            >
              {product.category.replace("-", " ")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className="text-slate-900 font-bold truncate max-w-xs">
              {product.name}
            </span>
          </div>
        </div>

        {/* Product Main Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Image Box (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative h-80 sm:h-96 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/80 border border-slate-200 flex items-center justify-center p-6 overflow-hidden">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 text-xs font-black uppercase tracking-wider bg-emerald-700 text-white px-3 py-1 rounded shadow-sm">
                    {product.badge}
                  </span>
                )}

                <span className="absolute top-4 right-4 z-10 text-xs font-mono font-semibold bg-white/90 text-slate-700 px-2.5 py-1 rounded border border-slate-200 shadow-xs">
                  SKU: {product.sku}
                </span>

                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="w-full mt-6 grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-[11px] font-bold text-slate-800">Genuine Spares</span>
                  <span className="text-[10px] text-slate-500">Signal Tested</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-slate-200 px-1">
                  <Truck className="w-5 h-5 text-emerald-600" />
                  <span className="text-[11px] font-bold text-slate-800">Fast Dispatch</span>
                  <span className="text-[10px] text-slate-500">Karachi & Nationwide</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-5 h-5 text-emerald-600" />
                  <span className="text-[11px] font-bold text-slate-800">Tech Support</span>
                  <span className="text-[10px] text-slate-500">Perfusion Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Details & Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Status */}
                <div className="flex items-center gap-3 text-xs font-bold mb-2">
                  <span className="text-emerald-700 uppercase tracking-wider text-[11px]">
                    {product.subcategory || product.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span
                    className={`inline-flex items-center gap-1.5 ${
                      product.stockStatus === "In Stock"
                        ? "text-emerald-600"
                        : "text-amber-600"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        product.stockStatus === "In Stock"
                          ? "bg-emerald-500 animate-pulse"
                          : "bg-amber-500"
                      }`}
                    ></span>
                    {product.stockStatus}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-3xl font-black text-emerald-700">
                    {product.priceFormatted}
                  </span>
                  {product.price > 0 && (
                    <span className="text-xs text-slate-500 font-medium">
                      (Institutional & GST Invoice Available)
                    </span>
                  )}
                </div>

                {/* Short Summary */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Key Bullet Features */}
                <div className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Features & Clinical Advantages
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compatible Brands Matrix */}
                {product.compatibleBrands && product.compatibleBrands.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Verified Brand Compatibility
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.compatibleBrands.map((b) => (
                        <span
                          key={b}
                          className="text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1 rounded-full"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                {!product.requiresQuote ? (
                  <>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50 w-full sm:w-auto">
                        <button
                          onClick={() => setQty(Math.max(1, qty - 1))}
                          className="px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
                        >
                          -
                        </button>
                        <span className="px-5 py-3 text-sm font-bold text-slate-900 text-center flex-1 sm:flex-initial">
                          {qty}
                        </span>
                        <button
                          onClick={() => setQty(qty + 1)}
                          className="px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
                        >
                          +
                        </button>
                      </div>

                      {/* Add to Cart button */}
                      <button
                        onClick={() => addToCart(product, qty)}
                        className="flex-1 w-full py-3.5 px-6 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add {qty} to Procurement Cart</span>
                      </button>
                    </div>

                    <button
                      onClick={handleWhatsApp}
                      className="w-full py-3 px-6 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Order Directly via WhatsApp ({COMPANY_INFO.phone})</span>
                    </button>
                  </>
                ) : (
                  <div className="space-y-2.5">
                    <button
                      onClick={() => openQuoteModal(product)}
                      className="w-full py-4 px-6 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25"
                    >
                      <FileText className="w-5 h-5" />
                      <span>Request Institutional Quotation & Technical Brochure</span>
                    </button>

                    <button
                      onClick={handleWhatsApp}
                      className="w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Consult with Cardiac Perfusion Specialist ({COMPANY_INFO.phone})</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Deep Tabs Section */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="flex border-b border-slate-200 gap-6 text-xs sm:text-sm font-bold pb-3">
              <button
                onClick={() => setActiveTab("specs")}
                className={`pb-3 border-b-2 transition ${
                  activeTab === "specs"
                    ? "border-emerald-600 text-emerald-700"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Technical Specifications
              </button>
              <button
                onClick={() => setActiveTab("compatibility")}
                className={`pb-3 border-b-2 transition ${
                  activeTab === "compatibility"
                    ? "border-emerald-600 text-emerald-700"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Supported Brands & Models
              </button>
              <button
                onClick={() => setActiveTab("warranty")}
                className={`pb-3 border-b-2 transition ${
                  activeTab === "warranty"
                    ? "border-emerald-600 text-emerald-700"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Karachi Delivery & Warranty Terms
              </button>
            </div>

            <div className="pt-6">
              {activeTab === "specs" && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    Engineered Parameter Specifications
                  </h4>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                    {Object.entries(product.specifications).map(([k, v]) => (
                      <div key={k} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <dt className="text-slate-400 font-semibold text-[11px]">{k}</dt>
                        <dd className="text-slate-900 font-bold mt-1 text-sm">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {activeTab === "compatibility" && (
                <div className="space-y-4 text-xs">
                  <h4 className="text-sm font-bold text-slate-900">
                    Verified Multi-Vendor Compatibility
                  </h4>
                  <p className="text-slate-600">
                    This component or machinery has been verified to conform with physical connector pinouts, electrical resistance standards, and signal fidelity for the following systems:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {product.compatibleBrands.map((b) => (
                      <div
                        key={b}
                        className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl font-bold text-emerald-950 flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "warranty" && (
                <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                  <h4 className="text-sm font-bold text-slate-900">
                    Procurement & Guarantee Policies
                  </h4>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <strong>Karachi Orders:</strong> Same-day urgent delivery or self-pickup from our Head Office at Office 03, A-728, Sector 11-A, North Karachi.
                    </li>
                    <li>
                      <strong>Nationwide Shipping:</strong> Dispatched via insured express couriers (TCS, Leopards, Daewoo) to Lahore, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, Faisalabad, and all cities in Pakistan.
                    </li>
                    <li>
                      <strong>Pre-Dispatch Quality Assurance:</strong> Every cable, sensor, and battery module is tested against calibrated patient simulator monitors prior to packing.
                    </li>
                    <li>
                      <strong>Institutional Billing:</strong> Official tax invoice with NTN and STRN provided for all hospitals and medical center accounts.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Related Products Showcase */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Complementary Medical Supplies
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Frequently procured together by intensive care units and biomedical teams.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>View All</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
