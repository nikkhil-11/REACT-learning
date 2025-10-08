export default function Profile(){
   return(
     <div className="mt-7">
        <div className=" sm:flex  w-full  h-fit  ">
            <div className=" bg-blue-600 w-full sm:w-[30%] flex flex-col justify-self-center items-start text-white pl-9 xsm ">
                <h2 className="text-4xl font-bold  mt-9
                pt-19 pb-18 justify-items-center ">Our Latest Project</h2>
                <p className="mb-6 text-gray-200">Image from Freepik</p>
                <a href="#"
                className="px-8 py-3 border-2 border-white rounded-full font-semibold tracking-wide hover:bg-white hover:text-blue-600 transition">
                Read More
                </a>
            </div> 
            <div className="w-[100%] ">
               <img  src="/meeting.jpg" className="h-[490px] w-full object-cover "/>
            </div>
        </div>
     </div>
   ) 
}