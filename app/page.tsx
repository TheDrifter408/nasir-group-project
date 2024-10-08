'use client';
import Image from "next/image"; 
import YearsOfExp from '@/public/yearsOfExp.png';
import Card from "./components/Card";
import Button from "./components/Button";
import CTA from "./components/CTA";
import { useScroll } from "./hooks/useScrollY";
import Carousel from "./components/Carousel";
import { carousel_data } from "./dummy_data/data";
import Content from "./components/Content";
export default function Home() {

  const scrollY = useScroll();

  return (
    <Content>
      <main className="flex flex-col">  
        <CTA />
        <section className="h-screen grid grid-cols-12 items-start mt-56">
              <h1 className="text-6xl text-[#001A94] font-extrabold col-span-5">Surpassing expectations at every step</h1>
              <article className="col-start-7 col-span-5 grid grid-cols-subgrid gap-4">
                <h2 className="col-span-6 text-2xl text-[#29253D] font-semibold">Renowned for delivering high-quality products across diverse industries. Our unwavering commitment to innovation and sustainability drives us to set new standards in every venture we undertake.</h2>
                <p className="col-start-1 col-span-6 text-[#29253D] h-min">For over 30 years, Nasir Group of Industries stands as a beacon of excellence in the manufacturing has been developing solutions that have its identity in the projects it built.</p>
                <Button text="Know More About Us" textColor="text-white" bgColor="bg-blue-800" />
              </article>
        </section>
        <section className="">
          <article className='grid grid-cols-2 grid-rows-2'>
            <div className="overflow-hidden row-span-2">
              <div style={{ transform:`translateY(${scrollY * -0.08}px)` }}>
                <Image className="" src={YearsOfExp} alt="Image" width={800} height={800} />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <Card cardNum="20+" numSize="text-8xl" cardText="years of experience" textSize="text-xl" position="col-span-1" width={100} borderDesign="border-r-2 border-gray-200" />
              <Card cardNum="11" numSize="text-8xl" cardText="sister concern we have" textSize="text-xl" position="col-span-1" width={100} borderDesign="border-gray-200"/>
              <Card cardNum="45,000+" numSize="text-8xl" cardText="employees nationwide" textSize="text-xl" position="col-span-2" width={100} borderDesign="border-t-2 border-gray-200"/>
            </div>  
          </article>
        </section>
        <section className="grid grid-cols-2 grid-row-2 justify-center">
          <div className="overflow-hidden col-span-2">
          <Image className="mx-auto object-cover" src="/history-image.jpg" width={1000} height={1000} alt="factory image" />
          </div>
          <div style={{ transform: `translateY(${scrollY * -0.06}px)` }} className="bg-[rgba(0,0,0,0.01)] ml-56 col-span-2">
            <h1 className="text-[10.25rem] text-blue-900 text-left font-bold tracking-wider bg-transparent">History</h1>
          </div>
        </section>
        <section className="px-36 h-screen">
          <Carousel data={carousel_data} />
        </section>
      </main>
    </Content>
  );
}
