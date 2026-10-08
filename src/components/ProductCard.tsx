"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, Star, FileText, Check } from "lucide-react";
import { Product, COMPANY_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  onOpenDetail?: (product: Product) => void;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, openQuoteModal } = useCart();

  // Simulated star rating & reviews for B2B look
  const rating = product.isEquipment ? "5.0" : "4.9";
  const reviews = Math.floor((product.sku.charCodeAt(p_length(product.sku) - 1) * 3) % 45) + 12;

  function p_length(str: string) {
    return str.length;
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100/90 shadow-xs hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative">
      {/* Image Container with Aspect Ratio matching Industrial Edge */}
      <div className="relative aspect-4/3 bg-slate-50/80 group-hover:bg-emerald-50/20 transition-colors duration-300 overflow-hidden p-6 flex items-center justify-center">
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span className="px-2.5 py-1 bg-[#059669] text-white text-[10px] font-bold rounded-md shadow-xs uppercase tracking-wider">
              {product.badge}
            </span>
          )}
          {product.requiresQuote ? (
            <span className="px-2.5 py-1 bg-[#151838] text-emerald-300 text-[10px] font-bold rounded-md shadow-xs uppercase tracking-wider">
              CAPITAL UNIT
            </span>
          ) : (
            <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs uppercase tracking-wider">
              IN STOCK
            </span>
          )}
        </div>

        {/* Product Image */}
        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-out flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Hover Eye Overlay Link */}
        <Link
          href={`/products/${product.id}`}
          className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
        >
          <span className="px-4 py-2 bg-white/95 text-slate-900 text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-[#059669]" />
            <span>View Details</span>
          </span>
        </Link>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Subcategory & Star Rating */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2.5">
            <span className="capitalize font-semibold text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px] border border-emerald-100 truncate max-w-[65%]">
              {product.subcategory || product.category.replace("-", " ")}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{rating}</span>
              <span className="text-gray-400 font-normal">({reviews})</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 hover:text-[#059669] transition duration-150 mb-2">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Compatible Brands preview chips */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.compatibleBrands.slice(0, 3).map((brand) => (
              <span
                key={brand}
                className="text-[9.5px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Industrial Edge Animated Button */}
        <div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg font-black text-slate-900">
              {product.priceFormatted}
            </span>
            {product.price > 0 && (
              <span className="text-xs text-gray-400 line-through">
                PKR {Math.round(product.price * 1.15).toLocaleString()}
              </span>
            )}
            <span className="text-[11px] text-gray-500 ml-auto font-medium">
              {product.isEquipment ? "/System" : "/Unit"}
            </span>
          </div>

          {product.requiresQuote ? (
            <button
              onClick={() => openQuoteModal(product)}
              className="w-full h-10 px-4 rounded-xl font-bold text-xs shadow-xs cursor-pointer transition-all duration-300 bg-[#059669] hover:bg-[#047857] text-white flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Hospital Quote</span>
            </button>
          ) : (
            <button
              onClick={() => addToCart(product, 1)}
              className="cart-animated-btn w-full h-10 px-4 rounded-xl font-bold text-xs shadow-xs cursor-pointer transition-all duration-300 bg-[#151838] hover:bg-[#059669] text-white hover:shadow-emerald-950/20 hover:shadow-md"
            >
              <div className="btn-text-track flex items-center justify-center gap-1.5 font-bold text-xs">
                <ShoppingCart className="w-3.5 h-3.5 opacity-90" />
                <span>Add to Order</span>
              </div>
              <div className="btn-icon-track flex items-center justify-center text-white">
                <ShoppingCart className="w-5 h-5 transform scale-110" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
