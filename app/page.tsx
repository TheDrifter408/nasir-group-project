'use client';
import Image from "next/image"; 
import YearsOfExp from '@/public/yearsOfExp.png';
import Card from "./components/Card";
import CTA from "./components/CTA";
import Carousel from "./components/Carousel";
import { carousel_data } from "./dummy_data/data";
import Content from "./components/Content";
import { IconContext } from "react-icons";
import { FaArrowRight } from "react-icons/fa6";
import Form from "./components/Form";
import Footer from "./components/Footer";
export default function Home() {

  return (
    <Content> 
        <CTA />
        <section className="h-[90vh] grid content-center gap-6 lg:grid-cols-2 mt-20">
              <h1 className="text-4xl w-72 lg:text-6xl text-[#001A94] font-extrabold">Surpassing expectations at every step</h1>
              <article className="grid gap-6 grid-cols-subgrid">
                <h2 className="text-2xl text-[#29253D] font-semibold">Renowned for delivering high-quality products across diverse industries. Our unwavering commitment to innovation and sustainability drives us to set new standards in every venture we undertake.</h2>
                <p className="text-[#29253D] h-min">For over 30 years, Nasir Group of Industries stands as a beacon of excellence in the manufacturing has been developing solutions that have its identity in the projects it built.</p>
                <button className="group bg-blue-800 text-white h-min px-4 py-2 w-fit flex items-center gap-2 justify-center">
                  Know More About Us
                  <IconContext.Provider value={{ color:'inherit'}}>
                    <span className="transition-transform duration-300 -rotate-45 group-hover:rotate-0">
                        <FaArrowRight />
                    </span>
                  </IconContext.Provider>
                </button>
              </article>
        </section>
        <section className="grid gap-6 my-10">
          <article className="h-[80vh] grid items-start lg:grid-cols-2">
            <div className="grid grid-cols-2 bg-white">
              <Card cardNum="20+" numSize="text-5xl lg:text-8xl" cardText="years of experience" textSize="text-xl" position="col-span-1" width={100} borderDesign="border-r-2 border-gray-200" />
              <Card cardNum="11" numSize="text-5xl lg:text-8xl" cardText="sister concern we have" textSize="text-xl" position="col-span-1" width={100} borderDesign="border-gray-200"/>
              <Card cardNum="45,000+" numSize="text-5xl lg:text-8xl" cardText="employees nationwide" textSize="text-xl" position="col-span-2" width={100} borderDesign="border-t-2 border-gray-200"/>
            </div>
            <div className="sm:hidden lg:block lg:col-start-1 row-start-1">
              <div className="w-[100%]">
                <Image className="" src={YearsOfExp} alt="Image" width={700} height={700} />
              </div>
            </div>
            </article>
            <article className="grid items-baseline bg-white">
              <div className="overflow-hidden px-4 col-span-1">
                <Image className="mx-auto object-cover" src="/history-image.jpg" width={1000} height={1000} alt="factory image" />
              </div>
              <div style={{ transform: `translateY(${scrollY * -0.5}px)` }} className="bg-[rgba(0,0,0,0.01)] col-span-1">
                <h1 className="text-[10.25rem] text-blue-900 px-4 text-left font-bold tracking-wider bg-transparent">History</h1>
              </div>
            </article>  
          
        </section>
        <section className="h-screen">
          <Carousel data={carousel_data} />
        </section>
        <section className="h-screen">
          <Form />
        </section>
        <section className="">
          <Footer />
        </section>
    </Content>
  );
}
