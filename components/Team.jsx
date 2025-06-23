import Image from 'next/image';
import assets from '@/public/assets';

const teamMembers = [
  {
    name: 'Leslie Alexander',
    role: 'Designer',
    image: assets.t1,
  },
  {
    name: 'Bessie Cooper',
    role: 'Student',
    image: assets.t2,
  },
  {
    name: 'Annette Black',
    role: 'HR Neuro',
    image: assets.t3,
  },
  {
    name: 'Devon Lane',
    role: 'CEO Neuro',
    image: assets.t4,
  },
];

const ShareIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"></path></svg>
);


const Team = () => {
  return (
    <section className="overflow-hidden relative py-10 bg-white xs:py-14 sm:py-16 md:py-20">
        <div className="absolute bottom-0 left-0 -z-0">
            <Image src={assets.pyramid} alt="Pyramid background" width={800} height={800} />
        </div>
      <div className="relative px-2 xs:px-4 mx-auto max-w-[98%] sm:max-w-[90%] md:max-w-[85%]">
        <div className="flex flex-wrap -mx-2 xs:-mx-4">
          <div className="px-2 pt-10 mb-8 w-full xs:px-4 xs:pt-16 sm:pt-20 xs:mb-12 lg:w-5/12 lg:mb-0">
            <div className="max-w-md">
                <div className='relative'>
                    <h2 className="absolute -top-12 xs:-top-16 left-0 text-gray-200 text-5xl xs:text-7xl sm:text-8xl md:text-[100px] font-semibold opacity-40 tracking-widest">TEAM</h2>
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#292f36] z-10">Our Awesome Team Members</h3>
                </div>
              <p className="mb-6 text-sm text-gray-500 xs:mb-8 xs:text-base">
                To explore and go after new ways to build, we&apos;ve gathered the people, innovations, & partnerships that can anticipate & overcome new challenges.
              </p>
              <div className="flex items-center">
                <span className="text-3xl xs:text-4xl sm:text-5xl font-bold text-[#292f36] mr-3 xs:mr-4">4.20</span>
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-500 xs:text-sm sm:text-base">2,500 Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 w-full xs:px-4 lg:w-7/12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xs:gap-8">
              <div className="space-y-6 xs:space-y-8">
                {teamMembers.filter((_, i) => i % 2 === 0).map(member => (
                    <div key={member.name} className="bg-white rounded-3xl shadow-lg group">
                        <div className="relative">
                            <Image src={member.image} alt={member.name} width={300} height={400} className="w-full h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded-2xl object-cover" />
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t to-transparent opacity-0 transition-all duration-500 from-stone-200 group-hover:h-2/3 group-hover:opacity-100" />
                            <div className="absolute right-2 bottom-2 p-2 text-white bg-gray-800 rounded-full cursor-pointer xs:right-4 xs:bottom-4">
                            <ShareIcon />
                            </div>
                        </div>
                        <div className="p-3 text-center xs:p-4">
                            <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#292f36]">{member.name}</h4>
                            <p className="text-xs text-gray-500 xs:text-sm sm:text-base">{member.role}</p>
                        </div>
                    </div>
                ))}
              </div>
              <div className="mt-8 space-y-6 xs:mt-16 xs:space-y-8">
                  {teamMembers.filter((_, i) => i % 2 !== 0).map(member => (
                      <div key={member.name} className="bg-white rounded-3xl shadow-lg group">
                          <div className="relative">
                              <Image src={member.image} alt={member.name} width={300} height={400} className="w-full h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded-2xl object-cover" />
                              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t to-transparent opacity-0 transition-all duration-500 from-stone-200 group-hover:h-2/3 group-hover:opacity-100" />
                              <div className="absolute right-2 bottom-2 p-2 text-white bg-gray-800 rounded-full cursor-pointer xs:right-4 xs:bottom-4">
                              <ShareIcon />
                              </div>
                          </div>
                          <div className="p-3 text-center xs:p-4">
                              <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#292f36]">{member.name}</h4>
                              <p className="text-xs text-gray-500 xs:text-sm sm:text-base">{member.role}</p>
                          </div>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
