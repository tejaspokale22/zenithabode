import Image from "next/image";
import Link from "next/link";

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
    <section className="py-10 bg-white sm:py-10 lg:py-14">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <Link href="/" title="" className="inline-block">
            <Image
              className="mx-auto w-auto h-8"
              src="/assets/logo.png"
              alt="logo"
              width={100}
              height={32}
            />
          </Link>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our Latest Project
          </h2>
        </div>

        <div className="overflow-hidden relative mt-12">
          <div className="absolute inset-0">
            <Image
              className="object-cover w-full h-full"
              src="/image/backgroundproject.jpg"
              alt="background project"
              width={1920}
              height={1080}
            />
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[500px] sm:h-[600px] lg:h-[700px]">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex overflow-hidden relative items-end p-6 border-r group border-white/30 last:border-r-0"
              >
                <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t to-transparent transition-all duration-500 ease-in-out from-gray-200/90 group-hover:h-32"></div>

                <div className="relative z-10">
                  <p className="text-sm font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
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
