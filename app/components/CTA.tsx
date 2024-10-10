'use client'
import Header from "./Header";
import { FaArrowRight } from "react-icons/fa6";

export default function CTA(){
    return (
        <section className="text-white h-screen">
          <Header />
          <article className="grid lg:grid-cols-2 lg:grid-rows-2 text-white">
            <h1 className="z-10 text-5xl w-[90%] lg:text-8xl lg:w-[60%] lg:row-span-2 py-32 font-bold">Manufacturing excellence across industries</h1>
            <div className="z-10 lg:col-start-2 lg:row-start-2 lg:flex lg:justify-end">
              <div className="bg-radial-gradient w-[96%] lg:w-[50%] p-8 grid gap-4 items-baseline">
                <p className="text-lg text-left text-pretty">Exemplefying leadership in manufacturing, this organization delivers high-quality products across various sectors with a commitment to innovation</p>
                <button className="flex items-center text-xl p-4 w-fit bg-white text-blue-700 gap-1 col-span-1">
                  Our Values
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </article>
        </section>
    )
}