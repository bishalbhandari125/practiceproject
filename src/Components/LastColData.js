import React from 'react'

const counts = [
    {
        no: 1200,
        name:'Tokens',
    },
    {
        no: 4000,
        name:'Entities',
    },
    {
        no: 1000,
        name:'Clean Tokens',
    },
    {
        no: 1200,
        name:'Noun Chunks',
    },
]

const LastColData = () => {
  return (
    <div className="relative flex h-full w-24 flex-col overflow-y-auto  bg-black ">
    <div className='flex flex-col w-auto'>
       <div className='h-auto w-full grid-cols-1 space-y-4 mt-5 '>
       { counts.map((count , index) =>(
        <div key={index} className=" mx-1 text-center rounded-lg  bg-black cursor-pointer hover:bg-white hover:text-black">
        <h2 className="order-1 text-sm  font-bold  text-gray-300">{count.no}</h2>
        <span className="order-2 text-xs text-gray-300">{count.name}</span>
        </div>
     ))}
    </div>
       

  </div>
</div>
  )
}

export default LastColData
