"use client";
import Image from "next/image";
import assets from "../public/assets.js";
import Navigation from "./Navigation";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky inset-x-0 top-0 z-30 bg-opacity-60 backdrop-blur-lg bg-zinc-100">
            <div className="container flex justify-between items-center px-4 py-4 sm:px-6 md:px-8">
                <div className="flex-shrink-0 w-28 h-auto sm:w-36">
                    <Image 
                        src={assets.logo} 
                        alt="logo" 
                        width={140} 
                        height={35} 
                        className="object-contain w-full h-full" 
                        priority
                    />
                </div>
                <div className="flex flex-1 justify-center">
                    <Navigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} onlyLinks />
                </div>
                <div className="hidden flex-shrink-0 gap-x-2 items-center lg:flex">
                    <a
                        href="/e-home"
                        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full border border-yellow-600 shadow-sm hover:from-yellow-600 hover:to-yellow-800"
                    >
                        Couch Corner
                        <TbArrowUpRight className="ml-1 w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}