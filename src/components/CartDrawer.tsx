"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShoppingBag,
  Building,
  User,
  MapPin,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { COMPANY_INFO } from "@/data/products";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    getWhatsAppOrderUrl,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppOrderUrl(customerName, hospitalName, address, notes);
    setOrderSubmitted(true);
    setTimeout(() => {
      window.open(url, "_blank");
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900">
                Your Procurement Cart
              </h2>
              <p className="text-xs text-slate-500">
                {totalItems} {totalItems === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsCartOpen(false);
              setOrderSubmitted(false);
              setShowCheckoutForm(false);
            }}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {orderSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Order Sent to Tech Wiz Dispatch!
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your inquiry has been transferred to our WhatsApp procurement desk at{" "}
                <span className="font-semibold text-emerald-700">
                  {COMPANY_INFO.phone}
                </span>
                . Our biomedical team is confirming your stock reservation.
              </p>
              <button
                onClick={() => {
                  clearCart();
                  setOrderSubmitted(false);
                  setShowCheckoutForm(false);
                  setIsCartOpen(false);
                }}
                className="mt-4 px-6 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition"
              >
                Close & Return to Catalog
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                Your cart is empty
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our ventilator circuits, SpO2 sensors, ECG accessories, and biomedical equipment.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 px-5 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition"
              >
                Browse Medical Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex gap-3 items-center"
                  >
                    <div className="relative w-16 h-16 bg-white rounded-xl border border-slate-200 shrink-0 p-1">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono">
                        SKU: {item.product.sku}
                      </p>
                      <p className="text-xs font-black text-emerald-700 mt-1">
                        {item.product.price > 0
                          ? `PKR ${(item.product.price * item.quantity).toLocaleString()}`
                          : "Quote Required"}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-slate-400 hover:text-red-600 transition"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden text-xs">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-2 py-0.5 hover:bg-slate-100 text-slate-700 font-bold"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 py-0.5 font-bold text-slate-900 text-xs">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-2 py-0.5 hover:bg-slate-100 text-slate-700 font-bold"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery info */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/80 text-xs text-emerald-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <FileCheck className="w-4 h-4 text-emerald-700" />
                  <span>Hospital & Clinic Procurement Dispatch</span>
                </div>
                <p className="text-[11px] text-emerald-800">
                  Same-day dispatch available in Karachi. Safe delivery across Pakistan via certified logistics with biomedical invoice.
                </p>
              </div>

              {/* Checkout Form Modal */}
              {showCheckoutForm && (
                <form
                  onSubmit={handleCheckout}
                  className="bg-slate-100 p-4 rounded-2xl border border-slate-300 space-y-3 mt-4 text-xs"
                >
                  <h4 className="font-bold text-slate-900 text-sm">
                    Hospital / Buyer Information
                  </h4>
                  <div>
                    <label className="text-slate-700 font-medium block mb-1">
                      Full Name / Incharge Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Salman / Engr. Tariq"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 font-medium block mb-1">
                      Hospital / Clinic / Organization Name
                    </label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. National Institute of CVD / City Clinic"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 font-medium block mb-1">
                      Delivery Address & City *
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Karachi / Lahore / Islamabad Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 font-medium block mb-1">
                      Purchase Notes / GST Number (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Special instructions or pin/clip type specifications..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 text-xs sm:text-sm transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Order to Tech Wiz WhatsApp ({COMPANY_INFO.phone})</span>
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Footer actions */}
        {cart.length > 0 && !orderSubmitted && (
          <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Estimate
              </span>
              <div className="text-right">
                <span className="text-xl font-black text-slate-900">
                  {totalPrice > 0
                    ? `PKR ${totalPrice.toLocaleString()}`
                    : "Quotation Items"}
                </span>
                <p className="text-[10px] text-slate-400">
                  Official invoice with NTN/STRN issued upon order
                </p>
              </div>
            </div>

            {!showCheckoutForm ? (
              <div className="space-y-2">
                <button
                  onClick={() => setShowCheckoutForm(true)}
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-md shadow-emerald-800/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Proceed to Instant WhatsApp Checkout</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const url = getWhatsAppOrderUrl();
                      window.open(url, "_blank");
                    }}
                    className="flex-1 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-xl text-xs font-semibold transition"
                  >
                    Quick WhatsApp Send
                  </button>
                  <button
                    onClick={clearCart}
                    className="px-3 py-2 text-slate-400 hover:text-red-600 text-xs transition"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowCheckoutForm(false)}
                className="w-full py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-semibold transition"
              >
                Back to Cart Items
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
