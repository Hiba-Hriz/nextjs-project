import Link from 'next/link'; 
import MaxWidthWrapper from './MaxWidthWrapper'; 
import { buttonVariants } from './button'; 
import { LoginLink, RegisterLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'; 
import NavbarClient from './NavbarClient'; 
import Image from 'next/image';
import DropdownMenu from './DropdownMenu';

const Navbar = () => { 
    const { getUser } = getKindeServerSession();
    const user = getUser(); 
    return ( 
    <nav className='sticky top-0 z-30 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all'> 
        <MaxWidthWrapper> 
            <div className='flex h-14 items-center justify-between border-b'> 
                <Link href='/' className='flex z-40 font-semibold'> 
                    <Image src={"/logo.png"} alt="logo" height={150} width={100} className="w-[124px] h-[32px]" />
                </Link>
                <div className='hidden items-center space-x-4 sm:flex'>
                    <>
                        <Link
                            href='/Formation'
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            })+ ' link-hover-effect'} 
                        >
                            FORMATION
                        </Link>
                        
                        <DropdownMenu
                          className={buttonVariants({
                          variant: 'ghost',
                           size: 'sm',
                            }) + ' link-hover-effect'}
                          />
                        <Link
                            href='/Contact'
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            }) + ' link-hover-effect'}
                        >
                            CONTACT
                        </Link>
                        <LoginLink
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            }) + ' link-hover-effect'}
                        >
                            SE CONNECTER
                        </LoginLink>
                        <RegisterLink
                            className={buttonVariants({
                                size: 'sm',
                            }) + ' link-hover-effect'}
                        >
                            S&apos;INSCRIRE
                        </RegisterLink>
                    </>
                </div>
                <NavbarClient />
            </div>
        </MaxWidthWrapper>
    </nav>
    );
};

export default Navbar;