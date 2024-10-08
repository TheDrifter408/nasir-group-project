'use client';
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import { CarouselItemProps, CarouselProps } from "../types";
import { carousel_data } from "../dummy_data/data";

export default function Carousel({ data }:CarouselProps){

    return (
        <div className="grid border border-black">
            <div className="flex gap-2 justify-end">
                <button>left</button>
                <button>right</button>
            </div>
            <div className="grid">
                <div>
                    <h2>title</h2>
                    <h3>Year</h3>
                </div>
                <div className="flex gap-2">
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