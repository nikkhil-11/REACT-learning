import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white p-4 text-center flex sm:flex-col md:flex-row justify-between items-center gap-4">
      <div className="justify-center items-center p-7 px-7 mx-auto">
         <img src="https://d1311wbk6unapo.cloudfront.net/NushopWebsiteAsset/tr:w-300,,f-webp,fo-auto/685250b1d6de79586b264372_logo_XV8SH194A6_2025-06-26" alt="KrassaLogo" 
                className="w-[94.4px] h-[40px]"/>
            <div className="mt-4 flex flex-col text-left">
                <h1 className="font-bold text-xl">Kraasa</h1>
                <p className="pt-5 w-2xl">At Kraasa, We Don't just make Shoes--we Craft Experience from the Ground up.
                    Our Mission Is to Create Footwear that Blends Style, Comfort, and Durability for Every Step You Take.
                </p>
                <div className="pt-5 text-2xl flex gap-5 cursor-pointer">
                    <FaFacebookF />
                    <FaInstagram />
                </div>
            </div>
      </div>
      <div className="mx-auto">
        <div className="bg-red-700 justify-self-start items-start p-4 rounded-md mx-auto">
            <h1 className="font-bold text-xl p-4">Contact Us</h1>
             <div className="flex flex-col text-left ">
                <p>Call: +91-85449-93278 </p>
                <p>WhatsApp: +91-85449-93278 </p>
                <p>Customer Support Time: Mon-Sat, 9 AM to 6 PM</p>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank">
                <p>Email: 14142.nikhil@gmail.com</p>
                </a>
             </div>                      
        </div>        
      </div>
      <hr />
       
    </footer>
  );
}  