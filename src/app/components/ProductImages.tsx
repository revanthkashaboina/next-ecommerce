"use client"
import Image from 'next/image'
import React, { useState } from 'react'

// const images = [
//   { id: 1, url: "https://images.pexels.com/photos/22669491/pexels-photo-22669491/free-photo-of-traditional-yellow-lanterns-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//   { id: 2, url: "https://images.pexels.com/photos/26606457/pexels-photo-26606457/free-photo-of-close-up-of-colorful-stars-christmas-decoration.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//   { id: 3, url: "https://images.pexels.com/photos/19560861/pexels-photo-19560861/free-photo-of-historic-tram-28-on-a-narrow-alley-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
//   { id: 4, url: "https://images.pexels.com/photos/29803469/pexels-photo-29803469/free-photo-of-majestic-hight-tatras-mountains-in-slovakia-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }
// ]

const ProductImages = ({items}:{items:any}) => {

  const [index, setIndex] = useState(0)

  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image src={items[index].image?.url} alt="" fill sizes='50vw' className='object-cover rounded-md' />
      </div>
      <div className='flex justify-between gap-4 mt-8 '>
        {
          items.map((item:any, i:number) => (
            <div className='w-1/4 h-32 relative mt-8 cursor-pointer' key={item._id} onClick={()=> setIndex(i)}>
              <Image src={item.image?.url} alt="" fill sizes='30vw' className='object-cover rounded-md' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductImages