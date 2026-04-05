"use client";

import React from "react";
import Image from "next/image";

export function IndustryAuthoritySection() {
  return (
    <section className="bg-white py-10 lg:py-14 px-5 sm:px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Image
          src="/images/graph.png"
          alt="Industry Authority Brand in 6 Months"
          width={1800}
          height={900}
          className="w-full h-auto rounded-2xl"
          priority={false}
        />
      </div>
    </section>
  );
}

