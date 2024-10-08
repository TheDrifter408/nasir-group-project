'use client'
import { LegacyRef, useEffect, useRef, useState } from "react";
import Header from "./Header";
import { animate, inView, scroll } from "motion";
import { useScroll } from "../hooks/useScrollY";

export default function CTA(){
    // using custom hook
    const scrollY = useScroll();
    return (
        <section className="relative text-white h-screen mx-auto pt-32 px-6 grid bg-transparent overflow-visible">
        { /* bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] */}
          <Header />
          <article className="z-10 grid grid-cols-12 grid-rows-12 text-white">
            <h1 className="col-span-4 text-8xl font-bold">Manufacturing excellence across industries</h1>
            <div className="row-start-2 col-start-8 col-span-5">
              <div style={{  transform:`translateY(${scrollY * -0.2}px)` }} className={`translate-comp bg-radial-gradient p-10 h-[120%] w-[80%]`}>
                <p className="text-xl">Exemplefying leadership in manufacturing, this organization delivers high-quality products across various sectors with a commitment to innovation</p>
              </div>
            </div>
          </article>
        </section>
    )
}