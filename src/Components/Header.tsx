import React from "react";
import { Link,NavLink } from "react-router-dom";



export function Header() {
  return (
    <header className=" sticky top-0 w-full bg-white overflow-auto border-b border-red-600 shadow-md z-50">
        <Link to="/"
        className="flex items-center justify-center sm:mx-auto md:mx-0 pt-2">
               <img src="https://d1311wbk6unapo.cloudfront.net/NushopWebsiteAsset/tr:w-300,,f-webp,fo-auto/685250b1d6de79586b264372_logo_XV8SH194A6_2025-06-26" alt="KrassaLogo" 
                className="w-[94.4px] h-[40px]"/>
        </Link>
        <div className="flex justify-center items-center gap-16 mx-auto w-full pt-5 ">   
                                       
                        <ul className="">
                            <li>
                                <NavLink
                                 to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 font-bold border-b ${isActive ? "text-red-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                   SPORTS AND WALKING 
                                </NavLink>
                            </li>                                                             
                        </ul>
                        <ul className="">
                            <li>
                                <NavLink
                                 to="/boots"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 font-bold duration-200 border-b ${isActive ? "text-red-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                   BOOTS
                                </NavLink>
                            </li>                                                             
                        </ul>
                        <ul className="">
                            <li>
                                <NavLink
                                 to="/loafers"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 font-bold duration-200 border-b ${isActive ? "text-red-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                   LOAFERS
                                </NavLink>
                            </li>                                                             
                        </ul>
                        <ul className="">
                            <li>
                                <NavLink
                                 to="/clogs&slippers"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 font-bold duration-200 border-b ${isActive ? "text-red-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                   CLOGS & SLIPPERS
                                </NavLink>
                            </li>                                                             
                        </ul>
                        <ul className="">
                            <li>
                                <NavLink
                                 to="/formal-shoes"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 font-bold duration-200 border-b ${isActive ? "text-red-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                   FORMAL SHOES
                                </NavLink>
                            </li>                                                             
                        </ul>
                        <ul className="">
                            <li>
                                <NavLink
                                 to="/sneakers"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 font-bold duration-200 border-b ${isActive ? "text-red-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                   SNEAKERS
                                </NavLink>
                            </li>                                                             
                        </ul>
                        
                    </div>
       
    </header>
  );
}