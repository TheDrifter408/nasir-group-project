import { CarouselItemProps } from "../types";

export default function CarouselItem({id,year,title,imagePath,desc}:CarouselItemProps){
    
    return(
        <div className="w-[100%] flex-shrink-0 flex items-center border border-red-500">
            <h1 className="carouselItem_h1 text-[5rem] font-extrabold rotate-180 leading-[100%]" >{year}</h1>
            <div className="grid border border-black">
                <div className=" h-40 border border-green-500">
                    <p>{imagePath}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}