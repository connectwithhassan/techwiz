import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import QuoteModal from "@/components/QuoteModal";
import ServiceModal from "@/components/ServiceModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Tech Wiz International | Medical Equipment, Accessories & Heart Lung Machine Repair",
  description:
    "Your Trusted Partner in Healthcare Solutions. High performance Heart Lung Machines (sales & repair), Hamilton/Dräger compatible ventilator accessories, patient monitoring probes, ECG cables, and hospital supplies based in North Karachi, Pakistan.",
  keywords: [
    "Tech Wiz International",
    "Heart Lung Machine Repair Pakistan",
    "Cardiopulmonary Bypass",
    "Hyper Hypothermia Machine",
    "Hamilton Ventilator Circuit C1 C2 C3",
    "Patient Monitoring Accessories Karachi",
    "SpO2 Probes",
    "ECG Cables and Leads",
    "Medical Batteries",
    "Biomedical Engineering Services Karachi",
    "Hospital Dustbins Biohazard",
  ],
  icons: {
    icon: "/flyers/tech-wiz-badge.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
        <CartProvider>
          {children}
          <CartDrawer />
          <QuoteModal />
          <ServiceModal />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
