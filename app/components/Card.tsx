import { CardProps } from "../types";

export default function Card({cardNum,numSize,cardText,textSize,position, width, borderDesign}:CardProps){
    return (
        <div className={`text-blue-800 p-6 flex flex-col items-center justify-center ${position} w-[${width}%] ${borderDesign}`}>
            <h2 className={`font-bold ${numSize}`}>{cardNum}</h2>
            <p className={`text-wrap ${textSize}`}>{cardText}</p>
        </div>
    )
}