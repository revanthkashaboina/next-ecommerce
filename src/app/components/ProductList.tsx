import { products } from '@wix/stores';
import { wixClientServer } from '../../lib/wixClientServer';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20
const ProductList = async ({ categoryId, limit, searchParams }: { categoryId: string; limit?: number; searchParams?: any }) => {

    const wixClient = wixClientServer();
    const response = await wixClient.products.queryProducts().eq("collectionIds", categoryId).limit(limit || PRODUCT_PER_PAGE).find();
    // console.log(response);

    return (
        <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            {response.items.map((product: products.Product) => (

                <Link href={"/" + product.slug} key={product._id} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className='relative w-full h-80'>
                        <Image src={product.media?.mainMedia?.image?.url || "/product.png"}
                            alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                        />
                        {product.media?.items && (
                            <Image src={product.media?.items[1]?.image?.url || "/product.png"}
                                alt="" fill sizes='25vw' className='absolute object-cover rounded-md'
                            />
                        )}
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium'>{product.name}</span>
                        <span className='font-semibold'>${product.price?.price}</span>
                    </div>
                    {product.additionalInfoSections && (
                        <div className='text-sm text-gray-500' dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(product.additionalInfoSections.find(
                                (section: any) => section.title === "shortDesc"
                            )?.description || "")
                        }}>
                        </div>
                    )}
                    <button className='rounded-2xl ring-1 ring-cartColor text-cartColor w-max py-2 px-4 text-xs hover:bg-cartColor hover:text-white'>Add to cart</button>
                </Link>

            ))}
        </div>
    )
}

export default ProductList