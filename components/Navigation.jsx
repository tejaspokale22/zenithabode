"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { TbArrowUpRight, TbMenu2, TbX } from "react-icons/tb";

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT US' },
];

export default function Navigation({ isMenuOpen, setMenuOpen, onlyLinks }) {
    const pathname = usePathname();
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    if (onlyLinks) {
        // Only render nav links for center section (desktop)
        return (
            <nav className="hidden gap-x-6 items-center lg:flex">
                {nav.map(({ href, label }) => (
                    <Link key={href} href={href} className={
                        pathname === href ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                    }>
                        {label}
                    </Link>
                ))}
            </nav>
        );
    }

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
            <nav className="hidden gap-x-6 items-center lg:flex">
                {nav.map(({ href, label }) => (
                    <Link key={href} href={href} className={
                        pathname === href ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                    }>
                        {label}
                    </Link>
                ))}
            </nav>
            {/* Couch Corner Button only */}
            <div className="">
                <Link href="/e-home" className="hidden items-center px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-full border border-gray-400 shadow-sm lg:inline-flex hover:bg-gray-100">
                    Couch Corner <TbArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white lg:hidden">
                    <nav className="flex flex-col gap-y-6 justify-center items-center h-full">
                        {nav.map(({ href, label }) => (
                            <Link key={href} href={href} className={
                                `text-xl ${pathname === href ? 'text-black font-semibold' : 'text-gray-600'}`
                            } onClick={toggleMenu}>
                                {label}
                            </Link>
                        ))}
                        <div>
                        <Link href="/e-home" className="inline-flex items-center px-5 py-2 font-medium text-white bg-black rounded-full shadow-lg" onClick={toggleMenu}>
                            Couch Corner <TbArrowUpRight className="ml-2 w-4 h-4" />
                        </Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}