import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";

export default function Boots() {
    const [isActive, setIsActive] = useState(false)
    return (
        <main className=" flex flex-col h-screen">
            <div className="flex justify-center items-center pt-10 pb-5">
                <h1 className="text-3xl font-sans justify-center">SPORTS SHOES</h1>
            </div>
            <div className="w-full flex justify-center ">
            <div className="flex justify-center w-fit bg-red-100 h-fit rounded-lg ">
                    <div className="flex gap-52 py-5 px-5 justify-center items-center">                   
                        <div>
                            <h3 className="flex items-center" onClick={() => setIsActive(!isActive)}>Product Type <HiChevronDown className={`${isActive? "font-bold text-red-600 " : "text-zinc-600"}`}/></h3>{/* product type */}
                            <select name="productType" id="producttype">
                                <option value="sports">Sports Shoes</option>
                                <option value="walking">General</option>
                                <option value="running">Sneakers</option>
                                <option value="training">Apparel Accesories</option>                 
                            </select>
                        </div>

                        <div>
                            <h3 className="flex items-center" onClick={() => setIsActive(!isActive)}>Size <HiChevronDown className={`${isActive? "font-bold text-red-600 " : "text-zinc-600"}`}/></h3>
                        </div>

                        <div>
                            <h3 className="flex items-center"  onClick={() => setIsActive(!isActive)}>Colour/Variant <HiChevronDown className={`${isActive? "font-bold text-red-600 " : "text-zinc-600"}`}/></h3>{/* colour/varient */}
                        </div>

                        <div>
                            <h3 className="flex items-center"  onClick={() => setIsActive(!isActive)}>Price Range <HiChevronDown className={`${isActive? "font-bold text-red-600 " : "text-zinc-600"}`}/></h3>{/* price range */}
                        </div>

                        <div>
                            <h3 className="flex items-center"  onClick={() => setIsActive(!isActive)}>Sort: Price High to Low <HiChevronDown className={`${isActive? "font-bold text-red-600 " : "text-zinc-600"}`}/></h3>{/* sort */}
                        </div>
                    </div>
            </div>
            </div>
            
               
           
           
        </main>
    )
}