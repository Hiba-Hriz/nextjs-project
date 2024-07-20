'use client';
import { MenuIcon, XIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { buttonVariants } from './button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropdownMenu from './DropdownMenu';

const NavbarClient = () => {
    const [toggle, setToggle] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setToggle(false);
    }, [pathname]);

    const handleLinkClick = (href: string) => {
        if (pathname === href) setToggle(false);
    };

    return (
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <button
                onClick={() => setToggle(prevState => !prevState)}
                className="w-[28px] h-[28px] object-contain"
            >
                {toggle ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
            <div className={`${!toggle ? "hidden" : "block"} p-6  absolute top-16 right-0 my-1 min-w-[20rem] bg-slate-900 rounded-xl shadow-lg`} >
                <ul className="list-none flex  flex-col space-y-1 ">
                    
                        <Link href='/Formation' className={`${buttonVariants({variant: 'ghost', size: 'sm'})} link-hover-effect`}>
                            FORMATION
                        </Link>
                    
                    <li>
                        <button
                            onClick={() => setDropdownOpen(prev => !prev)}
                            className={`${buttonVariants({variant: 'ghost', size: 'sm'})} link-hover-effect w-full text-left`}
                        >
                            NOS SOLUTIONS
                        </button>
                        {dropdownOpen && (
                            <div className="ml-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                                
                                <Link href="/sign-in" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">
                                    OCTAL ERP
                                </Link>
                            
                                <Link href="/Solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">
                                    OCTAL SOLUTIONS
                                </Link>
                                
                            </div>
                        )}
                    </li>
                    
                        <Link href='/Contact' className={`${buttonVariants({variant: 'ghost', size: 'sm'})} link-hover-effect`}>
                            CONTACT
                        </Link>
                    
                    
                        <Link href='/sign-in' onClick={() => handleLinkClick('/sign-in')} className={`${buttonVariants({variant: 'ghost', size: 'sm'})} link-hover-effect`}>
                            SE CONNECTER
                        </Link>
                    
                        <Link href='/sign-up' onClick={() => handleLinkClick('/sign-up')} className={`${buttonVariants({variant: 'ghost', size: 'sm'})} link-hover-effect`}>
                            S&apos;INSCRIRE
                        </Link>
                    
                </ul>
            </div>
        </div>
    );
};

export default NavbarClient;