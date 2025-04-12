import { useState } from 'react';
import oval from '../assets/oval-image.png';
import { FaSearch, FaChevronDown, FaBookmark, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-[20px] py-[20px] relative lg:px-[40px]">
        <h1 className="font-[Mulish] font-bold text-[18px] leading-none mr-[300px]">Travelsy</h1>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl text-[#4A4A4A]">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`
          ${menuOpen ? 'flex' : 'hidden'}
          absolute top-full left-0 w-full bg-white flex-col items-center 
          py-4 gap-4 text-[#4A4A4A] font-[Mulish] text-[13px]
          lg:static lg:flex lg:flex-row lg:gap-10 lg:w-auto lg:bg-transparent lg:py-0
        `}>
          <li><p>Camping Locations</p></li>
          <li><p>Activities</p></li>
          <li><p>Equipment</p></li>
          <li><p>Blogs</p></li>
        </ul>
        <div className="hidden lg:flex items-center gap-[12px] pr-[20px] lg:pr-[60px]">
          <div className="flex items-center text-white font-[Mulish] text-[13px] border rounded-3xl gap-1 px-6 py-[3px] bg-[#FF5200]">
            <FaBookmark />
            <p>Reservation</p>
          </div>
          <FaSearch />
          <div className="relative inline-block">
            <img src={oval} alt="oval" className="border rounded-full w-10 h-10" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border border-white rounded-full animate-pulse"></span>
          </div>
          <FaChevronDown />
        </div>
      </header>

      <hr className="border-t-[1px] border-[#D8D8D8]" />
    </>
  );
}
