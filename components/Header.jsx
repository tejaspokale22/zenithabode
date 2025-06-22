"use client";
import Image from "next/image";
import assets from "../public/assets.js";
import Navigation from "./Navigation";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky inset-x-0 top-0 z-30 bg-opacity-60 backdrop-blur-lg bg-zinc-100">
            <div className="container flex justify-between items-center px-4 py-4 sm:px-6 md:px-8">

                <div className="w-28 h-auto sm:w-36">
                    <Image 
                        src={assets.logo} 
                        alt="logo" 
                        width={140} 
                        height={35} 
                        className="object-contain w-full h-full" 
                        priority
                    />
                </div>
                <Navigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            </div>
        </div>
    );
}