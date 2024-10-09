'use client';
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { useState } from "react";
  
export default function Header() {
    const [isOpen,setOpen] = useState(false);
    function onClick(){
      setOpen((prev) => !prev);
    }
    return (
        <header className={`relative z-20 w-full m-0 flex items-center justify-between py-4 px-6 transition-colors duration-500 ${isOpen ? 'bg-gradient-to-b from-blue-700 to-blue-800' : 'bg-gradient-to-r from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.0)]'}`}>
        <div className="z-10">
          <Image src={Logo} alt="Nasir Group Logo" />
        </div>
        <button className="grid gap-[2px] content-center z-10 rounded-full h-10 w-10 bg-white text-black lg:hidden" onClick={onClick}>
          <div className={`h-[2px] w-[50%] mx-auto bg-black origin-center transition-transform duration-700 ${isOpen ? 'translate-y-[4px] rotate-45':'rotate-0'}`} />
          <div className={`h-[2px] w-[50%] mx-auto bg-black transition-transform duration-700 ${isOpen ? 'scale-0' : 'scale-100'}`} />
          <div className={`h-[2px] w-[50%] mx-auto bg-black transition-transform duration-700 ${isOpen ? '-translate-y-[4px] -rotate-45':'rotate-0'}`} />
        </button>
        <nav className="sm:hidden md:hidden lg:block text-white font-bold opacity-100">
          <ul className="flex gap-4">
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">Home</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">About Us</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">Concerns</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">News & Media</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">Career</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">Contact Us</a></li>
          </ul>
        </nav>
        <div className={`absolute left-0 w-full transition-transform duration-500 ${isOpen ? 'translate-y-[24rem]' : '-translate-y-[25rem]'}`}>
          <nav className="bg-blue-700 pt-4 h-screen">
              <ul>
                <li className="w-[95%] mx-auto pb-4  mt-4 border-b border-white">
                  <a className="text-white text-xl px-2 font-semibold" href="">Home</a></li>
                <li className="w-[95%] mx-auto pb-4  mt-4 border-b border-white">
                  <a className="text-white text-xl px-2 font-semibold" href="">About Us</a></li>
                <li className="w-[95%] mx-auto pb-4  mt-4 border-b border-white">
                  <a className="text-white text-xl px-2 font-semibold" href="">Concerns</a></li>
                <li className="w-[95%] mx-auto pb-4  mt-4 border-b border-white">
                  <a className="text-white text-xl px-2 font-semibold" href="">News & Media</a></li>
                <li className="w-[95%] mx-auto pb-4  mt-4 border-b border-white">
                  <a className="text-white text-xl px-2 font-semibold" href="">Career</a></li>
                <li className="w-[95%] mx-auto pb-4  mt-4 border-b border-white">
                  <a className="text-white text-xl px-2 font-semibold" href="">Contact Us</a></li>
              </ul>
          </nav>
        </div>
      </header>
    )
}