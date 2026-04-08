"use client";

import React from "react";
import Image from "next/image";

export function IndustryAuthoritySection() {
  return (
    <section className="bg-white py-10 lg:py-14 px-3 sm:px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <Image
          src="/images/graph.png"
          alt="Industry Authority Brand in 6 Months"
          width={1800}
          height={900}
          className="w-full h-auto rounded-2xl min-h-[300px] object-cover object-left"
          priority={false}
        />
      </div>
    </section>
  );
}

