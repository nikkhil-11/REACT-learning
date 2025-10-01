import crollaImage from '../assets/tesa.png'

export default function Brand(){
return(
<div>
    <div className="bg-black grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 pl-32">



        
            <div className="block">
                <img src={crollaImage} alt="just a logo" className="w-32 h-12 cursor-pointer" />
            </div>




            <div className="hidden sm:block">
                <img src={crollaImage} alt="just a logo" className="w-32 h-12 cursor-pointer" />
            </div>



            <div className="hidden lg:block">
                <img src={crollaImage} alt="just a logo" className="w-32 h-12 cursor-pointer" />
            </div>

            <div className="hidden md:block">
                <img src={crollaImage} alt="just a logo" className="w-32 h-12 cursor-pointer" />
            </div>
</div>
</div>
    
)
}