"use client";

import React, { useState, useMemo } from "react";
import {
  CATEGORIES,
  PRODUCTS,
  Product,
  COMPANY_INFO,
} from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import {
  Filter,
  Search,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  SlidersHorizontal,
} from "lucide-react";

interface ProductCatalogProps {
  searchQuery?: string;
  selectedBrandFilter?: string;
  onClearBrandFilter?: () => void;
}

export default function ProductCatalog({
  searchQuery = "",
  selectedBrandFilter = "",
  onClearBrandFilter,
}: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [localSearch, setLocalSearch] = useState("");

  const effectiveSearch = searchQuery || localSearch;

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Brand filter
      if (
        selectedBrandFilter &&
        !item.compatibleBrands.some(
          (b) =>
            b.toLowerCase().includes(selectedBrandFilter.toLowerCase()) ||
            selectedBrandFilter.toLowerCase().includes(b.toLowerCase())
        )
      ) {
        return false;
      }

      // Search query filter
      if (effectiveSearch) {
        const query = effectiveSearch.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSku = item.sku.toLowerCase().includes(query);
        const matchesSubcat = item.subcategory?.toLowerCase().includes(query);
        const matchesBrand = item.compatibleBrands.some((b) =>
          b.toLowerCase().includes(query)
        );

        if (
          !matchesName &&
          !matchesDesc &&
          !matchesSku &&
          !matchesSubcat &&
          !matchesBrand
        ) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, selectedBrandFilter, effectiveSearch]);

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              <span>Biomedical Parts, Accessories & Consumables Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Explore Certified Medical Supplies & Equipment
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Compatible accessories for Hamilton, Philips, Dräger, Mindray, Biolight, GE, EDAN, Comen, and Nihon Kohden monitors and ventilators.
            </p>
          </div>

          {/* Quick inline search */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Search parts by name or SKU..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {localSearch && (
              <button
                onClick={() => setLocalSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Indicators */}
        {(selectedBrandFilter || effectiveSearch) && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-white rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Active Filters:
            </span>

            {selectedBrandFilter && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full text-xs font-medium">
                <span>Brand: {selectedBrandFilter}</span>
                {onClearBrandFilter && (
                  <button
                    onClick={onClearBrandFilter}
                    className="hover:text-emerald-950 font-bold"
                  >
                    ×
                  </button>
                )}
              </span>
            )}

            {effectiveSearch && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 border border-slate-300 rounded-full text-xs font-medium">
                <span>Query: "{effectiveSearch}"</span>
                <button
                  onClick={() => setLocalSearch("")}
                  className="hover:text-slate-950 font-bold"
                >
                  ×
                </button>
              </span>
            )}

            <button
              onClick={() => {
                setLocalSearch("");
                if (onClearBrandFilter) onClearBrandFilter();
                setActiveCategory("all");
              }}
              className="text-xs text-red-600 hover:text-red-700 font-semibold ml-auto"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-emerald-300 hover:bg-slate-50"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-emerald-900 text-emerald-200"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
            <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              No matching products found
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-5">
              We stock hundreds of additional cables, sensors, and machine parts at our Karachi warehouse. Please message our biomedical desk directly.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setLocalSearch("");
                  if (onClearBrandFilter) onClearBrandFilter();
                }}
                className="px-4 py-2 bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold hover:bg-slate-300"
              >
                Reset Search
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hello Tech Wiz, I am searching for: ${effectiveSearch || "an unlisted spare part"}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 shadow"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick View / Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
