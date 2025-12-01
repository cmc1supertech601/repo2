"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Hammer, Ruler, DoorOpen, LayoutGrid } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xl shadow-lg shadow-blue-600/20">
              D
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">Dad Construction</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-blue-600 transition-colors">Our Work</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <a href="tel:6476670289" className="group hidden sm:flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-900/20">
            <Phone className="h-4 w-4" />
            <span>647-667-0289</span>
          </a>
        </div>
      </header>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-zinc-900 px-4 py-24 text-center text-white md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/work-1.jpg"
              alt="Background"
              fill
              className="object-cover opacity-30 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-900/80 to-zinc-900" />
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="relative z-10 max-w-4xl space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4" />
              <span>Licensed & Insured in GTA</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Concrete Work <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Done Right.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
              Specializing in basement windows, below grade entrances, and side entrances.
              We deliver professional quality with legal pricing and guaranteed satisfaction.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:scale-105 active:scale-95"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex h-14 items-center justify-center rounded-full border border-zinc-700 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-zinc-600"
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative bg-white py-32">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

          <div className="container relative mx-auto px-4 md:px-6">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
                Expert Services
              </h2>
              <p className="mt-6 text-xl text-zinc-600 leading-relaxed">
                We provide comprehensive construction solutions tailored to your home's needs.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {[
                {
                  title: "Basement Windows",
                  desc: "Installation and enlargement of basement windows for safety, code compliance, and natural light.",
                  icon: LayoutGrid
                },
                {
                  title: "Below Grade Entrance",
                  desc: "Professional construction of separate basement entrances with proper drainage and finishing.",
                  icon: DoorOpen
                },
                {
                  title: "Side Entrance",
                  desc: "Convenient and secure side entryways for your property, perfect for basement apartments.",
                  icon: Ruler
                },
                {
                  title: "All Concrete Work",
                  desc: "Custom walkways, stairs, pads, and driveways built to withstand Canadian winters.",
                  icon: Hammer
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-blue-200"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-600/25">
                    <service.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-zinc-900">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{service.desc}</p>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-zinc-900 py-32 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="mt-6 text-xl text-zinc-400">Take a look at some of our recent work across the GTA.</p>
              </div>
              <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Start your project <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[1, 2, 3, 4].map((num, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-800"
                >
                  <Image
                    src={`/images/work-${num}.jpg`}
                    alt={`Construction project ${num}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm mb-2">
                      Project {num}
                    </span>
                    <h3 className="text-lg font-bold text-white">Concrete & Finishing</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <a href="#contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Start your project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-32 md:px-6">
          <div className="overflow-hidden rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-900/20">
            <div className="grid gap-12 p-8 md:grid-cols-2 md:p-16 lg:p-20">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to transform your home?</h2>
                  <p className="mt-6 text-xl text-blue-100 leading-relaxed">
                    Contact us today for a free, no-obligation quote. We're ready to help you with your next project.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 rounded-2xl bg-blue-500/20 p-4 backdrop-blur-sm border border-blue-400/20">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-200">Call us directly</p>
                      <p className="text-xl font-bold">647-667-0289</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-blue-500/20 p-4 backdrop-blur-sm border border-blue-400/20">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-200">Email us</p>
                      <p className="text-xl font-bold">contact@dummy-email.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-blue-500/20 p-4 backdrop-blur-sm border border-blue-400/20">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-200">Service Area</p>
                      <p className="text-xl font-bold">Brampton, Toronto & GTA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white p-8 text-zinc-900 shadow-xl">
                <h3 className="mb-6 text-2xl font-bold">Request a Callback</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="container mx-auto px-4 text-center text-zinc-500 md:px-6">
          <div className="mb-8 flex justify-center gap-8">
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-zinc-900 transition-colors">Our Work</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Dad Construction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
