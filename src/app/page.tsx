import Image from "next/image";
import ProductCarousel from "@/components/ProductCarousel";
import { Activity, Cpu, Globe, Link2, ShieldCheck, Zap, Factory, PackageCheck } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#001d3d] text-slate-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#001d3d]/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Sino Magan Logo" width={40} height={40} className="object-contain" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wide text-white">SINO MAGAN INDUS</span>
                <span className="text-[10px] text-orange-500 tracking-widest uppercase font-semibold">PCB Trade Division</span>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/products" className="text-sm font-medium hover:text-orange-400 transition-colors">Products</Link>
                <a href="#capabilities" className="text-sm font-medium hover:text-orange-400 transition-colors">Capabilities</a>
                <a href="#network" className="text-sm font-medium hover:text-orange-400 transition-colors">Supplier Network</a>
              </div>
              <Link href="/contact" className="bg-orange-500 text-white px-4 py-1.5 md:px-5 md:py-2 rounded text-sm font-bold hover:bg-orange-600 transition-all shadow-md whitespace-nowrap">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#001d3d] to-slate-900 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Global B2B Electronics Sourcing
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Bridging Markets. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Delivering Trust.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Your strategic partner for sourcing high-quality Printed Circuit Boards (PCBs) and PCBA manufacturing. We connect mid-tier international buyers with verified, world-class electronics manufacturers in India's Delhi-NCR tech hub.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link href="/products" className="rounded-md bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-all text-center w-full sm:w-auto">
                See Products
              </Link>
              <a href="#network" className="text-sm font-semibold leading-6 text-white hover:text-orange-400 transition-colors flex items-center gap-2">
                View Supplier Matrix <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Design */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section id="products" className="bg-slate-50 border-b border-slate-200">
        <ProductCarousel />
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">Manufacturing Excellence</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive PCB & PCBA Capabilities
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our verified network of Delhi-NCR suppliers is equipped to handle everything from rapid prototyping to high-volume production with advanced technical requirements.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d3d]">
                    <Cpu className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  Bare PCB Manufacturing
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Rigid, Flex, and Rigid-Flex boards with high layer counts (up to 32+ layers). Supporting advanced materials like FR4, Rogers, and Aluminum core for specialized applications.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d3d]">
                    <Factory className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  PCBA (SMT & DIP Assembly)
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  State-of-the-art Surface Mount Technology (SMT) and Dual In-line Package (DIP) assembly lines. Capable of handling ultra-small components (01005) and complex board population.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d3d]">
                    <Zap className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  Advanced HDI & BGA
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  High-Density Interconnect (HDI) manufacturing with blind and buried vias. Precision Ball Grid Array (BGA) assembly with automated optical and X-ray inspection.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d3d]">
                    <ShieldCheck className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  Surface Finishes & Compliance
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Offering HASL, ENIG, OSP, and Immersion Silver/Tin. All suppliers are rigorously vetted for ISO 9001, IATF 16949, and RoHS/REACH compliance.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Expert Procurement Supplier Network */}
      <section id="network" className="bg-slate-50 py-24 sm:py-32 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Expert Procurement Network</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our dedicated global procurement team continuously vets, analyzes, and qualifies leading manufacturers in the Delhi-NCR region. We conduct rigorous quality audits to guarantee you are matched with suppliers whose capabilities precisely fit your BOM and technical requirements.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Activity className="h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                  Verified Capability Matrix
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Our team maintains an up-to-date matrix of supplier capabilities, cross-referencing max layer counts, via types, and production capacities to ensure reliability.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <PackageCheck className="h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                  Vetted Delhi-NCR Hub
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Focusing exclusively on India's premier electronics manufacturing corridors: Noida, Greater Noida, Okhla, Faridabad, and Manesar.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Link2 className="h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                  Seamless Buyer Matching
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">By leveraging deep local relationships and structured supplier data, we significantly reduce lead times for finding the perfect manufacturing partner.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>



      {/* Target Buyer Profile Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Our Target Buyers</h2>
            <p className="text-lg text-slate-600">
              We cater to mid-to-large tier international enterprises seeking to diversify their manufacturing supply chains with reliable Indian partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">European & Gulf Distributors</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Leveraging our hubs in Oman, Netherlands, and Poland to provide seamless DDP/CIF logistics for high-volume consumer electronics components.</p>
            </div>
            
            <div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Medical & Automotive OEMs</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Sourcing from ISO 13485 and IATF 16949 certified facilities in the NCR region for mission-critical reliability and traceability.</p>
            </div>

            <div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">IoT & Telecommunications</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Providing advanced HDI, impedance-controlled, and high-frequency boards for the rapidly expanding global 5G and IoT infrastructure markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Footer */}
      <footer id="contact" className="bg-[#001d3d] py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-slate-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.png" alt="Sino Magan Logo" width={48} height={48} className="object-contain" />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl tracking-wide text-white">SINO MAGAN INDUS</span>
                  <span className="text-[10px] text-orange-500 tracking-widest uppercase font-semibold">Global Trade LLP</span>
                </div>
              </div>
              <p className="text-sm leading-6">
                Leading the way in global electronics trade, connecting high-tech manufacturers in the East to emerging markets worldwide through integrity and logistical excellence.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact HQ</h3>
              <ul className="space-y-3 text-sm">
                <li><span className="text-orange-500 mr-2">📍</span> C44, Old DLF Colony, Sector-14, Gurgaon, Haryana, India</li>
                <li><span className="text-orange-500 mr-2">📞</span> +91 8700793327</li>
                <li><span className="text-orange-500 mr-2">✉️</span> sinomaganindustrade@gmail.com</li>
                <li><span className="text-orange-500 mr-2">🌐</span> www.sinomagan.com</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Global Network</h3>
              <ul className="grid grid-cols-2 gap-3 text-sm">
                <li>🇮🇳 India (Sourcing)</li>
                <li>🇨🇳 China (Procurement)</li>
                <li>🇴🇲 Oman (Gulf Hub)</li>
                <li>🇸🇦 Saudi Arabia</li>
                <li>🇳🇱 Netherlands</li>
                <li>🇵🇱 Poland</li>
                <li>🇮🇩 Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>© 2026 SINO MAGAN INDUS GLOBAL TRADE LLP. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
