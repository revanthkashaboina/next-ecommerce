import { wixClientServer } from '../../lib/wixClientServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = async () => {
    const wixClinet = wixClientServer();
    const response = await wixClinet.collections.queryCollections().find();

    // console.log("response=====================", response);


    return (
        <div className='px-4 overflow-x-scroll scrollbar-hide'>
            <div className='flex gap-4 md:gap-8'>
                {response.items.map((item) => (
                    <Link href={`/list?cat=${item.slug}`} key={item._id} className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
                        <div className='relative bg-slate-100 w-full h-96'>
                            <Image src={item.media?.mainMedia?.image?.url || "/category.png"} alt='' fill sizes='20vw' className='object-cover' />
                        </div>
                        <h1 className='mt-8 font-light text-xl '>{item.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList