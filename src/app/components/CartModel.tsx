"use client"
import Image from 'next/image'
import React from 'react'

const CartModel = () => {

    const cartItems = true

    return (
        <div className='absolute w-max p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {!cartItems ? (
                <div className=''>Cart is empty</div>) :
                (
                    <>
                        <h2 className='text-xl'>Shopping Cart</h2>
                        <div className='flex gap-4'>
                            <Image
                                src="https://images.pexels.com/photos/29525865/pexels-photo-29525865/free-photo-of-serene-winter-forest-path-in-tranquil-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                alt=""
                                width={72}
                                height={90}
                                className='object-cover rounded-md'
                            />

                            <div className='flex flex-col justify-between w-full'>
                                {/* TOP */}
                                <div>
                                    {/* TITLE */}
                                    <div className='flex items-center justify-between gap-4'>
                                        <h3 className='font-semibold'>Product Name</h3>
                                        <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                                    </div>
                                    {/* DESC */}
                                    <div className='text-sm text-gray-500'>
                                        available
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className='flex justify-between text-sm items-center'>
                                    <span className='text-gray-500'>Qty 1</span>
                                    <button className='p-2 rounded-md text-blue-500'>Remove</button>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM */}
                        <div className=''>
                            <div className='flex items-center justify-between font-semibold'>
                                <span className=''>Subtotal</span>
                                <span className=''>$49</span>
                            </div>
                            <p className='text-sm text-gray-500 mt-2 mb-4'>Shipping and taxes calculated at checkout</p>
                            <div className='flex  align-center justify-between text-sm'>
                                <button className=' py-3 px-4 rounded-md  ring-1 ring-gray-300'>View Cart</button>
                                <button className=' py-3 px-4 rounded-md bg-black text-white'>Checkout</button>
                            </div>
                        </div>
                    </>
                )}
        </div> 
    )
}

export default CartModel