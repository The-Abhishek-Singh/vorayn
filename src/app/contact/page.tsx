"use client";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormMinimal } from "@/components/contact/ContactFormMinimal";
import { ContactInfo } from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Hero Section */}
        <ContactHero />

        {/* Form Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <ContactFormMinimal />
          </div>
        </section>

        {/* Contact Info Section */}
        <ContactInfo />
      </div>
    </main>
  );
}
