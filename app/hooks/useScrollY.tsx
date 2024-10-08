import { useEffect, useState } from "react";

export function useScroll(){
    const [scrollY,setScroll] = useState(0);
    useEffect(() => {
        function handleScroll(){
            setScroll(window.scrollY);
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);
    return scrollY;
}