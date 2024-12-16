import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/* MOBILE */}
            <div className='md:hidden h-full flex items-center justify-between'>
                <Link href='/' className='text-2xl font-bold'>E-Commerce</Link>
                <Menu />
            </div>

            {/* Bigger Screens */}
            <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                {/*LEFT  */}
                <div className='w-1/3'>
                    <Link href='/'  className='flex items-center gap-3'>
                        <Image src="/logo.png" alt="logo" width={24} height={24}/>
                        <div className='text-2xl font-bold'>E-Commerce</div>
                    </Link>
                </div>
                {/* RIGHT */}
                <div className='w-2/3 flex items-center justify-between gap-8'>
                   <SearchBar/>
                   <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default Navbar