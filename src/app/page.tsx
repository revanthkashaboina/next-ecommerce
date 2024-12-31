// "use client"

import { Suspense, useEffect } from "react"
import CategoryList from "./components/CategoryList"
import ProductList from "./components/ProductList"
import Slider from "./components/Slider"
import { useWixClient } from "./hooks/useWixClient"
import { wixClientServer } from "../lib/wixClientServer"

const HomePage = async() => {
  // // client side calling
  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const resposne = await wixClient.products.queryProducts().find();
  //     console.log(resposne)
  //   }
  //   getProducts()
  // }, [wixClient])


  // // Server Side calling
  // const wixClient =  wixClientServer();
  // const resposne = await wixClient.products.queryProducts().find();
  // console.log(resposne);

  return (
    <div className=''>
      <Slider />
      <div className="mt-24  px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-5">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
        </Suspense>
      </div>

      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </div>

      <div className="mt-24  px-4 md:px-8  lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-5">New Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  )
}

export default HomePage