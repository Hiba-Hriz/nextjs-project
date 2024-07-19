"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface DropdownMenuProps {
    className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleButtonClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    
    return (
        <div className="relative">
            <button
                className="relative z-10 block link-hover-effect text-black bg-white h-10 rounded-lg text-[17px] px-3 ${className || ''} transition-all duration-200"
                onClick={handleButtonClick}
            >
                NOS SOLUTIONS
            </button>
            {isOpen && (
                <div
                    className="absolute left-0 z-20 mt-2 w-auto origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                    <Link href="/sign-in" passHref legacyBehavior id='octal-erp'>
                        <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 link-hover-effect transition-all duration-200"
                            onClick={handleLinkClick}
                        >
                            OCTAL ERP
                        </a>
                    </Link>
                    <Link href="/Solutions" passHref legacyBehavior id='solutions'>
                        <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 link-hover-effect transition-all duration-200"
                            onClick={handleLinkClick}
                        >
                            OCTAL SOLUTIONS
                        </a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;