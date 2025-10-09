import React from "react";

function Card({userName,btnText}) {
    return(
        <><h1 className='bg-green-300 text-black p-4 mb-4 '>HIii welcome to tailwind</h1>
      <div className='flex justify-center w-full'>  
        <div className="flex flex-col rounded-md shadow-md bg-black text-gray-100 ">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 max-w-xs"
      />
      <div className="flex flex-col justify-between p-6 space-y-8 max-w-xs">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide ">{userName}</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
         {btnText}
        </button>
      </div>
    </div>
    </div>
    </>
   
    )
}

export default Card