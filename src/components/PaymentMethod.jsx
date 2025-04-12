import { FaChevronDown} from 'react-icons/fa';
import payment1 from '../assets/payment1.png';
import payment2 from '../assets/payment2.png';
import payment3 from '../assets/payment3.png';
import payment4 from '../assets/payment4.png';
import payment5 from '../assets/payment5.png';
import payment6 from '../assets/payment6.png';

export default function PaymentMethod(){
    return(
        <div className='overflow-x-hidden'>
            <hr className="border-t-[1px] border-[#D8D8D8]" />
        <div className='lg:w-[1280px] lg:px-[100px] p-[30px] pt-[50px] flex lg:items-center lg:flex-row md:flex-row flex-col pb-[50px]  '>
            <div className='mr-[300px]' >
            <h1 className="font-[mulish] font-[700] leading-0 text-[#30797C] text-xl" >Travelsy</h1>
            </div>
            <div className='flex lg:items-center pt-5 flex-wrap lg:flex-nowrap gap-4 '>
                <img className='w-[50px] h-[25px] ' src={payment1} alt="payment1" />
                <img className='w-[76px] h-[16px] ' src={payment2} alt="payment2" />
                <img className='w-[43px] h-[13px] ' src={payment3} alt="payment3" />
                <img className='w-[70px] h-[20px] ' src={payment4} alt="payment4" />
                <img className='w-[34px] h-[27px] ' src={payment5} alt="payment5" />
                <div className='flex text-center gap-2 '>
                <div className='flex text-center border border-[#E4E4E4] p-2 w-[231px] h-[40px]'>
                <img className='w-[20px] h-[20px] rounded-4xl ' src={payment6} alt="payment6" />
                <p className='font-[mulish] font-[400] text-[#9B9B9B] pl-2 pr-4 '>English (United State)</p>
                <FaChevronDown className='text-[#9B9B9B] size-5'/>
                </div>
                <div className='flex text-center border border-[#E4E4E4] p-2 w-[115px] h-[40px]'>
                <p className='font-[mulish] font-[400] text-[#9B9B9B] pl-2 pr-4 '>KES</p>
                <FaChevronDown className='text-[#9B9B9B] size-5'/>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}