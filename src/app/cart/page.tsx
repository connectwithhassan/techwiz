"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { COMPANY_INFO } from "@/data/products";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Building,
  User,
  MapPin,
  FileCheck,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Truck,
  FileText,
} from "lucide-react";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    getWhatsAppOrderUrl,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [department, setDepartment] = useState("Intensive Care Unit (ICU)");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [orderSent, setOrderSent] = useState(false);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSent(true);

    const fullNotes = `Department: ${department}${notes ? ` | Notes: ${notes}` : ""}`;
    const url = getWhatsAppOrderUrl(customerName, hospitalName, address, fullNotes);

    setTimeout(() => {
      window.open(url, "_blank");
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Hospital Procurement Cart
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Review your biomedical accessories and generate a commercial quotation or WhatsApp order.
              </p>
            </div>

            <Link
              href="/products"
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {orderSent ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-xl mx-auto space-y-4 shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Order Generated Successfully!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Your procurement invoice has been transmitted to Tech Wiz International's dispatch office on WhatsApp (
                <span className="font-bold text-emerald-700">{COMPANY_INFO.phone}</span>
                ). Our sales desk is confirming your items and preparing billing documents.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    clearCart();
                    setOrderSent(false);
                  }}
                  className="px-6 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition"
                >
                  Clear Cart & New Order
                </button>
                <Link
                  href="/products"
                  className="px-6 py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-200 transition"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center max-w-lg mx-auto space-y-4 shadow-sm">
              <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Your Procurement Cart is Empty
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Explore our catalog for ventilator circuits, ECG trunk cables, SpO2 probes, medical batteries, and hospital plastic items.
              </p>
              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-emerald-800 shadow-md transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Browse Products Catalog</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Cart Items (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">
                    Selected Items ({totalItems})
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4"
                    >
                      <Link
                        href={`/products/${item.product.id}`}
                        className="relative w-20 h-20 bg-white rounded-xl border border-slate-200 shrink-0 p-1 flex items-center justify-center"
                      >
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain"
                        />
                      </Link>

                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <Link href={`/products/${item.product.id}`}>
                          <h3 className="font-bold text-slate-900 text-xs sm:text-sm hover:text-emerald-700 transition truncate">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-[11px] font-mono text-slate-500">
                          SKU: {item.product.sku}
                        </p>
                        <p className="text-xs font-black text-emerald-700 mt-1">
                          {item.product.price > 0
                            ? `PKR ${(item.product.price * item.quantity).toLocaleString()}`
                            : "Quote Required"}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden text-xs">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="px-3 py-1.5 hover:bg-slate-100 text-slate-700 font-bold"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 py-1.5 font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="px-3 py-1.5 hover:bg-slate-100 text-slate-700 font-bold"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-slate-400 hover:text-red-600 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">
                      Karachi & Nationwide Dispatch
                    </span>
                    <p className="text-[11px] text-emerald-800 mt-0.5">
                      Delivery to all major hospital complexes in Karachi within 24 hours. Safe insured courier dispatch across Pakistan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hospital Details & WhatsApp Order (5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h2 className="text-lg font-black text-slate-900">
                    Order Summary & Billing
                  </h2>
                  <p className="text-xs text-slate-500">
                    Fill in your hospital details to generate the official WhatsApp order.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Total Quantity</span>
                    <span className="font-bold text-slate-900">{totalItems} units</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Estimated Subtotal</span>
                    <span className="font-black text-slate-900 text-sm">
                      {totalPrice > 0
                        ? `PKR ${totalPrice.toLocaleString()}`
                        : "Quote On Request"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Tax / GST</span>
                    <span className="text-[11px] text-slate-500">
                      Calculated on commercial invoice
                    </span>
                  </div>
                </div>

                {/* Hospital Buyer Details Form */}
                <form onSubmit={handleOrderSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="text-slate-700 font-semibold block mb-1">
                      Incharge / Doctor Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Tariq / Engr. Bilal"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 font-semibold block mb-1">
                      Hospital / Institution Name *
                    </label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aga Khan / NICVD / Civil Hospital"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-700 font-semibold block mb-1">
                        Department
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs text-slate-800"
                      >
                        <option value="Intensive Care Unit (ICU)">ICU / CCU</option>
                        <option value="Operation Theater (OT)">Operation Theater (OT)</option>
                        <option value="Cardiopulmonary / Perfusion">Cardiopulmonary Bypass</option>
                        <option value="Biomedical Engineering">Biomedical Engineering</option>
                        <option value="Central Procurement">Central Procurement</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-700 font-semibold block mb-1">
                        Delivery City *
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Karachi / Lahore / Islamabad"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 font-semibold block mb-1">
                      Purchase Order Notes / Instructions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specify pin configurations, delivery urgency, or NTN details..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25 text-xs sm:text-sm transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Submit Order to Tech Wiz WhatsApp ({COMPANY_INFO.phone})</span>
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-2">
                      Head Office: Sector 11-A, North Karachi • Immediate Order Confirmation
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
