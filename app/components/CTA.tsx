'use client'
import Header from "./Header";
import { FaArrowRight } from "react-icons/fa6";

export default function CTA(){
    return (
        <section className="text-white h-screen">
          <Header />
          <article className="grid lg:grid-cols-2 lg:grid-rows-2 text-white">
            <h1 className="z-10 text-5xl w-[90%] lg:text-8xl lg:w-[60%] lg:row-span-2 px-4 py-32 font-bold">Manufacturing excellence across industries</h1>
            <div className="bg-radial-gradient w-[96%] p-6 mx-auto lg:col-start-2 lg:row-start-2 z-10 grid items-baseline">
              <div className="">
                <p className="text-xl py-4">Exemplefying leadership in manufacturing, this organization delivers high-quality products across various sectors with a commitment to innovation</p>
              </div>
              <button className="flex items-center text-xl p-4 w-fit bg-white text-blue-700 gap-1 col-span-1">
                Our Values 
                <FaArrowRight />
              </button>
            </div>
          </article>
        </section>
    )
}