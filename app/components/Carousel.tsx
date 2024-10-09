'use client';
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import { CarouselItemProps, CarouselProps } from "../types";
import { carousel_data } from "../dummy_data/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Carousel({ data }:CarouselProps){
    const [currentItem,setItem] = useState({
        id:data[0].id,
        title:data[0].title,
        year:data[0].year
    });
    return (
        <div className="grid h-[26rem] overflow-hidden border border-black w-full mx-auto">
            <div className="w-full flex gap-[3px] justify-end px-5 py-1 ">
                <button className="group rotate-45 rounded-full w-10 h-10 transition duration-500 origin-center bg-blue-700/10 hover:bg-blue-700 hover:rotate-0">
                    <FaArrowLeft className="mx-auto h-4 w-4 text-white" />
                </button>
                <button className="group -rotate-45 rounded-full w-10 h-10 transition duration-500 origin-center bg-blue-700/10 hover:bg-blue-700 hover:rotate-0">
                    <FaArrowRight className="mx-auto h-4 w-4 text-white" />
                </button>
            </div>
            <div className="">
                <div>
                    <h2 className="font-semibold text-blue-800 text-2xl w-[50%]">{currentItem.title}</h2>
                    <div className="h-1 my-2 w-[99%] rounded mx-auto bg-blue-700/10">
                    <span className="h-1 rounded-full "></span>
                    </div>
                    <h3 className="font-semibold text-black">{currentItem.year}</h3>
                </div>
                <div className="overflow-x-hidden flex">
                    {
                        carousel_data.map((data:CarouselItemProps) => (
                            <CarouselItem key={data.id} {...data} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}