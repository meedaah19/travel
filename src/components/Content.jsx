import {FaRegSquare } from "react-icons/fa";
import ContentImages from "./ContentImages";


export default function Content(){
    return(
        <main>
            <div className="pt-[25px] p-[30px] lg:pr-[100px] lg:pl-[100px] lg:mt-[50px] lg:pb-[60px] pb-[25px] lg:w-[1280px] overflow-x-hidden ">
                    <h1 className="font-[didot] font-[700] lg:text-6xl text-3xl  text-[#000000] tracking-normal ">Find An <br /> Experience</h1>
                    <p className="pt-10 text-left font-[mulish] font-[400]  tracking-normal leading-[20px] text-[#4A4A4A] ">To find you the best experiences, we will ask you a few questions to and <br /> show you experiences basd on your preferences.</p>
                    <p className="pt-14 font-[mulish] font-[400] leading-[20px] tracking-normal text-[#4A4A4A] ">How much time do you have?</p>
                    <div className="pt-4 flex lg:items-center lg:text-left lg:gap-7 lg:flex-row md:flex-row flex-col ">
                    <div className="flex text-center gap-3">
                    <FaRegSquare className="size-5 text-[#E4E4E4]"/>
                    <p className="text-[#4A4A4A] font-[mulish] font-[400] leading-0 tracking-normal pt-3 ">A weekend</p>
                    </div>
                    <div className="flex text-center gap-3">
                    <FaRegSquare className="size-5 text-[#E4E4E4]"/>
                    <p className="text-[#4A4A4A] font-[mulish] font-[400] leading-0 tracking-normal pt-3">A week</p>
                    </div>
                    <div className="flex text-center gap-3">
                    <FaRegSquare className="size-5 text-[#E4E4E4]"/>
                    <p className="text-[#4A4A4A] font-[mulish] font-[400] leading-0 tracking-normal pt-3">A month</p>
                    </div>
                    <div className="flex text-center gap-3">
                    <FaRegSquare className="size-5 text-[#E4E4E4]"/>
                    <p className="text-[#4A4A4A] font-[mulish] font-[400] leading-0 tracking-normal pt-3">A few days, specify.</p>
                    </div>
                    </div>
                    <p className="text-[#4A4A4A] font-[mulish] font-[400] leading-[20px] tracking-normal pt-10">What are your interest?</p>

                    <div className="pt-5">
                        <ContentImages/>
                    </div>
                    <p className="w-[150px] border text-white bg-[#FF5200] rounded-[3px] p-2 pl-4 pr-4 mt-11 font-[mulish] font-[400] text-center ">Set</p>

            </div>
        </main>
    )
}