
import { useState } from "react";

export default function Walking() {
    const Shoes = [
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7284_DarkBlack_1751974347136_hpnc4wye47wh9ww.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7283_BlackGrey_1751974282871_j8wsy8cgpqvkk8z.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7274_Black_1750939349607_t5z1es7h71ibjzq.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7283_DarkGrey_1751974301578_l6pa6eo63am9fs7.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/DtWeXjHk_9XM5BB5B5N_2025-08-24_1.JPG",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/1TEAspBa_5Y1JGTGVRO_2025-07-03_1.JPG",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7286_ArmyGreen_1755867345048_wsvn51mso12g4dk.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7284_DarkBlack_1751974347136_hpnc4wye47wh9ww.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7283_BlackGrey_1751974282871_j8wsy8cgpqvkk8z.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7274_Black_1750939349607_t5z1es7h71ibjzq.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7283_DarkGrey_1751974301578_l6pa6eo63am9fs7.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/DtWeXjHk_9XM5BB5B5N_2025-08-24_1.JPG",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/1TEAspBa_5Y1JGTGVRO_2025-07-03_1.JPG",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7286_ArmyGreen_1755867345048_wsvn51mso12g4dk.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7284_DarkBlack_1751974347136_hpnc4wye47wh9ww.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7283_BlackGrey_1751974282871_j8wsy8cgpqvkk8z.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7274_Black_1750939349607_t5z1es7h71ibjzq.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/SP7283_DarkGrey_1751974301578_l6pa6eo63am9fs7.jpg",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/DtWeXjHk_9XM5BB5B5N_2025-08-24_1.JPG",
  },
  {
    image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/685250b1d6de79586b264372/cat_img/1TEAspBa_5Y1JGTGVRO_2025-07-03_1.JPG",
  },
];

    return (
        <main className=" flex flex-col h-fit">
            <div className="flex justify-center items-center pt-10 pb-5">
                <h1 className="text-3xl font-sans justify-center">SPORTS SHOES</h1>
            </div>
            <div className="w-full flex justify-center ">
            <div className="flex justify-center w-fit bg-red-100 h-fit rounded-lg ">
                    <div className="flex gap-52 py-5 px-5 justify-center items-center">                   
                        <div>
                           <label htmlFor=""> Select Product Type
                            <select name="productType" id="producttype">
                                <option value="sports">Sports Shoes</option>
                                <option value="General">General</option>
                                <option value="Sneakers">Sneakers</option>
                                <option value="Apparel Accesories">Apparel Accesories</option>                 
                            </select>
                           </label>
                            
                        </div>

                        <div>
                           <label htmlFor=""> Select Size
                             <select name="productType" id="producttype" aria-label="Select Size">
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>                 
                            </select>
                           </label>
                          
                        </div>

                        <div>
                            <label htmlFor=""> Price Range
                                <select name="productType" id="producttype" aria-label="Price Range">
                                    <option value="100-200 ">100-200  </option>
                                    <option value="200-500">200-500</option>
                                    <option value="500-1000">500-1000</option>
                                    <option value="1000-1500">1000-1500</option>                 
                                    <option value="1500-2000">1500-2000</option>                 
                                    <option value="2000-2500">2000-2500</option>                 
                                    <option value="2500-5000">2500-5000</option>                 
                                    <option value="51000-10000">51000-10000</option>                 
                                </select>
                            </label>
                        </div>

                        <div>
                            <label htmlFor=""> Colour / Variant
                                <select name="productType" id="producttype" aria-label="Colour/Variant">
                                    <option value="Black">Black</option>
                                    <option value="Navy">Navy</option>
                                    <option value="Grey">Grey</option>
                                    <option value="White">White</option>                 
                                    <option value="Blue">Blue</option>                 
                                    <option value="Green">Green</option>                 
                                    <option value="Aqua">Aqua</option>                 
                                </select>
                            </label>
                        </div>
                    </div>
            </div>
            </div>
            {/* images section */}
               <div className="flex justify-center items-center pt-10 pb-10">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {
                            // Shoes.map((items) => 
                            Shoes.map((item, index) => {
                            return(
                                <div>
                                    <div className="justify-center items-center border border-white hover:border-red-600 rounded-lg " >
                                        <div className="overflow-hidden h-[300px] w-full">
                                                <img 
                                                src={item.image} 
                                                key={index}
                                                alt="shoes"
                                                className="h-[298px] w-full object-cover hover:scale-110 transition-transform duration-300 ease-in- "
                                                />
                                        </div>
                                            <div className="flex flex-col text-center pt-3 font-semibold">
                                                <h5>Best sporst shoes</h5>
                                                <p className="font-bold text-lg">$999</p>
                                            </div>
                                            <div className="hover:bg-red-600 hover:text-white border border-red-600 text-red-600 font-bold text-center p-3 mt-3 rounded-md cursor-pointer duration-300 opacity-0 hover:opacity-100">
                                        ADD TO BAG
                                            </div>
                                    </div>
                            </div>
                            )
                        })           
                          
                        }

                    </div>
                </div>                
                </div>   
                
          
        </main>
    )
}