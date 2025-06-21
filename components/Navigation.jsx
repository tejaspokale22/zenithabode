"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { TbArrowUpRight, TbMenu2, TbX } from "react-icons/tb";

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/gallery', label: 'GALLERY' },
];

export default function Navigation({ isMenuOpen, setMenuOpen }) {
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Hamburger Menu Button */}
            <button className="block lg:hidden" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <TbX className="w-6 h-6" />
                ) : (
                    <TbMenu2 className="w-6 h-6" />
                )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-x-6">
                {nav.map(({ href, label }) => (
                    <Link key={href} href={href} className={
                        pathname === href ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                    }>
                        {label}
                    </Link>
                ))}
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white lg:hidden">
                    <nav className="flex flex-col items-center justify-center h-full gap-y-6">
                        {nav.map(({ href, label }) => (
                            <Link key={href} href={href} className={
                                `text-xl ${pathname === href ? 'text-black font-semibold' : 'text-gray-600'}`
                            } onClick={toggleMenu}>
                                {label}
                            </Link>
                        ))}
                         <Link href="/contact" className="inline-flex items-center px-5 py-2 font-medium text-white bg-black rounded-full shadow-lg" onClick={toggleMenu}>
                            Contact Us <TbArrowUpRight className="ml-2 w-4 h-4" />
                        </Link>
                    </nav>
                </div>
            )}
            
            {/* Desktop Contact Button */}
            <Link href="/contact" className="hidden items-center px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-400 shadow-sm lg:inline-flex hover:bg-gray-100">
                Contact Us <TbArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
        </>
    )
}