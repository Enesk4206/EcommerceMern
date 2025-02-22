import React from 'react'
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io";
import {RiTwitterXLine} from "react-icons/ri"

const Topbar = () => {
    return (
        <div className='bg-rabbit-red text-white'>
            <div className='md:max-w-7xl sm:max-w-3xl mx-auto flex justify-between items-center py-3 px-4'>
                <div className='hidden md:flex  items-center space-x-4'>
                    <a href="" className='hover:text-gray-300'>
                        <TbBrandMeta className='h-4 w-4' />
                    </a>
                    <a href="" className='hover:text-gray-300'>
                        <IoLogoInstagram className='h-4 w-4' />
                    </a>
                    <a href="" className='hover:text-gray-300'>
                        <RiTwitterXLine className='h-4 w-4' />
                    </a>
                </div>
                <div className=' text-sm text-center flex-grow'>
                    <span>We ship worlwide - Fast and reliable shipping!</span>
                </div>
                <div className='hidden md:block text-sm'>
                    <a href="tel:+13244222" className='hover:text-gray-300'>+1 (132)44222</a>
                </div>
              
            </div>
        </div>
    )
}

export default Topbar