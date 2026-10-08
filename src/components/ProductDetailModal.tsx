"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ShoppingBag, MessageCircle, FileText, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Product, COMPANY_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { addToCart, openQuoteModal } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Tech Wiz International, I am inquiring regarding:\n\n*Product:* ${product.name}\n*SKU:* ${product.sku}\n*Price:* ${product.priceFormatted}\n*Requested Quantity:* ${qty}\n\nPlease share commercial details and delivery timeframe.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 max-h-[85vh] overflow-y-auto">
          {/* Left: Product Image */}
          <div className="bg-slate-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 relative min-h-[300px]">
            {product.badge && (
              <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider bg-emerald-700 text-white px-3 py-1 rounded shadow-sm">
                {product.badge}
              </span>
            )}
            <div className="relative w-full h-72">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-slate-500 bg-slate-200/60 px-3 py-1 rounded-full">
                SKU: {product.sku}
              </span>
            </div>
          </div>

          {/* Right: Details & Action */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-1">
                <span>{product.subcategory || product.category}</span>
                <span>•</span>
                <span className="text-slate-500">{product.stockStatus}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                {product.name}
              </h2>

              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-black text-emerald-700">
                  {product.priceFormatted}
                </span>
                {product.price > 0 && (
                  <span className="text-xs text-slate-500 font-medium">
                    (Excl. GST / Standard Delivery)
                  </span>
                )}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Key Specifications & Features
                </h4>
                <ul className="space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatible Brands */}
              {product.compatibleBrands && product.compatibleBrands.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Verified Brand Compatibility
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.compatibleBrands.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 px-2.5 py-0.5 rounded-full"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs Table */}
              {product.specifications && (
                <div className="mt-5 border-t border-slate-100 pt-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Technical Specifications
                  </h4>
                  <dl className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="bg-slate-50 p-2 rounded">
                        <dt className="text-slate-400 font-medium text-[11px]">{key}</dt>
                        <dd className="text-slate-800 font-semibold mt-0.5">{val}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="border-t border-slate-200 pt-4 space-y-3">
              {!product.requiresQuote ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                      <button
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        className="px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 text-sm font-bold text-slate-900">
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(qty + 1)}
                        className="px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product, qty);
                        onClose();
                      }}
                      className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart ({qty})</span>
                    </button>
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Inquire / Instant Order via WhatsApp</span>
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onClose();
                      openQuoteModal(product);
                    }}
                    className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Official Quotation & Brochure</span>
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Discuss with Perfusion & Biomedical Specialist</span>
                  </button>
                </div>
              )}

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-slate-500 text-center">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Genuine & Certified</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span>Karachi & Nationwide</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-emerald-600" />
                  <span>Replacement Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
