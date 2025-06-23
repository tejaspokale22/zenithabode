import Image from "next/image";
import Link from "next/link";
import assets from "@/public/assets.js";

const blogPosts = [
  {
    image: assets.gallery8,
    category: "FURNITURE",
    date: "May 25, 2024",
    title: "Detailed Accents on Custom of Built Office Design",
    link: "/blog/post-1",
  },
  {
    image: assets.swiper2,
    category: "WOOD CUTTING",
    date: "May 28, 2024",
    title: "We specialize in restoring antique Interior design",
    link: "/blog/post-2",
  },
  {
    image: assets.gallery7,
    category: "CRAFTING",
    date: "May 31, 2024",
    title: "We creating in the Unique of interior showcasing",
    link: "/blog/post-3",
  },
];

const Blog = () => {
  return (
    <section className="py-8 bg-white md:py-14">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-block p-3 mb-4 bg-amber-50 rounded-2xl">
            <Image
              src={assets.logo}
              alt="logo"
              width={124}
              height={35}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <h2 className="text-2xl font-semibold text-[#292f36] md:text-3xl lg:text-4xl">
            Check Latest Blog Post <br /> From Blog List
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 items-start md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="group">
              <div
                className={`relative w-full overflow-hidden mb-4 transition-transform duration-500 ease-in-out group-hover:scale-95
                ${
                  index === 1
                    ? "h-[320px] md:h-[420px]"
                    : "h-[320px] md:h-[300px]"
                }`}
              >
                <Link href={post.link}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:-rotate-2"
                  />
                </Link>
              </div>
              <div>
                <div className="flex items-center mb-3 text-xs text-gray-500">
                  <span className="inline-block mr-2 w-6 h-px bg-gray-900"></span>
                  <span className="font-semibold tracking-wider uppercase">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h4 className="text-lg font-bold text-[#292f36] leading-tight transition-colors md:text-xl">
                  <Link href={post.link}>{post.title}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
