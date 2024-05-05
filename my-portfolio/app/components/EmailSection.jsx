"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
            <h5 className="text-xl font-bold text-white my-2">
                Let's connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
            </p>
        </div>
        <div>
            <form className="flex flex-col ">
                <div className="mb-6">
               <label htmlFor="email" className="text-white block  mb-2 text-sm font-medium"> Your email</label>
               <input 
                    type="email" 
                    id="email" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="jacob@google.com">
               </input>
               </div>
               <div className="mb-6">
               <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium"> Subject</label>
               <input 
                    type="text" 
                    id="subject" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="just saying hi">
               </input>
               </div>
               <div className="mb-6">
               <label htmlFor="message" className="text-white block mb-2 text-sm font-medium"> Message</label>
               <textarea
                    type="text" 
                    id="message" 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about.... ">
               </textarea>
               </div>
               <button type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >Send Message

               </button>
               
            </form>
        </div>

    </section>

  )
}

export default EmailSection