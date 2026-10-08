export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number; // in PKR or USD equivalent for local market
  priceFormatted: string;
  isEquipment?: boolean; // For high-end machinery requiring quote / inquiry
  requiresQuote?: boolean;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  compatibleBrands: string[];
  stockStatus: "In Stock" | "Available on Order" | "Ready for Dispatch";
  image: string;
  badge?: string;
  sku: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  coverage: string[];
  supportedEquipment: string[];
  icon: string;
}

export const COMPANY_INFO = {
  name: "Tech Wiz International",
  shortName: "TechWiz",
  tagline: "Your Trusted Partner in Biomedical & Healthcare Solutions",
  subtitle: "Medical Equipment | Accessories | Consumables | Biomedical Engineering & Repair Services",
  phone: "+92-325-2719192",
  phoneRaw: "+923252719192",
  whatsapp: "+923252719192",
  whatsappUrl: "https://wa.me/923252719192",
  email: "Techwiz.int@outlook.com",
  address: "Office 03, A-728, Sector 11-A, North Karachi, Karachi, Pakistan",
  city: "Karachi, Pakistan (Head Office)",
  workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM (Emergency Support 24/7)",
  stats: [
    { label: "Partner Hospitals & Clinics", value: "250+" },
    { label: "Biomedical Parts & SKUs", value: "1,200+" },
    { label: "Critical Care Systems Serviced", value: "500+" },
    { label: "Uptime & Reliability Rate", value: "99.4%" },
  ],
  compatibleBrands: [
    { name: "Hamilton Medical", tag: "Ventilators C1/C2/C3" },
    { name: "Philips Healthcare", tag: "Monitors, Defibrillators" },
    { name: "Dräger", tag: "Anesthesia & Ventilation" },
    { name: "Mindray", tag: "Patient Monitoring & Ultrasound" },
    { name: "GE Healthcare", tag: "Critical Care Monitoring" },
    { name: "Biolight", tag: "Multipara Monitors" },
    { name: "EDAN", tag: "Diagnostics & Monitoring" },
    { name: "Comen", tag: "ICU & NICU Monitoring" },
    { name: "Nihon Kohden (NK)", tag: "ECG & Neuro-monitoring" },
    { name: "Zoll Medical", tag: "Defibrillators & Resuscitation" },
    { name: "Maquet / Getinge", tag: "Heart Lung & Perfusion" },
  ]
};

export const CATEGORIES = [
  {
    id: "all",
    name: "All Products",
    count: 24,
    description: "Browse our complete medical equipment, accessories, and hospital supplies.",
  },
  {
    id: "ventilator-accessories",
    name: "Ventilator Accessories",
    count: 6,
    description: "Breathing circuits, HME filters, flow sensors, and connectors compatible with Hamilton, Dräger, Philips.",
  },
  {
    id: "patient-monitoring",
    name: "Patient Monitoring",
    count: 5,
    description: "SpO2 probes, ECG trunk cables, NIBP cuffs, and temperature probes for all multi-parameter monitors.",
  },
  {
    id: "ecg-accessories",
    name: "ECG Accessories",
    count: 4,
    description: "ECG cables, lead wires, reusable suction electrodes, clamp electrodes, and thermal recording papers.",
  },
  {
    id: "medical-batteries",
    name: "Medical Batteries",
    count: 3,
    description: "Rechargeable batteries for Philips, Zoll, Mindray patient monitors, ECG machines, and defibrillators.",
  },
  {
    id: "specialized-equipment",
    name: "Machinery & Equipment",
    count: 3,
    description: "Heart Lung Machines (Cardiopulmonary Bypass) & Hyper/Hypothermia Temperature Management systems for sale.",
  },
  {
    id: "hospital-plastics-consumables",
    name: "Hospital Plastics & Consumables",
    count: 3,
    description: "Biohazard color-coded dustbins, bedpans, kidney trays, sterile bowls, and surgical containers.",
  },
];

export const PRODUCTS: Product[] = [
  // Specialized Critical Care Equipment
  {
    id: "hlm-perfusion-system",
    name: "Heart Lung Machine (Cardiopulmonary Bypass System)",
    category: "specialized-equipment",
    subcategory: "Perfusion & Cardiac Surgery",
    price: 0,
    priceFormatted: "Request Quotation",
    isEquipment: true,
    requiresQuote: true,
    shortDescription: "Advanced cardiopulmonary bypass console with modular roller pumps, cardioplegia delivery, and precision safety monitors.",
    description: "Tech Wiz International supplies premium new and certified pre-owned Heart Lung Machines engineered for cardiac surgical teams. Each console undergoes rigorous biomedical testing, sensor calibration, and perfusion safety verification. Backed by installation assistance, operator training, and comprehensive annual maintenance contracts.",
    features: [
      "Modular 4 to 5 roller pump configurations with arterial & suction control",
      "Integrated electronic arterial line pressure & bubble detection sensors",
      "Cardioplegia delivery system with precise thermal regulation",
      "Battery backup with uninterrupted dual power supply",
      "Certified biomedical inspection report with calibration certificate",
      "Comprehensive on-site installation, commissioning, and training in Pakistan"
    ],
    specifications: {
      "Application": "Cardiac Surgery & Extracorporeal Support",
      "Condition": "Brand New & Certified Pre-Owned Options Available",
      "Pumps": "4 or 5 Head Precision Peristaltic Roller Pumps",
      "Safety Features": "Air Bubble Detector, Level Sensor, Cardioplegia Timer",
      "Compatibility": "Maquet, Stockert S3/S5, Sorin & Medtronic standards",
      "Warranty": "1 Year Comprehensive Warranty + AMC option"
    },
    compatibleBrands: ["Maquet / Getinge", "Stockert / Sorin", "Medtronic", "Terumo"],
    stockStatus: "Ready for Dispatch",
    badge: "Cardiac Surgery Critical",
    image: "/flyers/heart-lung-machine-banner.jpeg",
    sku: "TWI-EQ-HLM01"
  },
  {
    id: "hyper-hypothermia-machine",
    name: "Hyper / Hypothermia Machine (Temperature Management)",
    category: "specialized-equipment",
    subcategory: "Temperature Management",
    price: 0,
    priceFormatted: "Request Quotation",
    isEquipment: true,
    requiresQuote: true,
    shortDescription: "Precision dual-reservoir thermal regulation system for adult and pediatric cardiopulmonary and neuro-critical hypothermia.",
    description: "Designed for reliable patient temperature management during cardiac bypass surgeries and critical care hypothermia protocols. Delivers ultra-stable water bath heating and cooling with micro-controlled thermal feedback loops to prevent overshoot.",
    features: [
      "Dual independent water reservoirs for fast patient and cardioplegia thermal switching",
      "Accurate digital temperature display with ±0.1°C precision",
      "Integrated ice-water cooling mechanism and high-flow circulatory pumps",
      "Safety cutoff alarms for over-temperature, under-temperature, and water level",
      "Rugged hospital-grade stainless steel casing with smooth omnidirectional castors"
    ],
    specifications: {
      "Temperature Range": "3.0°C to 42.0°C",
      "Display Resolution": "0.1°C Digital LED / Touch Interface",
      "Reservoir Capacity": "Dual chamber (Patient & Myocardial)",
      "Safety Systems": "Triple sensor thermal cutoff, audible & visual alarm",
      "Power Supply": "220V - 240V AC, 50Hz"
    },
    compatibleBrands: ["Maquet HCU", "Stockert 3T", "Cincinnati Sub-Zero", "Blanketrol"],
    stockStatus: "Ready for Dispatch",
    badge: "Critical Care",
    image: "/flyers/heart-lung-repair-sales.jpeg",
    sku: "TWI-EQ-HYP02"
  },
  {
    id: "multi-parameter-icu-monitor",
    name: "Multi-Parameter Patient Monitor (12.1-inch High-Resolution)",
    category: "specialized-equipment",
    subcategory: "ICU Monitoring",
    price: 185000,
    priceFormatted: "PKR 185,000",
    isEquipment: true,
    requiresQuote: false,
    shortDescription: "Complete ICU & Operation Theater multi-parameter monitor with ECG, SpO2, NIBP, Dual Temp, and Respiration.",
    description: "Reliable patient monitor engineered for ICU, CCU, Emergency, and recovery wards. Features crisp colored waveform display, arrhythmia analysis, 120-hour trend review, and seamless networking capabilities.",
    features: [
      "Standard 5-lead ECG, SpO2, NIBP, Dual Temperature, Respiration, PR",
      "Optional EtCO2, 2-IBP, and thermal recorder expansion modules",
      "Rechargeable high-capacity lithium battery for uninterrupted ambulance/ward transfer",
      "Audio/visual alarms with customized alarm limit configurations"
    ],
    specifications: {
      "Screen": "12.1 inch Anti-glare Color TFT Display",
      "Parameters": "ECG, HR, RESP, NIBP, SpO2, TEMP, Pulse Rate",
      "Battery Life": "Up to 4 hours continuous monitoring",
      "Network": "Central Monitoring System (CMS) ready"
    },
    compatibleBrands: ["Philips", "Mindray", "Biolight", "EDAN", "Comen", "GE"],
    stockStatus: "In Stock",
    badge: "Best Seller",
    image: "/flyers/biomedical-equipment-overview.jpeg",
    sku: "TWI-EQ-MON03"
  },

  // Ventilator Accessories
  {
    id: "hamilton-ventilator-breathing-circuit-adult",
    name: "Hamilton Compatible Ventilator Breathing Circuit (Adult / Pediatric)",
    category: "ventilator-accessories",
    subcategory: "Breathing Circuits",
    price: 3200,
    priceFormatted: "PKR 3,200",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Premium dual-limb corrugated reusable & disposable breathing circuits designed for Hamilton C1, C2, and C3 ventilators.",
    description: "Manufactured from high-grade medical polymer with low compliance and resistance. Specifically tuned for Hamilton C1, C2, C3, and Galileo platforms, ensuring accurate volume and pressure delivery.",
    features: [
      "Low compliance tubing prevents volume loss in critical ventilation",
      "Standard 22mm & 15mm leak-free push-fit connections",
      "Integrated dual water traps for moisture drainage",
      "Latex-free and biocompatible medical grade materials"
    ],
    specifications: {
      "Compatibility": "Hamilton C1, C2, C3, T1, Dräger Evita, Mindray SV300",
      "Patient Type": "Adult / Pediatric",
      "Tubing Length": "1.6m / 1.8m standard",
      "Material": "Medical Grade EVA / Polypropylene"
    },
    compatibleBrands: ["Hamilton Medical", "Dräger", "Philips", "Mindray"],
    stockStatus: "In Stock",
    badge: "Hamilton Ready",
    image: "/flyers/ventilator-accessories-flyer.jpeg",
    sku: "TWI-VENT-CIRC01"
  },
  {
    id: "neonatal-ventilator-circuit-heated-wire",
    name: "Neonatal Dual Heated Wire Ventilator Breathing Circuit",
    category: "ventilator-accessories",
    subcategory: "Breathing Circuits",
    price: 4800,
    priceFormatted: "PKR 4,800",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Ultra-low dead space heated wire circuit for neonatal and infant ventilators to eliminate condensation.",
    description: "Essential for NICU mechanical ventilation. Dual heated wire keeps delivered humidified gas at optimal body temperature, preventing rainout and bacterial colonization in neonatal circuits.",
    features: [
      "Specially designed for fragile neonates with minimal compressible volume",
      "Compatible with Fisher & Paykel MR850 humidifiers",
      "Includes temperature probe adapter ports and neonate elbow connector",
      "Transparent smooth bore tubing for easy visual moisture inspection"
    ],
    specifications: {
      "Patient Type": "Neonatal / Infant (<10 kg)",
      "Tubing Diameter": "10mm smooth inner lumen",
      "Humidifier Compatibility": "Fisher & Paykel, Inspired Medical",
      "Sterilization": "Sterile EO Single Patient Use"
    },
    compatibleBrands: ["Hamilton C1/C2 Neonatal", "Dräger Babylog", "Maquet Servo-i", "Mindray"],
    stockStatus: "In Stock",
    badge: "NICU Specialized",
    image: "/flyers/ventilator-accessories-flyer.jpeg",
    sku: "TWI-VENT-CIRC02"
  },
  {
    id: "bacterial-viral-filter-hme",
    name: "Bacterial / Viral Filter with HME (Heat & Moisture Exchanger)",
    category: "ventilator-accessories",
    subcategory: "Filters & Humidifiers",
    price: 650,
    priceFormatted: "PKR 650",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "High-efficiency electrostatic hydrophobic bacterial/viral filter with integrated heat and moisture retention.",
    description: "Protects ventilator patients and medical staff against cross-contamination while preserving natural airway moisture and warmth during anesthesia and prolonged mechanical ventilation.",
    features: [
      ">99.999% bacterial and viral filtration efficiency",
      "Moisture output >32 mg H2O/L at VT 500ml",
      "Standard luer-lock EtCO2 sampling port with tethered cap",
      "Lightweight, clear ergonomic housing reduces patient pull"
    ],
    specifications: {
      "Tidal Volume Range": "200 - 1500 ml",
      "Dead Space": "35 ml",
      "Resistance": "1.8 cm H2O at 60 L/min",
      "Port Type": "22M/15F - 22F/15M standard ISO"
    },
    compatibleBrands: ["Universal Ventilator & Anesthesia Machines", "Hamilton", "Dräger", "Philips", "Mindray"],
    stockStatus: "In Stock",
    badge: "Pack of 10 Available",
    image: "/flyers/ventilator-accessories-flyer.jpeg",
    sku: "TWI-VENT-HME01"
  },
  {
    id: "ventilator-flow-sensor-hamilton",
    name: "Autoclavable & Disposable Flow Sensors (Hamilton & Dräger)",
    category: "ventilator-accessories",
    subcategory: "Sensors & Modules",
    price: 6500,
    priceFormatted: "PKR 6,500",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "High-precision proximal flow sensors for precise volume and tidal flow measurement at patient airway.",
    description: "Guarantees accurate trigger response and synchrony on modern ventilators. Calibrated to Hamilton Medical standards with zero drift and robust thermal resistance.",
    features: [
      "Proximal measurement eliminates tubing compliance calculation errors",
      "Instantaneous flow and volume detection",
      "Available in both autoclavable reusable and pre-sterilized disposable formats",
      "Gold-plated calibration pins for long-lasting connection integrity"
    ],
    specifications: {
      "Compatibility": "Hamilton G5, C1, C2, C3, C6, T1",
      "Flow Range": "0.1 to 180 L/min",
      "Connector": "Dual pressure lumen tubing included",
      "Classification": "Medical Device Class IIa"
    },
    compatibleBrands: ["Hamilton Medical", "Dräger", "Mindray"],
    stockStatus: "In Stock",
    badge: "Genuine Quality",
    image: "/flyers/ventilator-accessories-flyer.jpeg",
    sku: "TWI-VENT-FS01"
  },
  {
    id: "etco2-sidestream-sampling-line",
    name: "EtCO2 Microstream & Sidestream Sampling Lines with Filter",
    category: "ventilator-accessories",
    subcategory: "EtCO2 Accessories",
    price: 1250,
    priceFormatted: "PKR 1,250",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Moisture-resistant EtCO2 sampling line with male luer lock for continuous capnography monitoring.",
    description: "Engineered with integrated 0.2 micron hydrophobic moisture filter to prevent water ingress into sensitive capnograph infrared optical bench.",
    features: [
      "Co-extruded PVC/PE tubing prevents CO2 gas absorption",
      "Standard male/female luer connectors compatible with all monitors",
      "Built-in dehumidification filter trap prevents sensor occlusion",
      "Available with adult nasal cannula or airway adapter"
    ],
    specifications: {
      "Length": "2.5 meters (8.2 ft)",
      "Sampling Rate": "50ml/min - 150ml/min",
      "Filter": "0.2µm Hydrophobic filter",
      "Compatibility": "Philips, Mindray, Biolight, EDAN, Comen"
    },
    compatibleBrands: ["Philips", "Mindray", "Biolight", "EDAN", "Comen", "GE"],
    stockStatus: "In Stock",
    badge: "Capnography Essential",
    image: "/flyers/biomedical-equipment-overview.jpeg",
    sku: "TWI-ETCO2-LINE01"
  },

  // Patient Monitoring Accessories
  {
    id: "spo2-finger-probe-philips-mindray",
    name: "SpO2 Finger Clip Sensor Probe (Philips, Mindray & GE Compatible)",
    category: "patient-monitoring",
    subcategory: "SpO2 Probes & Sensors",
    price: 2800,
    priceFormatted: "PKR 2,800",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Medical-grade adult finger clip pulse oximetry sensor with shielded low-noise cable and gold pins.",
    description: "Delivers reliable oxygen saturation readings even during low perfusion and motion. Features durable silicone spring clip, premium optoelectronic emitters, and heavy-duty TPU cable jacket.",
    features: [
      "Accurate pulse oximetry readings even in low perfusion states",
      "Ergonomic soft silicone padding for patient comfort over extended monitoring",
      "Shielded cable suppresses electromagnetic interference from surgical diathermy",
      "Available in 8-pin, 12-pin, and D-sub connectors for various monitor models"
    ],
    specifications: {
      "SpO2 Range": "70% - 100% (Accuracy ±2%)",
      "Pulse Rate Range": "30 - 250 bpm",
      "Cable Length": "3.0 meters (9.8 ft)",
      "Connector": "Philips 8-pin / Mindray 6-pin / GE 11-pin available"
    },
    compatibleBrands: ["Philips", "Mindray", "GE Healthcare", "Biolight", "EDAN", "Comen"],
    stockStatus: "In Stock",
    badge: "Top Seller",
    image: "/flyers/patient-monitoring-accessories.jpeg",
    sku: "TWI-PM-SPO2-01"
  },
  {
    id: "spo2-silicone-soft-tip-pediatric-neonatal",
    name: "SpO2 Soft Silicone Tip Probe (Pediatric / Neonatal Wrap)",
    category: "patient-monitoring",
    subcategory: "SpO2 Probes & Sensors",
    price: 3400,
    priceFormatted: "PKR 3,400",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Ultra-gentle silicone soft tip and silicone wrap sensor for sensitive skin in pediatric and neonatal ICU.",
    description: "Prevents pressure sores and skin necrosis on delicate infant toes and fingers while maintaining stable signal fidelity and low ambient light interference.",
    features: [
      "Soft flexible medical silicone enclosure protects delicate skin",
      "Easy to disinfect with hospital-grade antiseptic wipes",
      "Compatible with Nellcor OxiMax and Masimo SET algorithms",
      "Tear-resistant Kevlar-reinforced TPU cable"
    ],
    specifications: {
      "Application": "Pediatric (10-40kg) & Neonatal (<3kg) wrap",
      "Cable Length": "3.0 meters",
      "Connector": "Round 5-pin / 6-pin / 8-pin / 12-pin options",
      "Certifications": "CE, ISO 13485 compliant"
    },
    compatibleBrands: ["Biolight", "Philips", "EDAN", "Comen", "Mindray"],
    stockStatus: "In Stock",
    badge: "Pediatric & NICU",
    image: "/flyers/patient-monitoring-probes.jpeg",
    sku: "TWI-PM-SPO2-02"
  },
  {
    id: "nibp-cuff-bladderless-adult-reusable",
    name: "NIBP Blood Pressure Cuff (Bladderless - Adult Reusable)",
    category: "patient-monitoring",
    subcategory: "NIBP Cuffs",
    price: 1800,
    priceFormatted: "PKR 1,800",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Heavy-duty waterproof bladderless NIBP cuff with clear artery markings and secure velcro closure.",
    description: "Designed for rigorous clinical wards and emergency rooms. Bladderless design allows complete liquid immersion disinfection, reducing hospital-acquired infection risks.",
    features: [
      "One-piece bladderless construction ensures easy cleaning and long operational life",
      "Strong medical grade hook-and-loop velcro rated for >10,000 inflation cycles",
      "Clear artery indicator and limb range guides for accurate placement",
      "Supplied with standard quick-coupling metal bayonet or plastic sub-mini connector"
    ],
    specifications: {
      "Arm Circumference": "Adult standard 27 - 35 cm",
      "Tube Type": "Single tube or dual tube options",
      "Connector": "HP/Philips quick disconnect or GE screw connector",
      "Material": "Antimicrobial polyurethane coated nylon"
    },
    compatibleBrands: ["Philips", "Mindray", "GE", "EDAN", "Biolight", "Comen", "NK"],
    stockStatus: "In Stock",
    badge: "Hospital Grade",
    image: "/flyers/patient-monitoring-accessories.jpeg",
    sku: "TWI-PM-NIBP01"
  },
  {
    id: "medical-skin-temperature-probe",
    name: "Medical Temperature Probe (Skin Surface & Rectal/Esophageal)",
    category: "patient-monitoring",
    subcategory: "Temperature Probes",
    price: 2400,
    priceFormatted: "PKR 2,400",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "High-accuracy YSI-400 compatible skin surface disk and central core temperature probes.",
    description: "Ensures continuous core and peripheral thermal tracking for ICU patients and surgical operations. Gold standard YSI400 thermistor curve guarantees compatibility with virtually all monitor brands.",
    features: [
      "Fast thermal response time (<10 seconds to 99% of reading)",
      "Polished smooth skin disk with hypoallergenic adhesive pad compatibility",
      "Rectal/esophageal probe features seamless rounded tip for trauma-free insertion",
      "Fully sealed waterproof probe tip for simple sanitization"
    ],
    specifications: {
      "Thermistor Standard": "YSI 400 Series (2252 Ω at 25°C)",
      "Accuracy": "±0.1°C between 25°C and 45°C",
      "Connector": "Mono phone plug (6.3mm) / Round 2-pin connector",
      "Cable Length": "3 meters"
    },
    compatibleBrands: ["Philips", "Mindray", "GE", "Biolight", "EDAN", "Comen"],
    stockStatus: "In Stock",
    badge: "High Precision",
    image: "/flyers/patient-monitoring-probes.jpeg",
    sku: "TWI-PM-TEMP01"
  },

  // ECG Accessories
  {
    id: "ecg-trunk-cable-5-lead-snap",
    name: "ECG Trunk Cable & 5-Lead Leadwires (Snap / Clip Type)",
    category: "ecg-accessories",
    subcategory: "ECG Cables & Leads",
    price: 4500,
    priceFormatted: "PKR 4,500",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "AHA/IEC color-coded 5-lead ECG trunk cable with built-in defibrillator protection resistors.",
    description: "Guarantees crystal clear ECG signal quality and artifact-free waveforms on patient monitors and cardiac telemetry. Includes built-in 10k/1k ohm RF protection against defibrillator shock and electrosurgery interference.",
    features: [
      "AHA (RA, LA, RL, LL, V) and IEC color coding for quick clinician application",
      "Snap-on or grabber/pinch clips for secure connection to disposable electrodes",
      "Shielded low-microphonic cable with high flexibility and bend relief joints",
      "Latex-free and biocompatible TPU outer jacket"
    ],
    specifications: {
      "Leads": "5-Lead (3-Lead version also available)",
      "Connector": "12-Pin / Round 6-Pin / AAMI 6-Pin trunk terminal",
      "Protection": "Built-in defibrillator discharge protection",
      "Length": "Trunk: 2.5m, Leads: 0.9m"
    },
    compatibleBrands: ["Philips", "Mindray", "Biolight", "EDAN", "Comen", "Nihon Kohden"],
    stockStatus: "In Stock",
    badge: "AHA & IEC Standard",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-ECG-CBL01"
  },
  {
    id: "ecg-suction-chest-electrodes-adult",
    name: "Reusable ECG Suction Chest Electrodes (Set of 6)",
    category: "ecg-accessories",
    subcategory: "Electrodes & Suction Cups",
    price: 3500,
    priceFormatted: "PKR 3,500",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Ag/AgCl plated adult suction chest bulbs for 12-lead diagnostic ECG machines.",
    description: "Premium silver-silver chloride sensor core ensures instant signal pickup and low baseline drift for diagnostic resting ECGs. Soft durable rubber suction bulbs deliver steady vacuum adherence.",
    features: [
      "Pure Ag/AgCl coating for superior conductivity and fast trace stabilization",
      "Universal pin and banana socket connector (fits 3.0mm to 4.0mm cables)",
      "Latex-free natural rubber suction bulbs",
      "Autoclavable and alcohol-cleanable for multiple patient reuse"
    ],
    specifications: {
      "Set Contents": "6 pieces chest suction electrodes (C1 - C6)",
      "Bulb Diameter": "Adult standard 24mm",
      "Connector Diameter": "Accepts 3.0mm DIN pin and 4.0mm banana plug",
      "Sensor Material": "Brass with Silver/Silver Chloride (Ag/AgCl) plating"
    },
    compatibleBrands: ["Philips", "GE MAC", "Nihon Kohden", "Biocare", "Schiller", "EDAN"],
    stockStatus: "In Stock",
    badge: "12-Lead Diagnostic",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-ECG-SUCT01"
  },
  {
    id: "ecg-limb-clamp-electrodes-adult",
    name: "Reusable ECG Limb Clamp Electrodes (Set of 4 Color-Coded)",
    category: "ecg-accessories",
    subcategory: "Electrodes & Clamps",
    price: 2900,
    priceFormatted: "PKR 2,900",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Four color-coded peripheral limb clamps (Red, Yellow, Green, Black) for extremities ECG recording.",
    description: "Sturdy ergonomic spring clamps ensure dependable skin contact without causing patient discomfort. Corrosion-resistant Ag/AgCl plates maximize impedance match with modern cardiographs.",
    features: [
      "Standard international color coding (Red, Yellow, Green, Black)",
      "Strong stainless steel hinge spring maintains uniform contact tension",
      "Universal fit for 3mm pin and 4mm banana plug ECG cables",
      "Easy sanitization between patient diagnostics"
    ],
    specifications: {
      "Set Contents": "4 Clamps (RA, LA, LL, RL)",
      "Plate Size": "Wide contact area for minimal impedance",
      "Compatible Cables": "Banana 4mm, Needle 3mm, Snap adapter"
    },
    compatibleBrands: ["Philips", "GE", "Nihon Kohden", "EDAN", "Mindray", "Schiller"],
    stockStatus: "In Stock",
    badge: "Complete Set of 4",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-ECG-CLMP01"
  },
  {
    id: "ecg-thermal-recording-paper-rolls",
    name: "Medical ECG Thermal Recording Paper (Rolls & Z-Fold Packs)",
    category: "ecg-accessories",
    subcategory: "ECG Paper & Accessories",
    price: 950,
    priceFormatted: "PKR 950",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "High-contrast thermal graph recording paper rolls and Z-fold packs for 3-channel and 12-channel ECGs.",
    description: "Precision medical recording paper with sharp red and green millimeter grid printing. Manufactured with heat-sensitive coating that guarantees legible, fade-resistant traces for long-term patient records.",
    features: [
      "Fade-resistant image life exceeding 10 years when archived properly",
      "Sharp red/pink millimeter diagnostic grid printing",
      "Smooth paper surface prevents thermal print head wear and tear",
      "Available in 50mm, 63mm, 80mm, 110mm, and 210mm roll/Z-fold sizes"
    ],
    specifications: {
      "Standard Sizes": "80mm x 20m, 110mm x 140mm x 150p, 215mm x 280mm",
      "Type": "Direct Thermal Recording Paper",
      "Compatible Devices": "Nihon Kohden, Philips PageWriter, GE MAC, EDAN SE-12"
    },
    compatibleBrands: ["Nihon Kohden", "Philips", "GE Healthcare", "EDAN", "Mindray"],
    stockStatus: "In Stock",
    badge: "High Contrast",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-ECG-PAP01"
  },

  // Medical Batteries
  {
    id: "philips-zoll-defibrillator-battery",
    name: "Philips & Zoll Defibrillator Rechargeable Battery Pack",
    category: "medical-batteries",
    subcategory: "Defibrillator Batteries",
    price: 38000,
    priceFormatted: "PKR 38,000",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "High-discharge lithium-ion battery pack engineered for Philips HeartStart XL/MRx and Zoll M-Series / R-Series.",
    description: "Reliable emergency power is crucial for cardiac resuscitation. Tech Wiz International supplies certified battery replacements with high cycle endurance and fast recharge performance.",
    features: [
      "Provides up to 50 full-energy 360-Joule discharges or 4 hours continuous pacing/monitoring",
      "Built-in fuel gauge LED charge indicator on battery body",
      "Integrated smart circuit protects against overcharge, deep discharge, and short circuits",
      "Fresh cell date code with rigorous quality screening"
    ],
    specifications: {
      "Chemistry": "Rechargeable Lithium-Ion / Sealed Lead-Acid (SLA)",
      "Voltage / Capacity": "14.8V, 6.3Ah / 11.1V, 4.8Ah",
      "Compatibility": "Philips HeartStart XL/MRx, Zoll M-Series, E-Series, R-Series",
      "Warranty": "6 Months Replacement Warranty"
    },
    compatibleBrands: ["Philips", "Zoll Medical", "Mindray BeneHeart", "Nihon Kohden"],
    stockStatus: "In Stock",
    badge: "Life-Saving Backup",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-BAT-DEF01"
  },
  {
    id: "patient-monitor-lithium-battery-pack",
    name: "Patient Monitor Lithium-Ion Rechargeable Battery (Mindray, Biolight, EDAN)",
    category: "medical-batteries",
    subcategory: "Monitor Batteries",
    price: 18500,
    priceFormatted: "PKR 18,500",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Long-life internal battery pack for multi-parameter monitors ensuring smooth transport monitoring.",
    description: "Delivers uninterrupted monitoring during ward transfers, CT scan journeys, and hospital power outages. Built with grade-A Japanese/Korean cells for maximum cycle lifespan.",
    features: [
      "Grade-A lithium cells with zero memory effect",
      "Over 500 charge-discharge cycles with >80% capacity retention",
      "OEM precision fit and drop-in compatibility",
      "Low self-discharge rate for standby emergency readiness"
    ],
    specifications: {
      "Voltage / Capacity": "11.1V, 4400mAh / 14.8V, 4800mAh",
      "Weight": "approx. 420g",
      "Compatibility": "Mindray BeneView, Biolight M-Series, EDAN iM-Series, Comen STAR8000"
    },
    compatibleBrands: ["Mindray", "Biolight", "EDAN", "Comen", "Philips"],
    stockStatus: "In Stock",
    badge: "High Capacity",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-BAT-MON01"
  },
  {
    id: "ventilator-backup-lead-acid-lithium-battery",
    name: "Ventilator Internal Backup Battery (Hamilton, Dräger & Philips)",
    category: "medical-batteries",
    subcategory: "Ventilator Batteries",
    price: 26000,
    priceFormatted: "PKR 26,000",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Heavy-duty backup battery modules providing up to 4 hours emergency runtime for critical ICU ventilators.",
    description: "Critical care ventilators require zero failure tolerance. Our specialized battery modules provide reliable emergency backup to sustain ventilation during transport and power failures.",
    features: [
      "High continuous current discharge capability",
      "Thermal sensor protection prevents overheating during high-load charging",
      "Pre-tested under artificial ventilator resistance load conditions"
    ],
    specifications: {
      "Voltage": "24V / 12V modules",
      "Capacity": "4.5Ah - 7.2Ah",
      "Compatibility": "Hamilton C1/C2/C3, Dräger Savina/Evita, Philips Trilogy"
    },
    compatibleBrands: ["Hamilton Medical", "Dräger", "Philips Respironics", "Mindray"],
    stockStatus: "Available on Order",
    badge: "Zero-Downtime Backup",
    image: "/flyers/biomedical-equipment-overview.jpeg",
    sku: "TWI-BAT-VENT01"
  },

  // Diathermy Accessories
  {
    id: "diathermy-monopolar-pencil-plate",
    name: "Electrosurgical Diathermy Accessories (Pencils, Plates & Cables)",
    category: "patient-monitoring",
    subcategory: "Diathermy Accessories",
    price: 1650,
    priceFormatted: "PKR 1,650",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Disposable & reusable electrocautery pencils, silicone patient return plates, and Valleylab compatible cables.",
    description: "High-grade electrosurgical accessories designed for general and cardiac surgical operations. Delivers precise cutting and coagulation with maximum patient burn safety.",
    features: [
      "Push-button hand-switching electrosurgical pencil with gold stainless steel blade",
      "Universal 3-pin American plug fitting all standard generator units",
      "Adult split patient return plate with hydrogel conductive layer",
      "Flexible silicone reusable grounding plates with heavy-duty clamping cable"
    ],
    specifications: {
      "Cable Length": "3.0 meters (high-flex silicone)",
      "Generator Compatibility": "Valleylab, Covidien, Erbe, Conmed, Bovie",
      "Safety": "REM / Return Electrode Monitoring compatible"
    },
    compatibleBrands: ["Valleylab", "Covidien", "Erbe", "Bovie", "Conmed"],
    stockStatus: "In Stock",
    badge: "Surgery Grade",
    image: "/flyers/biomedical-equipment-overview.jpeg",
    sku: "TWI-DIATH-01"
  },

  // Hospital Plastics & Consumables
  {
    id: "hospital-color-coded-pedal-dustbins",
    name: "Hospital Biohazard Pedal Dustbins (Yellow, Red, Blue, Grey)",
    category: "hospital-plastics-consumables",
    subcategory: "Hospital Dustbins",
    price: 4500,
    priceFormatted: "PKR 4,500",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Foot pedal operated biohazard waste segregation dustbins conforming to WHO & hospital infection control standards.",
    description: "Essential for modern hospital waste management. Tough virgin polypropylene construction resists chemical disinfectants and impacts. Hands-free foot pedal prevents cross-contamination.",
    features: [
      "Color-coded waste separation: Yellow (Infectious), Red (Plastics), Blue (Glass), Grey (General)",
      "Prominent biohazard warning symbol silkscreened on front",
      "Hands-free heavy-duty foot pedal mechanism",
      "Tight-sealing lid locks in odors and airborne bacteria"
    ],
    specifications: {
      "Capacities Available": "20 Liters, 45 Liters, 60 Liters, 100 Liters",
      "Material": "High-Density Polypropylene (HDPP) Virgin Grade",
      "Disinfection": "Resistant to chlorine, phenol, and chemical cleaners"
    },
    compatibleBrands: ["Hospital Infection Control", "ICU / OT / Wards"],
    stockStatus: "In Stock",
    badge: "WHO Waste Segregation",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-PLAS-BIN01"
  },
  {
    id: "hospital-plastic-bedpans-urinals",
    name: "Autoclavable Hospital Plastic Bed Pans, Urinals & Slipper Pans",
    category: "hospital-plastics-consumables",
    subcategory: "Bed Pans & Urinals",
    price: 850,
    priceFormatted: "PKR 850",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Smooth contoured hygienic bedpans and calibrated male/female urinals for patient care.",
    description: "Manufactured from medical grade polypropylene with smooth seamless edges to prevent skin abrasions. Resistant to warm water, detergent washing, and autoclave cycles.",
    features: [
      "Smooth anatomical contoured edges protect fragile skin",
      "Graduated volume measurement marks on urinals",
      "High weight-bearing capacity (>150 kg static load)",
      "Autoclavable up to 121°C"
    ],
    specifications: {
      "Type": "Adult Standard Bedpan / Fracture Slipper Pan / Male Urinal 1000ml",
      "Material": "Medical Grade Polypropylene (Autoclavable)",
      "Color": "Medical Blue / Green / White"
    },
    compatibleBrands: ["Inpatient Wards", "ICU", "Post-Op Recovery"],
    stockStatus: "In Stock",
    badge: "Autoclavable",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-PLAS-BED01"
  },
  {
    id: "hospital-kidney-trays-surgical-bowls",
    name: "Medical Plastic Kidney Trays & Surgical Dressing Bowls",
    category: "hospital-plastics-consumables",
    subcategory: "Trays & Bowls",
    price: 350,
    priceFormatted: "PKR 350",
    isEquipment: false,
    requiresQuote: false,
    shortDescription: "Durable medical kidney dishes (8 inch, 10 inch) and sterile solution bowls for clinical procedures.",
    description: "Multi-purpose hospital trays designed to collect soiled dressings, instruments, and fluids during clinical procedures. Non-stick surface ensures effortless decontamination.",
    features: [
      "Ergonomic kidney shape fits flush against patient body curves",
      "Curved rolled rim prevents fluid splashing and ensures secure grip",
      "Stackable nested design saves hospital shelf space",
      "Safe for cold chemical immersion and autoclaving"
    ],
    specifications: {
      "Sizes": "8 inch (500ml), 10 inch (800ml), Solution Bowls 100mm/120mm",
      "Material": "Polypropylene Copolymer",
      "Temperature Tolerance": "-20°C to +130°C"
    },
    compatibleBrands: ["Minor OT", "Dental", "Emergency Room", "Dressing Rooms"],
    stockStatus: "In Stock",
    badge: "Essential Consumable",
    image: "/flyers/accessories-catalog-grid.jpeg",
    sku: "TWI-PLAS-TRAY01"
  }
];

export const REPAIR_SERVICES: ServiceItem[] = [
  {
    id: "heart-lung-machine-repair",
    title: "Heart Lung Machine Repair & Maintenance",
    tagline: "Keep Your Cardiac Program Running with Reliable Biomedical Support",
    description: "Tech Wiz International provides expert diagnostics, component-level motherboard repairs, peristaltic pump rebuilds, and preventative maintenance for cardiopulmonary bypass machines in Pakistan.",
    keyBenefits: [
      "Comprehensive Diagnostic & Troubleshooting by certified engineers",
      "Pump Head Overhaul & Roller Occlusion Calibration",
      "Replacement of Faulty Electronic & Mechanical Components with Genuine Parts",
      "Arterial Line Bubble & Pressure Sensor Precision Calibration",
      "Routine Maintenance & Preventive Care (PM) with safety compliance certificates",
      "24/7 On-Site Emergency Breakdown Response across Karachi and nationwide"
    ],
    coverage: [
      "Perfusion console electronics & backup battery logic",
      "Roller pump motor drives and RPM encoders",
      "Cardioplegia delivery module and thermal tracking sensors",
      "Pressure transducer modules & level detection arrays"
    ],
    supportedEquipment: [
      "Maquet / Getinge HL-20 / Jostra",
      "Stockert S3, S5, SC Perfusion Systems",
      "Sorin Group / LivaNova consoles",
      "Medtronic Perfusion platforms"
    ],
    icon: "HeartPulse"
  },
  {
    id: "hyper-hypothermia-maintenance",
    title: "Hyper / Hypothermia Machine Servicing",
    tagline: "Accurate Temperature Control for Critical Cardiac & Neuro Surgery",
    description: "Complete thermodynamic overhaul, refrigerant gas charging, water pump replacement, temperature probe calibration, and water pathway descaling for patient thermal regulation equipment.",
    keyBenefits: [
      "Thermal sensor loop calibration to ±0.1°C accuracy",
      "Compressor, condenser & heat exchanger descaling & repair",
      "Leak detection and circulatory water pump overhaul",
      "Over-temperature safety cutoff circuit verification"
    ],
    coverage: [
      "Patient cooling/warming circuit",
      "Myocardial cardioplegia thermal circuit",
      "Digital PID microprocessor controller boards",
      "Water level safety switches and flow sensors"
    ],
    supportedEquipment: [
      "Maquet HCU 30 / HCU 40",
      "Stockert 3T Heater-Cooler System",
      "Cincinnati Sub-Zero (CSZ) Hemotherm / Blanketrol",
      "Stöckert & Sorin Temperature Control Units"
    ],
    icon: "ThermometerSnowflake"
  },
  {
    id: "ventilator-icu-monitor-servicing",
    title: "Ventilators & Patient Monitor Biomedical Servicing",
    tagline: "Minimize Downtime & Maximize Patient Safety in ICUs",
    description: "Expert board-level repair, pneumatic valve kit replacement, calibration, and software updating for leading ventilator brands (Hamilton, Dräger, Philips) and multi-parameter monitors.",
    keyBenefits: [
      "Biomedical safety testing and leakage current verification",
      "Proportional valve, flow sensor, and O2 cell calibration",
      "NIBP pump & valve recalibration with certified digital manometer",
      "SpO2 & ECG parameter board repair with genuine OEM parts"
    ],
    coverage: [
      "ICU Ventilators (Hamilton C1/C2/C3, Dräger, Mindray)",
      "Multi-parameter patient monitors (Philips IntelliVue, Mindray, Biolight)",
      "Defibrillators & AEDs (Philips HeartStart, Zoll M-Series)",
      "Electrocardiographs (Nihon Kohden, GE, EDAN)"
    ],
    supportedEquipment: [
      "Hamilton Medical",
      "Dräger Medical",
      "Philips Healthcare",
      "Mindray",
      "GE Healthcare",
      "Biolight / EDAN / Comen"
    ],
    icon: "Activity"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Tech Wiz International restored our heart lung machine to factory calibration within 24 hours. Their biomedical engineers know critical care machinery inside out.",
    author: "Head of Perfusion & Cardiac Surgery",
    hospital: "Major Tertiary Cardiac Care Hospital, Karachi",
    rating: 5,
  },
  {
    quote: "Finding high-quality Hamilton and Dräger compatible breathing circuits and SpO2 sensors in bulk was always difficult until we partnered with TechWiz. Extremely reliable delivery and pricing.",
    author: "ICU Procurement Incharge",
    hospital: "Private Healthcare Network, Sindh",
    rating: 5,
  },
  {
    quote: "Fast response on defibrillator battery replacements and patient monitor accessories. Having genuine parts in stock in Karachi saves lives in emergency cases.",
    author: "Chief Biomedical Engineer",
    hospital: "Leading Teaching Hospital, Pakistan",
    rating: 5,
  }
];
