"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Cpu, Factory, Zap, ShieldCheck, Microchip, Lightbulb } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Bare Printed Circuit Boards",
    description: "High-TG FR4, Aluminum Core, Rogers for RF/Microwave, and specialized Flexible/Rigid-Flex boards. From single-sided to 32+ multilayer complex architectures.",
    icon: <Cpu className="w-12 h-12 text-orange-500 mb-4" />,
    features: ["Up to 32+ Layers", "High-TG FR4 & Aluminum", "Rigid, Flex & Rigid-Flex", "Impedance Control"],
    href: "/products#bare-pcb"
  },
  {
    id: 2,
    title: "Turnkey PCBA Solutions",
    description: "End-to-end PCB Assembly (SMT, THT/DIP). We provide component sourcing, automated placement, wave soldering, conformal coating, and final IC programming/testing.",
    icon: <Factory className="w-12 h-12 text-orange-500 mb-4" />,
    features: ["SMT & DIP Assembly", "Global Component Sourcing", "AOI & X-Ray Inspection", "Conformal Coating"],
    href: "/products#pcba"
  },
  {
    id: 3,
    title: "Electromechanical Assemblies",
    description: "Beyond the board: cable harnesses, box builds, enclosure integration, and customized retail packaging ready for global export.",
    icon: <Zap className="w-12 h-12 text-orange-500 mb-4" />,
    features: ["Custom Cable Harnesses", "Box Builds & Enclosures", "Thermal Management", "Retail Packaging"],
    href: "/products#electromechanical"
  },
  {
    id: 4,
    title: "Specialized HDI & BGA",
    description: "High-Density Interconnect (HDI) manufacturing with blind and buried vias. Precision Ball Grid Array (BGA) assembly with tight tolerances.",
    icon: <ShieldCheck className="w-12 h-12 text-orange-500 mb-4" />,
    features: ["Blind & Buried Vias", "Microvia Technology", "Fine Pitch BGA", "Rigorous Quality Audits"],
    href: "/products#hdi-bga"
  },
  {
    id: 5,
    title: "IC & Component Sourcing",
    description: "Direct procurement of hard-to-find semiconductors, microcontrollers, and passive components through our global network of authorized distributors and original manufacturers.",
    icon: <Microchip className="w-12 h-12 text-orange-500 mb-4" />,
    features: ["BOM Cross-Referencing", "Obsolete Part Sourcing", "Anti-Counterfeit Testing", "Strategic Kitting"],
    href: "/products#component-sourcing"
  },
  {
    id: 6,
    title: "Rapid Prototyping & NPI",
    description: "Fast-turnaround fabrication and engineering validation testing (EVT) specifically designed to help R&D teams iterate quickly before scaling to mass production.",
    icon: <Lightbulb className="w-12 h-12 text-orange-500 mb-4" />,
    features: ["24-48 Hour Turnaround", "Design for Manufacturing (DFM)", "Engineering Validation", "Seamless Scaling"],
    href: "/products#prototyping"
  }
];

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const container = scrollRef.current;
      const card = container.children[0] as HTMLElement;
      // Card width + gap-6 (24px)
      const scrollAmount = card.offsetWidth + 24;
      
      const newScrollLeft = direction === "left" 
        ? Math.max(0, container.scrollLeft - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount);

      container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      // Add a small threshold (10px) to handle fractional pixel scrolling rounding issues
      setCanScrollLeft(Math.ceil(scrollLeft) > 10);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Products</h2>
          <p className="mt-2 text-lg text-slate-600">Swipe to explore our procurement capabilities</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll("left")} 
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border ${canScrollLeft ? 'border-orange-500 text-orange-600 hover:bg-orange-50' : 'border-slate-200 text-slate-300'} transition-colors`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")} 
            disabled={!canScrollRight}
            className={`p-2 rounded-full border ${canScrollRight ? 'border-orange-500 text-orange-600 hover:bg-orange-50' : 'border-slate-200 text-slate-300'} transition-colors`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <article key={product.id} className="w-[85vw] sm:w-[350px] md:w-[400px] flex-shrink-0 snap-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
            <div aria-hidden="true">{product.icon}</div>
            <h3 className="text-xl font-bold text-[#001d3d] mb-3">{product.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
            <div className="mb-8 space-y-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-xs font-semibold text-slate-500">
                  <span className="text-orange-500 mr-2" aria-hidden="true">✓</span> {feature}
                </div>
              ))}
            </div>
            <Link href={product.href} className="inline-flex items-center text-sm font-bold text-orange-600 hover:text-orange-700 mt-auto group" aria-label={`View details about ${product.title}`}>
              View Details 
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
