import Image from "next/image";
import Link from "next/link";
import assets from "@/public/assets";

const projects = [
  {
    category: "Bedroom",
    title: "The Fox House",
  },
  {
    category: "Furniture",
    title: "Minimalism",
  },
  {
    category: "Interior",
    title: "House Lighting",
  },
  {
    category: "Bedroom",
    title: "The Fox House",
  },
];

const LatestProject = () => {
  return (
    <section className="py-6 bg-white sm:py-8 md:py-10 lg:py-14">
      <div className="px-2 mx-auto xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link href="/" title="" className="inline-block">
            <Image
              className="mx-auto w-auto h-7 xs:h-8 sm:h-10"
              src={assets.logo}
              alt="logo"
              width={100}
              height={32}
            />
          </Link>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 xs:mt-6 xs:text-3xl sm:text-4xl lg:text-5xl">
            Our Latest Project
          </h2>
        </div>

        <div className="overflow-hidden relative mt-8 xs:mt-10 sm:mt-12">
          <div className="absolute inset-0">
            <Image
              className="object-cover w-full h-[260px] xs:h-[340px] sm:h-[420px] md:h-[500px] lg:h-[700px]"
              src={assets.gallery4}
              alt="background project"
              width={1920}
              height={1080}
            />
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-[220px] xs:h-[280px] sm:h-[340px] md:h-[420px] lg:h-[700px]">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex overflow-hidden relative items-end p-2 xs:p-3 sm:p-4 md:p-6 border-r group border-white/30 last:border-r-0"
              >
                <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t to-transparent transition-all duration-500 ease-in-out from-gray-200/90 group-hover:h-16 sm:group-hover:h-24 lg:group-hover:h-32"></div>

                <div className="relative z-10 w-full">
                  <p className="text-[11px] xs:text-xs sm:text-sm md:text-base font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900 break-words">
                    {project.category}
                  </p>
                  <h3 className="mt-0.5 xs:mt-1 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900 break-words">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
