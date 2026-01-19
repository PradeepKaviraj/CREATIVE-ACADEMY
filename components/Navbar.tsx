'use client'
import React from 'react'
import Image from 'next/image';
import Creative from '@/public/Capture.png';
import { usePathname } from "next/navigation";
import Link from 'next/link';

const Navbar = () => {
    const pathname = usePathname();
    const navItems = [
        { name: "Home", href: "/" }, 
        { name: "Who We Are", href: "/who-we-are" }, 
        { name: "Courses", href: "/course" },
        { name: "Student's Corner", href: "/students-corner" },
        { name: "Contact Us", href: "/contact" },];
    return (
        <nav className='bg-[#F5FAFF] lg:px-10 xl:px-20 h-full shadow-xs relative z-50' >
            <div className='flex  justify-between items-center px-10 '>
                <div className='my-2 w-16 h-24 relative'>
                    <Image src={Creative} alt="Logo"></Image>
                </div>
                <div>
                    <ul className='hidden md:flex font-semibold font-montserrat gap-5 text-sm lg:gap-8  xl:gap-12 outline-none'>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className={pathname === item.href ? "text-[#000080] font-bold border-b-2 border-[#F5CC00] outline-none" : " text-[#000000] hover:text-[#000080] relative hover:-top-0.5 outline-none"} >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar