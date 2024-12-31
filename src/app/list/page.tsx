import Image from 'next/image'
import React, { Suspense } from 'react'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'
import { wixClientServer } from '@/lib/wixClientServer'

const ListPage = async({searchParams}:{searchParams:any}) => {

  const category = searchParams.cat;
  const wixClinet = await wixClientServer();
  const response = await wixClinet.collections.getCollectionBySlug(category);

  return (
    <div className='px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64'>
      {/* Campaign */}
      <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700 '>Grab up to 50% off on
            <br /> Selected Products</h1>
          <button className='bg-cartColor text-white font-semibold py-3 px-5 w-max rounded-3xl text-sm'>Buy Now</button>
        </div>
        <div className='relative w-1/3'>
          <Image src="/woman.png" alt="" fill className='object-contain' />
        </div>
      </div>

      {/* FILTER */}
      <Filter />
      {/* PRODUCTs */}
      <h1 className='mt-12 text-xl font-semibold py-2'>{response?.collection?.name}</h1>

      <Suspense fallback={"loading"}>
        <ProductList categoryId={response?.collection?._id || "00000000-000000-000000-000000000001"} 
        searchParams={searchParams}
        />
      </Suspense>
    </div>
  )
}

export default ListPage