"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.png"
          alt="Modern NextJS Template Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-muted/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl md:text-6xl font-bold text-primary">
          Modern NextJS 16 Template
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A beautifully designed, responsive template with all the features you
          need to get started on your next project. Built with Next.js 16,
          TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            text="Get Started"
            href="/about"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
            variant="primary"
          />
          <Button text="Learn More" href="/services" variant="outline" />
        </div>
      </div>
    </section>
  );
}
