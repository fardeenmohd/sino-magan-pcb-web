import { MapPin, Phone, Mail, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Procurement Experts",
  description: "Get a free quote for your PCB and PCBA sourcing requirements. Connect with Sino Magan Indus to access verified electronics manufacturers across India's premier tech hubs.",
  keywords: [
    "Contact Sino Magan Indus",
    "PCB Quote Request",
    "PCBA Manufacturing Quote",
    "Electronics Sourcing Agency Contact",
    "Indian PCB Suppliers Inquiry",
    "B2B Electronics Trade Contact",
    "Bengaluru Electronics Sourcing",
    "Delhi-NCR Manufacturing Connections"
  ].join(", "),
  alternates: {
    canonical: 'https://sinomaganelectronics.vercel.app/contact'
  },
  openGraph: {
    title: "Contact Our Electronics Procurement Experts | Sino Magan Indus",
    description: "Get a fast, accurate quote for your PCB fabrication and assembly BOM from verified Indian manufacturers.",
    url: "https://sinomaganelectronics.vercel.app/contact",
    siteName: 'Sino Magan Indus',
    locale: 'en_US',
    type: 'website',
  }
};

export default function ContactPage() {
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
              <Link href="/products" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden md:block">
                Products
              </Link>
              <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#001d3d] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Talk Electronics Sourcing
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Whether you need turnkey PCBA, high-density bare boards, or electromechanical assemblies, our global trade team is ready to connect you with verified manufacturers across India's premier tech hubs, including Bengaluru, Pune, Chennai, and Delhi-NCR.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Get In Touch</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              We leverage our extensive supplier matrix to provide rapid quotes, high-volume production scaling, and seamless CIF/DDP logistics to your global facilities.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Global Headquarters</h3>
                  <p className="mt-1 text-slate-600">C44, Old DLF Colony, Sector-14</p>
                  <p className="text-slate-600">Gurgaon, Haryana, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                  <p className="mt-1 text-slate-600">+91 8700793327</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">sinomaganindustrade@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Global Hubs</h3>
                  <p className="mt-1 text-slate-600">India • China • Oman • Saudi Arabia • Netherlands • Poland • Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formspree Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
            <form action="https://formspree.io/f/xykdwbgr" method="POST" className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-900">Full Name</label>
                  <div className="mt-2">
                    <input type="text" name="name" id="name" required className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">Email Address</label>
                  <div className="mt-2">
                    <input type="email" name="email" id="email" required className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="john@company.com" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-slate-900">Phone Number</label>
                  <div className="mt-2">
                    <input type="tel" name="phone" id="phone" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium leading-6 text-slate-900">Company Name</label>
                  <div className="mt-2">
                    <input type="text" name="company" id="company" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Electronics Corp" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-type" className="block text-sm font-medium leading-6 text-slate-900">Inquiry Type</label>
                <div className="mt-2">
                  <select id="inquiry-type" name="inquiry_type" className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 bg-white">
                    <option>PCBA Turnkey Manufacturing</option>
                    <option>Bare PCB Sourcing</option>
                    <option>Electromechanical Assembly</option>
                    <option>Supplier Matching / RFQ</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900">Message</label>
                <div className="mt-2">
                  <textarea name="message" id="message" rows={4} required className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Tell us about your sourcing needs, required volumes, or technical specifications..."></textarea>
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full rounded-md bg-orange-600 px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all">
                  Send Inquiry
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
