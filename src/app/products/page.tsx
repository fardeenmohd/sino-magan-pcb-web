import { Cpu, Factory, Zap, ShieldCheck, ArrowLeft, ArrowRight, Microchip, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics Procurement Products | Bare PCBs & Turnkey PCBA",
  description: "Explore Sino Magan Indus's comprehensive range of B2B electronics sourcing products. We supply Bare PCBs, Turnkey PCBA, Electromechanical Assemblies, and specialized HDI/BGA boards from verified Indian manufacturers.",
  keywords: [
    "PCB Manufacturing India",
    "Turnkey PCBA Solutions",
    "Bare Printed Circuit Boards",
    "Electromechanical Assembly Sourcing",
    "High-Density Interconnect HDI PCB",
    "BGA Assembly Services",
    "FR4 Aluminum Core PCB",
    "B2B PCB Sourcing",
    "Indian PCB Manufacturers",
    "Bengaluru Electronics Sourcing",
    "Through-Hole Technology THT",
    "Custom Box Builds",
    "Electronics Contract Manufacturing",
    "IC Component Sourcing",
    "Rapid PCB Prototyping"
  ].join(", "),
  openGraph: {
    title: "Electronics Procurement Products & Capabilities",
    description: "Source high-quality Bare PCBs, Turnkey PCBA, and Electromechanical Assemblies from verified manufacturers in India's top tech hubs.",
    url: 'https://sinomagan.com/products',
    siteName: 'Sino Magan Indus',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sinomagan.com/products'
  }
};

const productDetails = [
  {
    id: "bare-pcb",
    title: "Bare Printed Circuit Boards",
    description: "From single-sided to highly complex 32+ layer architectures, we procure bare boards that meet exact mechanical and electrical specifications. Our network includes specialized manufacturers for exotic materials and high-power applications.",
    icon: <Cpu className="w-16 h-16 text-orange-500 mb-6" aria-hidden="true" />,
    specs: [
      { label: "Layer Count", value: "1 to 32+ Layers" },
      { label: "Materials", value: "High-TG FR4, Aluminum Core, Rogers (RF/Microwave), Polyimide (Flex)" },
      { label: "Board Types", value: "Rigid, Flexible, Rigid-Flex, High-Frequency" },
      { label: "Surface Finishes", value: "HASL, ENIG, OSP, Immersion Silver/Tin, Hard Gold" },
      { label: "Copper Weight", value: "0.5 oz to 6+ oz (Heavy Copper)" }
    ]
  },
  {
    id: "pcba",
    title: "Turnkey PCBA Solutions",
    description: "End-to-end PCB Assembly tailored for rapid prototyping and mass manufacturing. We handle the entire BOM sourcing through our established supply chain, ensuring component authenticity and aggressive pricing before entering the assembly lines.",
    icon: <Factory className="w-16 h-16 text-orange-500 mb-6" aria-hidden="true" />,
    specs: [
      { label: "Assembly Types", value: "SMT (Surface Mount), THT/DIP (Through-Hole), Mixed Technology" },
      { label: "Component Sourcing", value: "Turnkey, Partial Turnkey, Consigned" },
      { label: "Minimum Component Size", value: "01005 passives, 0.3mm pitch BGA" },
      { label: "Protection", value: "Conformal Coating, Potting/Encapsulation" },
      { label: "Testing", value: "AOI (Automated Optical), X-Ray, ICT, Functional Testing" }
    ]
  },
  {
    id: "electromechanical",
    title: "Electromechanical Assemblies",
    description: "Moving beyond the circuit board, we provide full box-build and electromechanical integration. Our facilities can take your PCBA and assemble it into its final custom enclosure, complete with cabling and thermal management.",
    icon: <Zap className="w-16 h-16 text-orange-500 mb-6" aria-hidden="true" />,
    specs: [
      { label: "Services", value: "Box Builds, Sub-assemblies, Final Integration" },
      { label: "Cabling", value: "Custom Cable Harnesses, Wire Processing, Ribbon Cables" },
      { label: "Enclosures", value: "Plastic Injection Molding, CNC Metal, Sheet Metal Fabrication" },
      { label: "Thermal", value: "Custom Heatsinks, Thermal Pad Application, Fans" },
      { label: "Packaging", value: "Retail-ready custom packaging and labeling for global DDP/CIF export" }
    ]
  },
  {
    id: "hdi-bga",
    title: "Specialized HDI & BGA",
    description: "For modern, miniaturized electronics, we source from ultra-precision facilities capable of High-Density Interconnects and complex Ball Grid Array populations, ensuring high reliability in aerospace, medical, and telecom sectors.",
    icon: <ShieldCheck className="w-16 h-16 text-orange-500 mb-6" aria-hidden="true" />,
    specs: [
      { label: "HDI Vias", value: "Blind, Buried, Stacked, and Staggered Microvias" },
      { label: "Laser Drilling", value: "Down to 3 mil (0.075mm) precision" },
      { label: "BGA Pitch", value: "Fine pitch down to 0.3mm" },
      { label: "Impedance Control", value: "Strict tolerance matching (±5% to ±10%)" },
      { label: "Certifications", value: "Suppliers vetted for ISO 9001, ISO 13485 (Medical), IATF 16949 (Auto)" }
    ]
  },
  {
    id: "component-sourcing",
    title: "IC & Component Sourcing",
    description: "Navigate global chip shortages and supply chain volatility with our dedicated IC sourcing division. We procure hard-to-find active, passive, and obsolete components directly from trusted channels to prevent production halts.",
    icon: <Microchip className="w-16 h-16 text-orange-500 mb-6" aria-hidden="true" />,
    specs: [
      { label: "Sourcing Channels", value: "Authorized Franchises, Direct Factory, Vetted Independent Hubs" },
      { label: "Component Types", value: "Microcontrollers, Memory, FPGAs, Sensors, Power ICs" },
      { label: "Verification", value: "Anti-Counterfeit Visual & X-Ray Testing, Decapsulation available" },
      { label: "Kitting Services", value: "Pre-packaged kits delivered directly to your assembly floor" },
      { label: "Cross-Referencing", value: "Engineering support to find drop-in replacements for obsolete parts" }
    ]
  },
  {
    id: "prototyping",
    title: "Rapid Prototyping & NPI",
    description: "Accelerate your New Product Introduction (NPI) cycles. We offer rapid-turnaround fabrication and assembly for R&D engineers, providing crucial Design for Manufacturing (DFM) feedback before scaling up.",
    icon: <Lightbulb className="w-16 h-16 text-orange-500 mb-6" aria-hidden="true" />,
    specs: [
      { label: "Turnaround Time", value: "24-48 hour fabrication options available" },
      { label: "Batch Sizes", value: "From 1 piece to low-volume pilot runs" },
      { label: "DFM/DFA Checks", value: "Comprehensive engineering review to prevent mass-production flaws" },
      { label: "Engineering Validation", value: "Support for EVT, DVT, and PVT stages" },
      { label: "Transition", value: "Seamless transfer of prototypes to high-volume manufacturing lines" }
    ]
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="bg-[#001d3d] border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/logo.png" alt="Sino Magan Logo" width={40} height={40} className="object-contain" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wide text-white group-hover:text-orange-400 transition-colors">SINO MAGAN INDUS</span>
                <span className="text-[10px] text-orange-500 tracking-widest uppercase font-semibold">PCB Trade Division</span>
              </div>
            </Link>
            <div className="flex space-x-8 items-center">
              <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2 hidden md:flex">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              <Link href="/contact" className="bg-orange-500 text-white px-4 py-1.5 md:px-5 md:py-2 rounded text-sm font-bold hover:bg-orange-600 transition-all shadow-md whitespace-nowrap">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#001d3d] py-20 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Procurement Catalog
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl max-w-3xl mx-auto">
            Our Products & Capabilities
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            From rapid bare-board prototyping to high-volume turnkey electromechanical assemblies, explore our full spectrum of B2B electronics sourcing solutions.
          </p>
        </div>
      </section>

      {/* Product Details Sections */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {productDetails.map((product, index) => (
            <article key={product.id} id={product.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Product Info */}
              <div className="flex-1">
                {product.icon}
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">{product.title}</h2>
                <p className="text-lg leading-relaxed text-slate-600 mb-8">{product.description}</p>
                <Link href={`/contact?inquiry_type=${encodeURIComponent(product.title)}`} className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors group">
                  Request a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Product Specs Table */}
              <div className="flex-1 w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h3 className="text-xl font-bold text-[#001d3d] mb-6">Technical Specifications</h3>
                <div className="divide-y divide-slate-100">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="py-4 flex flex-col sm:flex-row sm:justify-between gap-2">
                      <span className="font-semibold text-slate-900 sm:w-1/3">{spec.label}</span>
                      <span className="text-slate-600 sm:w-2/3 sm:text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Ready to scale your production?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Share your Bill of Materials (BOM) and Gerber files with our procurement team for a rapid, comprehensive analysis and quotation.
          </p>
          <Link href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
            Submit Your Requirements
          </Link>
        </div>
      </section>
    </main>
  );
}
