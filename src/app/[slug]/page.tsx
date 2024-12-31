import React from 'react'
import ProductImages from '../components/ProductImages'
import CustomizeProducts from '../components/CustomizeProducts'
import Add from '../components/Add'
import { wixClientServer } from '@/lib/wixClientServer'
import { notFound } from 'next/navigation'

const SinglePage = async ({ params }: { params: { slug: string } }) => {

  const productSlug = params.slug;
  const wixClient = wixClientServer();
  const products = await wixClient.products.queryProducts().eq("slug", productSlug).find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];
  console.log(product);

  return (
    <div className='px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMAGE */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>{product.name}</h1>
        <p className='text-gray-500'>{product.description}</p>
        <div className='h-[2px] bg-gray-100' />
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className='font-medium text-2xl'>${product.price?.price}</h2>
        ) : (
          <div className='flex items-center gap-4'>
            <h3 className='text-xl text-gray-500 line-through'>${product.price?.price}</h3>
            <h2 className='font-medium text-2xl'>${product.price?.discountedPrice}</h2>
          </div>
        )}
        <div className='h-[2px] bg-gray-100' />
        <CustomizeProducts />
        <Add />
        <div className='h-[2px] bg-gray-100' />
        {product.additionalInfoSections?.map((section: any) => (
          <div className='text-sm' key={section.title}>
            <h4 className='font-medium mb-4'>{section.title}</h4>
            <p className='text-justify'>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SinglePage