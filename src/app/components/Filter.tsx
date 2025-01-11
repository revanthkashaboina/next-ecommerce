// "use client"
// import React from 'react'
// import { usePathname, useRouter, useSearchParams } from 'next/navigation'

// const Filter = () => {

//   const pathName = usePathname();
//   const searchParams = useSearchParams();
//   const {replace} = useRouter();

//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=>{
//     const {name, value} = e.target;
//     console.log(name, value);

//     console.log("pathName-===================", pathName);
//     console.log("searchParams-===================", searchParams);

//     const params = new URLSearchParams(searchParams);
//     params.set(name, value);
//     // replace(`${pathName}?${params.toString()}`);
//     replace(`${pathName}?${params.toString()}`)
//   }


//   return (
//     <div className='mt-12 flex justify-between'>
//       <div className='flex gap-6 flex-wrap'>
//         <select name="type" id='' onChange={handleFilterChange} className='py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] font-medium'>
//           <option>Type</option>
//           <option value="physical">Physical</option>
//           <option value="digital">Digital</option>
//         </select>

//         <input type='text' onChange={handleFilterChange} name='min' placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 ' />
//         <input type='text' onChange={handleFilterChange} name='max' placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 ' />

//         {/* <select name="type" id='' className='py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] font-medium'>
//           <option>Type</option>
//           <option value="physical">Physical</option>
//           <option value="digital">Digital</option>
//         </select> */}
//         <select name="cat" id='' onChange={handleFilterChange} className='py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] font-medium'>
//           <option>Category</option>
//           <option value="physical">New Arrival</option>
//           <option value="digital">Popular</option>
//         </select>
//         <select name="" id='' onChange={handleFilterChange} className='py-2 px-4 rounded-2xl text-xs bg-[#EBEDED] font-medium'>
//           <option>All Filters</option>
//           {/* <option value="physical">Physical</option>
//           <option value="digital">Digital</option> */}
//         </select>
//       </div>
//       <div className=''>
//         <select name="sort" id='' onChange={handleFilterChange} className='py-2 px-4 rounded-2xl text-xs bg-white font-medium ring-1 ring-gray-400'>
//           <option>Sort By</option>
//           <option value="asc price">Price (low to high)</option>
//           <option value="desc price">Price (high to low)</option>
//           <option value="asc lastUpdated">Newest</option>
//           <option value="desc lastUpdated">Oldest</option>
//         </select>
//       </div>
//     </div>
//   )
// }

// export default Filter


"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/* TODO: Filter Categories */}
        <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;