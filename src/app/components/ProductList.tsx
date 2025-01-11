import { products } from '@wix/stores';
import { wixClientServer } from '../../lib/wixClientServer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = wixClientServer();

    // console.log("categoryId===================",categoryId)

  // Build product query
  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome("productType", searchParams?.type ? [searchParams.type] : ["physical", "digital"])
    .gt("priceData.price", parseFloat(searchParams?.min) || 0)
    .lt("priceData.price", parseFloat(searchParams?.max) || 999999);        

  // Handle sorting
  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortBy === "price" || sortBy === "lastUpdated") {
      if (sortType === "asc") {
        productQuery = productQuery.ascending(sortBy);
      } else if (sortType === "desc") {
        productQuery = productQuery.descending(sortBy);
      }
    }
  }

  productQuery = productQuery.limit(limit || PRODUCT_PER_PAGE);

  const res = await productQuery.find();

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          key={product._id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-cartColor text-cartColor w-max py-2 px-4 text-xs hover:bg-cartColor hover:text-white">
            Add to cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
