'use client'
import { FormEvent, useState } from "react"
import { FaArrowRight } from "react-icons/fa6";

export default function  Form(){
    const [formInput,setForm] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNum:"",
        message:""
    });

    function handleOnChange(name:string,value:string){
        setForm({
            ...formInput,
            [name]:value
        });
    }

    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(e);
    }

    return (
        <section className="grid gap-2 px-4">
            <h1 className="text-[2.25rem] text-blue-700 font-bold">Get in touch</h1>
            <p className="text-black text-xl my-4">Send us a note to get the conversation started - or click on an office below for more information on our locations</p>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                    <label className="text-xl" htmlFor="firstName">First Name*</label>
                    <input placeholder="John" className="text-xl border-b-[1px] border-black p-1 focus:outline-none" type="text" name="firstName" id="firstName" value={formInput.firstName} onChange={(e) => handleOnChange(e.target.name,e.target.value)} required />
                </div>
                <div className="grid">
                    <label className="text-xl"  htmlFor="lastName">Last Name*</label>
                    <input placeholder="Doe" className="text-xl border-b-[1px] border-black p-1 focus:outline-none" type="text" name="lastName" id="lastName" value={formInput.lastName} onChange={(e) => handleOnChange(e.target.name,e.target.value)} required />
                </div>
                <div className="grid">
                    <label className="text-xl"  htmlFor="email">Email*</label>
                    <input placeholder="your@email.com" className="text-xl border-b-[1px] border-black p-1 focus:outline-none" type="text" name="email" id="email" value={formInput.email} onChange={(e) => handleOnChange(e.target.name,e.target.value)} required />
                </div>
                <div className="grid">
                    <label className="text-xl"  htmlFor="phoneNum">Phone Number*</label>
                    <input placeholder="01...." className="text-xl border-b-[1px] border-black p-1 focus:outline-none" type="text" maxLength={11} name="phoneNum" id="phoneNum" value={formInput.phoneNum} onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
                </div>
                <div className="grid">
                    <label className="text-xl"  htmlFor="message">Message*</label>
                    <textarea placeholder="My message is" rows={4} className="text-xl border-b-[1px] border-black p-1 focus:outline-none" name="message" id="message" value={formInput.message} onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
                </div>
                <button type="submit" className="text-white group w-44 flex items-center justify-center gap-2 bg-blue-800 py-2 px-2">Submit Message
                    <div><FaArrowRight className="text-[0.9rem] -rotate-45 transition-transform group-hover:rotate-0" /></div>
                </button>
            </form>
        </section>
    )
}