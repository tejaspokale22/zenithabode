import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex justify-between items-center pb-4">
                <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">An aesthetic room is <br />given harmony</a>
                <p className="tracking-wider text-gray-400">WORLD AWARD</p>
            </div>
            <div className="grid place-items-center lg:grid-cols-2">
                <div>
                    <Image src="/image/aboutfront.png" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">
                    <p className="px-12 pb-4">
                        ZenithAbode is a company engaged in the field of interior design. We provide exceptional interior design solutions tailored for your home. Trusted by countless clients, we bring style, comfort, and functionality to every space we design. Our work has been recognized globally, earning us multiple awards from various countries..
                    </p>
                    <div className="flex gap-x-4 px-12 pt-4">
                        <Image src="/image/awards.png" width={100} height={80} alt="" className=" h-[100px]" />
                        <Image src="/image/awards1.png" width={100} height={80} alt="" className=" h-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}