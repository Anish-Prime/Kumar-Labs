import { Navbar } from "./Navbar";

export function Hero(){ 
        return    <div className="grid grid-cols-12 mt-5 mb-10">
        <div className="ml-[40%] lg:ml-1 col-span-10 lg:col-span-4 lg:flex">
            <a href="/" className=" ml-[40%] lg:ml-1" >
                    <img src="/logo.jpg" className="ml-[20%] h-20 lg:ml-0 origin-left"/>
            </a>
            <a href="/" className="mt-auto text-[#000f3a] origin-center text-3xl font-bold lg:ml-1">
                <div className="grid grid-cols-1">
                    <div className="col-span-1">Shri Mata Vaishno</div>
                    <div className="col-span-1">Devi University</div>
                </div>
            </a>
        </div>
        <div className="col-span-2 lg:col-span-8"><Navbar/></div>
    </div>
}