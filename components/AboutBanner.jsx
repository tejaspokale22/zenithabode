import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="py-8 w-full bg-white md:py-12">
      <div className="grid grid-cols-1 gap-0 items-stretch px-4 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-x-12 sm:px-6">
        {/* Left Column: Office Image with Circular Text */}
        <div className="relative flex flex-col h-full min-h-[300px]">
          <Image
            src="/image/badroom.jpg"
            alt="Office Room"
            width={800}
            height={900}
            className="object-cover w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-full min-h-[180px] max-h-[700px] rounded-xl"
            priority
          />
        </div>

        {/* Right Column: Top (Text) and Bottom (Living Room Image) */}
        <div className="flex flex-col justify-between h-full">
          {/* Top: Text Content */}
          <div className="flex relative z-10 flex-col flex-1 justify-start pt-2 pb-4 bg-white md:pb-8">
            <span className="text-xs tracking-widest text-[#bfa46f] font-semibold">ABOUT US</span>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Have A Project? Let's <br /> Discuss It
            </h2>
            <p className="mt-4 max-w-lg text-xs text-gray-500 sm:text-sm">
              Fusce accumsan tincidunt erat et convallis risus ullamcorper eu vehicula massa a massa cursus
            </p>
            <hr className="my-4 border-gray-200 md:my-6" />
            <ul className="mb-6 space-y-2 md:mb-8">
              <li className="flex gap-2 items-center text-xs font-medium text-gray-800 sm:text-sm">
                <span className="text-[#bfa46f] text-lg">✦</span> Essential Design Program
              </li>
              <li className="flex gap-2 items-center text-xs font-medium text-gray-800 sm:text-sm">
                <span className="text-[#bfa46f] text-lg">✦</span> Dedicated Design Program
              </li>
              <li className="flex gap-2 items-center text-xs font-medium text-gray-800 sm:text-sm">
                <span className="text-[#bfa46f] text-lg">✦</span> White Gloves Design Program
              </li>
            </ul>
          </div>
          {/* Bottom: Living Room Image */}
          <div className="w-full">
            <Image
              src="/image/living.jpg"
              alt="Living Room"
              width={800}
              height={350}
              className="rounded-xl object-cover w-full h-[140px] sm:h-[200px] md:h-[250px] lg:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
