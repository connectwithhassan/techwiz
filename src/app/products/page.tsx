"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import {
  CATEGORIES,
  PRODUCTS,
  Product,
  COMPANY_INFO,
} from "@/data/products";
import {
  SlidersHorizontal,
  Search,
  Filter,
  X,
  ChevronRight,
  LayoutGrid,
  List,
  Check,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  ArrowUpDown,
  Building,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialBrand = searchParams.get("brand") || "";
  const initialQuery = searchParams.get("q") || "";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "name">("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const { addToCart, openQuoteModal } = useCart();

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Brand filter
      if (
        selectedBrand &&
        !item.compatibleBrands.some(
          (b) =>
            b.toLowerCase().includes(selectedBrand.toLowerCase()) ||
            selectedBrand.toLowerCase().includes(b.toLowerCase())
        )
      ) {
        return false;
      }

      // Stock filter
      if (onlyInStock && item.stockStatus !== "In Stock") {
        return false;
      }

      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSku = item.sku.toLowerCase().includes(query);
        const matchesSubcat = item.subcategory?.toLowerCase().includes(query);
        const matchesBrand = item.compatibleBrands.some((b) =>
          b.toLowerCase().includes(query)
        );

        if (!matchesName && !matchesDesc && !matchesSku && !matchesSubcat && !matchesBrand) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    return list.sort((a, b) => {
      if (sortBy === "price-asc") return (a.price || 0) - (b.price || 0);
      if (sortBy === "price-desc") return (b.price || 0) - (a.price || 0);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0; // featured default
    });
  }, [activeCategory, selectedBrand, searchQuery, onlyInStock, sortBy]);

  const allBrandNames = useMemo(() => {
    const brandsSet = new Set<string>();
    PRODUCTS.forEach((p) => p.compatibleBrands.forEach((b) => brandsSet.add(b)));
    return Array.from(brandsSet).sort();
  }, []);

  const clearAllFilters = () => {
    setActiveCategory("all");
    setSelectedBrand("");
    setSearchQuery("");
    setOnlyInStock(false);
  };

  const hasActiveFilters = activeCategory !== "all" || selectedBrand !== "" || searchQuery !== "" || onlyInStock;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header / Breadcrumbs */}
      <div className="bg-slate-900 text-white py-8 sm:py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <Link href="/" className="hover:text-emerald-400 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-emerald-400 font-semibold">Products Catalog</span>
            {activeCategory !== "all" && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-white capitalize">
                  {activeCategory.replace("-", " ")}
                </span>
              </>
            )}
          </nav>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Medical Equipment, Parts & Accessories Catalog
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl">
            Certified biomedical accessories, ventilator breathing circuits, monitoring sensors, and hospital plastics compatible with leading global brands.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Left Filter Sidebar (1 col) */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs sticky top-28 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-black text-slate-900 text-sm flex items-center gap-2">
                  <Filter className="w-4 h-4 text-emerald-600" />
                  Filter Catalog
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-red-600 hover:text-red-700 font-bold"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Categories
                </label>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => {
                    const active = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition ${
                          active
                            ? "bg-emerald-700 text-white shadow-xs"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="truncate">{cat.name}</span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full ${
                            active
                              ? "bg-emerald-900 text-emerald-200"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brand Compatibility Filter */}
              <div className="pt-4 border-t border-slate-100">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Compatible Brand
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {allBrandNames.map((brand) => {
                    const active = selectedBrand === brand;
                    return (
                      <button
                        key={brand}
                        onClick={() =>
                          setSelectedBrand(active ? "" : brand)
                        }
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition ${
                          active
                            ? "bg-emerald-700 text-white border-emerald-700"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300"
                        }`}
                      >
                        {brand}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* In-Stock Filter Toggle */}
              <div className="pt-4 border-t border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <span>Show Only In-Stock Items</span>
                </label>
              </div>

              {/* Quick Contact Help */}
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-2">
                <span className="font-bold block">Need an Unlisted Part?</span>
                <p className="text-[11px] text-emerald-800 leading-snug">
                  Our Karachi warehouse maintains specialized connectors, sensor probes, and motherboard chips.
                </p>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    "Hello Tech Wiz, I need help finding a specific biomedical part."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-bold text-emerald-700 hover:underline text-[11px]"
                >
                  Contact Warehouse WhatsApp →
                </a>
              </div>
            </div>
          </aside>

          {/* Main Products Grid & Top Bar (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Top Toolbar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Search input in products */}
              <div className="w-full sm:w-72 relative">
                <input
                  type="text"
                  placeholder="Filter within catalog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="lg:hidden px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5"
                >
                  <Filter className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Filters</span>
                </button>

                {/* Sort selector */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 hidden sm:inline">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  >
                    <option value="featured">Featured / Best Sellers</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Product Name (A-Z)</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition ${
                      viewMode === "grid"
                        ? "bg-emerald-700 text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition ${
                      viewMode === "list"
                        ? "bg-emerald-700 text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filter Drawer */}
            {mobileFilterOpen && (
              <div className="lg:hidden bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">Filters</span>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Categories mobile */}
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-2">
                    Category
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setMobileFilterOpen(false);
                        }}
                        className={`text-left p-2 rounded-lg text-xs font-semibold ${
                          activeCategory === cat.id
                            ? "bg-emerald-700 text-white"
                            : "bg-slate-50 text-slate-700"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands mobile */}
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-2">
                    Brand
                  </label>
                  <div className="flex flex-wrap gap-1 max-h-36 overflow-y-auto">
                    {allBrandNames.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => {
                          setSelectedBrand(selectedBrand === brand ? "" : brand);
                          setMobileFilterOpen(false);
                        }}
                        className={`text-xs px-2 py-1 rounded-md border ${
                          selectedBrand === brand
                            ? "bg-emerald-700 text-white border-emerald-700"
                            : "bg-slate-50 text-slate-700 border-slate-200"
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Active Filter Badges */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold">Active:</span>
                {activeCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full text-xs font-semibold">
                    Category: {activeCategory.replace("-", " ")}
                    <button
                      onClick={() => setActiveCategory("all")}
                      className="hover:text-emerald-950 font-bold ml-1"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedBrand && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full text-xs font-semibold">
                    Brand: {selectedBrand}
                    <button
                      onClick={() => setSelectedBrand("")}
                      className="hover:text-emerald-950 font-bold ml-1"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-800 border border-slate-300 rounded-full text-xs font-semibold">
                    Query: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery("")}
                      className="hover:text-slate-950 font-bold ml-1"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-bold text-red-600 hover:text-red-700 ml-auto"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Products count info */}
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>
                Showing <strong className="text-slate-900">{filteredProducts.length}</strong> medical supplies & equipment
              </span>
              <span>Karachi Head Office Stock</span>
            </div>

            {/* Products Display (Grid vs List) */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
                <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  No matching items found
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your search criteria or contact our biomedical department directly for special order components.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={clearAllFilters}
                    className="px-4 py-2 bg-slate-200 text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-300"
                  >
                    Reset Filters
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello Tech Wiz, I could not find this product in your catalog: ${searchQuery}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-emerald-400 transition flex flex-col sm:flex-row items-center gap-5"
                  >
                    <Link
                      href={`/products/${p.id}`}
                      className="relative w-36 h-36 bg-slate-50 rounded-xl border border-slate-100 shrink-0 p-2 flex items-center justify-center"
                    >
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain"
                      />
                    </Link>

                    <div className="flex-1 min-w-0 space-y-1.5 text-center sm:text-left">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
                        <span className="font-bold text-emerald-700 uppercase tracking-wider text-[10px]">
                          {p.subcategory || p.category}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[11px] font-mono text-slate-500">
                          SKU: {p.sku}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span
                          className={`text-[11px] font-bold ${
                            p.stockStatus === "In Stock"
                              ? "text-emerald-600"
                              : "text-amber-600"
                          }`}
                        >
                          {p.stockStatus}
                        </span>
                      </div>

                      <Link href={`/products/${p.id}`} className="block">
                        <h3 className="font-bold text-slate-900 text-base hover:text-emerald-700 transition">
                          {p.name}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 line-clamp-2">
                        {p.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1 justify-center sm:justify-start">
                        {p.compatibleBrands.slice(0, 4).map((b) => (
                          <span
                            key={b}
                            className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="sm:border-l sm:border-slate-100 sm:pl-5 shrink-0 flex flex-col items-center sm:items-end justify-between gap-3 w-full sm:w-44">
                      <div className="text-center sm:text-right">
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">
                          Price
                        </span>
                        <span className="text-lg font-black text-slate-900">
                          {p.priceFormatted}
                        </span>
                      </div>

                      <div className="w-full space-y-1.5">
                        <Link
                          href={`/products/${p.id}`}
                          className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold text-center block transition"
                        >
                          View Details
                        </Link>
                        {!p.requiresQuote ? (
                          <button
                            onClick={() => addToCart(p, 1)}
                            className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => openQuoteModal(p)}
                            className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition text-center shadow-xs"
                          >
                            Request Quote
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="py-24 text-center text-slate-500 text-sm">
              Loading Products Catalog...
            </div>
          }
        >
          <ProductsContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
