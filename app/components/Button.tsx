'use client'
import { ButtonProps } from "../types";
import { IconContext } from "react-icons";
import { FaArrowRight } from 'react-icons/fa6';

export default function Button({bgColor,text,textColor}:ButtonProps){
    return (
        <button className={`group col-start-1 col-span-4 h-min p-2 w-[50%] flex items-center justify-evenly ${textColor} ${bgColor}`}>
            {text}
        <IconContext.Provider value={{ color:'inherit'}}>
            <span className="transition-transform duration-300 -rotate-45 group-hover:rotate-0">
                <FaArrowRight />
            </span>
        </IconContext.Provider>
        
        </button>
    )
}