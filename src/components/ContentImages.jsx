import { FaCheck} from "react-icons/fa";

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';

export default function ContentImages(){
    return(
        <>
            <div className="flex col-end-2 gap-4">
                            <div className="relative">
                            <img src={image1} alt="image1"/>
                            <p className="absolute inset-0 flex justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">Rafting</p>
                            </div>
                            <div className="relative">
                            <div className="absolute inset-0 bg-[#FF5200B2]"></div>
                            <img src={image2} alt="image2"/>
                            <div className="absolute inset-0 flex flex-col justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">
                            <FaCheck/>
                            <p>Nature Walk</p>
                            </div>
                            </div>
                        </div>
                        <div className="flex col-end-3 gap-4 pt-4">
                        <div className="relative">
                            <img className="w-[357px] h-[250px]" src={image3} alt="image3"/>
                            <p className="absolute inset-0 flex justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">Bike Riding</p>
                            </div>
                            <div className="relative">
                            <img className="h-[250px]" src={image4} alt="image4"/>
                            <p className="absolute inset-0 flex justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">Bungee Jumping</p>
                            </div>
                            <div className="relative">
                            <img className="h-[250px]" src={image5} alt="image5"/>
                            <p className="absolute inset-0 flex justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">Wine Tasting</p>
                            </div>
                        </div>
                        <div className="flex col-end-2 gap-4 pt-4">
                            <div className="relative">
                            <img src={image6} alt="image6"/>
                            <p className="absolute inset-0 flex justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">Coffee Tasting</p>
                            </div>
                            <div className="relative">
                            <div className="absolute inset-0 bg-[#FF5200B2]"></div>
                            <img src={image7} alt="image7"/>
                            <div className="absolute inset-0 flex flex-col justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">
                            <FaCheck/>
                            <p>Farm Visit</p>
                            </div>
                            </div>
                        </div>
                        <div className="flex col-end-2 gap-4 pt-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#FF5200B2]"></div>
                            <img className="h-[250px] w-[733px] " src={image8} alt="image8"/>
                            <div className="absolute inset-0 flex flex-col justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">
                            <FaCheck/>
                            <p>Camping</p>
                            </div>
                            </div>
                            <div className="relative">
                            <img className="h-[250px]"  src={image9} alt="image9"/>
                            <p className="absolute inset-0 flex justify-center items-center font-[didot] font-[700] leading-[30px] text-white ">Kibera Tour</p>
                            </div>
                        </div>
        </>
    )
}