import { ReactNode } from "react";

export default function Content({ children }: { children:ReactNode }){
    return (
        <section className="relative h-screen w-full">
            <div className="absolute top-0 z-0 w-full">
              <video style={{ width: '100%', height:'100%'}} autoPlay loop muted>
                <source src="/home_video.mp4" type="video/mp4" />
              </video>
          </div>
            <div className="px-0 w-[85%] mx-auto">
            {children}
            </div>
        </section>
    )
}