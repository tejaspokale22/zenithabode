import Image from "next/image";
import assets from "@/public/assets";
import Navigation from "./Navigation";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 backdrop-blur-lg bg-zinc-100">
            <div className="container flex justify-between items-center py-8">

                <div className="flex items-center" style={{ width: 160, height: 40 }}>
                    <Image 
                        src={assets.logo} 
                        alt="logo" 
                        width={160} 
                        height={40} 
                        className="object-contain w-full h-full" 
                        priority
                    />
                </div>

                <Navigation />
            </div>
        </div>
    );
}