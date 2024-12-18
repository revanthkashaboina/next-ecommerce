import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    return (
        <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] md:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/29525865/pexels-photo-29525865/free-photo-of-serene-winter-forest-path-in-tranquil-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill sizes='25vw' className='absolute object-cover rounded-md'
                    />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>Product Description</div>
                <button className='rounded-2xl ring-1 ring-cartColor text-cartColor w-max py-2 px-4 text-xs hover:bg-cartColor hover:text-white'>Add to cart</button>
            </Link>

            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] md:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/29525865/pexels-photo-29525865/free-photo-of-serene-winter-forest-path-in-tranquil-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill sizes='25vw' className='absolute object-cover rounded-md'
                    />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>Product Description</div>
                <button className='rounded-2xl ring-1 ring-cartColor text-cartColor w-max py-2 px-4 text-xs hover:bg-cartColor hover:text-white'>Add to cart</button>
            </Link>

            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] md:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/29525865/pexels-photo-29525865/free-photo-of-serene-winter-forest-path-in-tranquil-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill sizes='25vw' className='absolute object-cover rounded-md'
                    />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>Product Description</div>
                <button className='rounded-2xl ring-1 ring-cartColor text-cartColor w-max py-2 px-4 text-xs hover:bg-cartColor hover:text-white'>Add to cart</button>
            </Link>

            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] md:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src="https://images.pexels.com/photos/29525865/pexels-photo-29525865/free-photo-of-serene-winter-forest-path-in-tranquil-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt="" fill sizes='25vw' className='absolute object-cover rounded-md'
                    />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>Product Description</div>
                <button className='rounded-2xl ring-1 ring-cartColor text-cartColor w-max py-2 px-4 text-xs hover:bg-cartColor hover:text-white'>Add to cart</button>
            </Link>

        </div>
    )
}

export default ProductList