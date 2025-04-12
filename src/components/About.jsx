import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviewImg1 from '../assets/review-img1.png';
import reviewImg2 from '../assets/review-img2.png';

export default function About() {
    return(
        <div className="overflow-x-hidden lg:w-[1441px] lg:h-[518px] bg-[#F8F8F8] mt-16  ">
            <div className="lg:w-[1280px] lg:p-[100px] p-[30px] flex items-left flex-wrap lg:flex-nowrap md:flex-nowrap ">
            <div className=" w-[356px] h-[318px]">
            <p className=" size-[14px] font-[mulish] font-[14px] text-[#9B9B9B] ">TESTIMONIALS</p>
            <h1 className="font-[didot] font-[700] leading-[40px] w-[280px] pt-10 text-5xl " >What <br /> customers <br />
            <span className="text-[#FF5200]">say about us.</span></h1>
            <div className="flex items-center mt-10 pl-[20px] gap-4 text-[#9B9B9B] bg-[#FFFFFF] h-[60px] w-[123px]">
             <FaChevronLeft size={24} />
             <hr className="text-lg rotate-20 w-[1px] h-[40px] inline-block border-2 text-[#D8D8D8] "></hr>
             <FaChevronRight size={24} />
            </div>
            </div>
            <div className=" flex lg:ml-[80px] flex-wrap lg:flex-nowrap md:flex-nowrap">
            <div className="text-left bg-white lg:w-[356px] lg:h-[318px] p-7">
                <h1 className=" text-[rgb(0,0,0)] font-[didot] font-[700] leading-[40px]">Best User Experience</h1>
                <p className=" font-[mulish] font-[400] leading-[20px] tracking-normal text-[#4A4A4A] ">Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock.</p>
                <div className="flex items-center lg:mt-6 mt-20 gap-2">
                <img className="w-[40px] h-[40px] border rounded-4xl border-white " src={reviewImg1} alt="reviewImg1" />
                <p className=" font-[mulish] font-[400] leading-[19px] text-[#4A4A4A]  ">Derek Dunn</p>
                </div>
            </div>
            <div className="text-left bg-white lg:w-[356px] lg:h-[318px] p-7 lg:ml-[20px]">
                <h1 className=" text-[rgb(0,0,0)] font-[didot] font-[700] leading-[40px]">Friendly staff</h1>
                <p className=" font-[mulish] font-[400] leading-[20px] tracking-normal text-[#4A4A4A] ">Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It is also big tour business and the are many options. </p>
                <div className="flex items-center mt-20 gap-2">
                <img className="w-[40px] h-[40px] border rounded-4xl border-white " src={reviewImg2} alt="reviewImg2" />
                <p className=" font-[mulish] font-[400] leading-[19px] text-[#4A4A4A]  ">Derek Dunn</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}