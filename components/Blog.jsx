import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    image: '/image/gallery8.jpg',
    category: 'FURNITURE',
    date: 'May 25, 2024',
    title: 'Detailed Accents on Custom of Built Office Design',
    link: '/blog/post-1'
  },
  {
    image: '/image/swiper2.jpg',
    category: 'WOOD CUTTING',
    date: 'May 28, 2024',
    title: 'We specialize in restoring antique Interior design',
    link: '/blog/post-2'
  },
  {
    image: '/image/gallery8.jpg',
    category: 'CRAFTING',
    date: 'May 31, 2024',
    title: 'We creating in the Unique of interior showcasing',
    link: '/blog/post-3'
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#292f36] mb-2">
            Check Latest Blog Post
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-[#292f36]">
            From Blog List
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="p-5 rounded-3xl">
              <div className="overflow-hidden mb-4 rounded-2xl">
                <Link href={post.link}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={400} 
                    height={300} 
                    className="object-cover w-full h-auto" 
                  />
                </Link>
              </div>
              <div>
                <div className="flex items-center mb-3 text-sm text-gray-600">
                  <span className="inline-block mr-3 w-8 h-px bg-gray-900"></span>
                  <span className="font-semibold">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h4 className="text-2xl font-bold text-[#292f36] leading-tight">
                  <Link href={post.link}>
                    {post.title}
                  </Link>
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
