"use client";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormMinimal } from "@/components/contact/ContactFormMinimal";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { CustomCursor } from "@/components/contact/CustomCursor";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Custom Cursor (Desktop only) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

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
