"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, COMPANY_INFO } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quoteModalProduct: Product | null;
  openQuoteModal: (product: Product) => void;
  closeQuoteModal: () => void;
  serviceModalService: string | null;
  openServiceModal: (serviceTitle?: string) => void;
  closeServiceModal: () => void;
  getWhatsAppOrderUrl: (customerName?: string, hospitalName?: string, address?: string, notes?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quoteModalProduct, setQuoteModalProduct] = useState<Product | null>(null);
  const [serviceModalService, setServiceModalService] = useState<string | null>(null);

  // Load cart from localStorage on client
  useEffect(() => {
    try {
      const saved = localStorage.getItem("techwiz_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("techwiz_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.product.price || 0) * item.quantity,
    0
  );

  const openQuoteModal = (product: Product) => {
    setQuoteModalProduct(product);
  };

  const closeQuoteModal = () => {
    setQuoteModalProduct(null);
  };

  const openServiceModal = (serviceTitle?: string) => {
    setServiceModalService(serviceTitle || "Biomedical Equipment Repair & Maintenance");
  };

  const closeServiceModal = () => {
    setServiceModalService(null);
  };

  const getWhatsAppOrderUrl = (
    customerName?: string,
    hospitalName?: string,
    address?: string,
    notes?: string
  ) => {
    let message = `*NEW ORDER / INQUIRY - TECH WIZ INTERNATIONAL*\n`;
    message += `----------------------------------------\n`;
    if (customerName) message += `*Contact Person:* ${customerName}\n`;
    if (hospitalName) message += `*Hospital/Clinic:* ${hospitalName}\n`;
    if (address) message += `*Delivery Location:* ${address}\n`;
    message += `----------------------------------------\n`;
    message += `*ORDERED ITEMS:*\n`;

    cart.forEach((item, index) => {
      const p = item.product;
      message += `${index + 1}. *${p.name}* (SKU: ${p.sku})\n`;
      message += `   Qty: ${item.quantity} | Price: ${p.price > 0 ? `PKR ${(p.price * item.quantity).toLocaleString()}` : 'Quote Required'}\n`;
    });

    message += `----------------------------------------\n`;
    if (totalPrice > 0) {
      message += `*Estimated Subtotal:* PKR ${totalPrice.toLocaleString()}\n`;
    }
    if (notes) {
      message += `*Additional Notes:* ${notes}\n`;
    }
    message += `\nPlease confirm availability and dispatch schedule.`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        quoteModalProduct,
        openQuoteModal,
        closeQuoteModal,
        serviceModalService,
        openServiceModal,
        closeServiceModal,
        getWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
