import { CarouselItemProps } from "../types";

export default function CarouselItem({id,year,title,imagePath,desc}:CarouselItemProps){
    
    return(
        <div>
            <h1>{year}</h1>
            <div>
                <div>
                    <p>{imagePath}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}