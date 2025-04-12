import { useState } from 'react';
import oval from '../assets/oval-image.png';
import { FaSearch, FaChevronDown, FaBookmark, FaBars, FaTimes } from 'react-icons/fa';
export default function Header(){
   const [menuOpen, setMenuOpen] = useState(false);
    return(
      <>
        <header className="flex items-center justify-between px-[40px] py-[20px] ">
          <h1 className="font-[Mulish] font-bold text-[18px] leading-none ">Travelsy</h1>  
          <div>
            <button className='lg:hidden text-xl text-[#4A4A4A]' onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-[100%] left-0 w-full bg-white text-center py-4 lg:static lg:flex lg:items-center lg:gap-10 lg:w-auto lg:py-0 text-[#4A4A4A] font-[Mulish] text-[13px] pl-[300px]`}
        >
          <li className="py-2 lg:py-0"><p>Camping Locations</p></li>
          <li className="py-2 lg:py-0"><p>Activities</p></li>
          <li className="py-2 lg:py-0"><p>Equipment</p></li>
          <li className="py-2 lg:py-0"><p>Blogs</p></li>

            </ul>
          </div>
          <div className=' lg:flex flex items-center gap-[12px] lg:pr-[60px] pr-[20px] '>
          <div className=" hidden lg:flex items-center text-white font-[Mulish] text-[13px] border rounded-3xl gap-1 p-[3px] pl-6 pr-6 bg-[#FF5200] ">
          <FaBookmark/>
          <p>Reservation</p>
          </div>
        <FaSearch/>
        <div className="relative inline-block">
          <img src={oval} alt="oval image" className="border rounded-4xl w-10 h-10" />

          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border border-white rounded-full animate-pulse"></span>
        </div>
            <FaChevronDown/>
          </div>
        </header>
        <hr className="border-t-[1px] border-[#D8D8D8]" />
        </>
    )
}