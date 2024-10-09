import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer(){
    return (
        <footer className="bg-gray-400/10 pt-16 grid grid-cols-2 lg:grid-cols-4 items-baseline">
            <div className="social-links p-4 flex gap-2 lg:col-start-1 lg:col-span-2">
                <FaFacebook className="text-2xl" />
                <FaInstagram className="text-2xl" />
                <FaLinkedin className="text-2xl" />
                <FaFacebook className="text-2xl" />
            </div>
            <div className="col-start-1 px-4 grid lg:col-start-3">
                <div className="my-2">
                    <h3 className="my-2 text-[0.875rem] font-semibold">Head Office</h3>
                    <h3 className="text-[0.875rem] font-semibold transition-colors duration-200 hover:text-blue-700">83,Suhrawardy Avenue, Baridhara, Dhaka 1212, Bangladesh</h3>
                </div>
                <div className="my-2">
                    <h3 className="my-2 text-[0.875rem] font-semibold">Phone Number</h3>
                    <h3 className="text-[0.875rem] font-semibold transition-colors duration-200 hover:text-blue-700">+880 2222281849</h3>
                </div>
                <div className="my-2">
                    <h3 className="my-2 text-[0.875rem] font-semibold">Email</h3>
                    <h3 className="text-[0.875rem] font-semibold transition-colors duration-200 hover:text-blue-700">export@nasir-group.biz</h3>
                </div>
                <div className="my-2">
                    <h3 className="my-2 text-[0.875rem] font-semibold">Industries</h3>
                    <h3 className="text-[0.875rem] text-nowrap font-semibold transition-colors duration-200 hover:text-blue-700">Nasir Biri Industries</h3>
                    <h3 className="text-[0.875rem] text-nowrap font-semibold transition-colors duration-200 hover:text-blue-700">Nasir Glass Industries Ltd.</h3>
                    <h3 className="text-[0.875rem] text-nowrap font-semibold transition-colors duration-200 hover:text-blue-700">Nasir Tobacco Industries</h3>
                    <h3 className="text-[0.875rem] text-nowrap font-semibold transition-colors duration-200 hover:text-blue-700">Bangladesh Melamine Industries</h3>
                    <h3 className="text-[0.875rem] text-nowrap font-semibold transition-colors duration-200 hover:text-blue-700">Nasir Printing & Packaging Industries Ltd</h3>
                </div>
            </div>
            <div>
                <div className="px-4">
                    <h3 className="my-2 ">Menu</h3>
                    <h3 className="my-2 ">Home</h3>
                    <h3 className="my-2 ">About Us</h3>
                    <h3 className="my-2 ">Industries</h3>
                    <h3 className="my-2 ">Career</h3>
                    <h3 className="my-2 ">Contact Us</h3>
                </div>
            </div>
            <div className="col-span-2 p-4">
                <p className="font-semibold">&copy; 2024, Nasir Group. All rights reserved.</p>
                <p className="font-semibold">Designed and Developed by Dcastalia</p>
            
            </div>
        </footer>
    )
}