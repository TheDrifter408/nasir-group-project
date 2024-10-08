import Image from "next/image";
import Logo from "@/public/Logo.svg";
  
export default function Header() {
    return (
        <header className="absolute w-full z-10 flex items-center justify-between mx-auto p-6 ">
        <div>
          <Image src={Logo} alt="Nasir Group Logo" />
        </div>
        <nav className="text-white font-bold opacity-100">
          <ul className="flex gap-4">
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">Home</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">About Us</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">Concerns</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">News & Media</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">Career</a></li>
            <li><a className=" transition-colors duration-100 hover:text-blue-700" href="">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    )
}