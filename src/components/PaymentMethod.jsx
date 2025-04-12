import { FaChevronDown} from 'react-icons/fa';
import payment1 from '../assets/payment1.png';
import payment2 from '../assets/payment2.png';
import payment3 from '../assets/payment3.png';
import payment4 from '../assets/payment4.png';
import payment5 from '../assets/payment5.png';
import payment6 from '../assets/payment6.png';

export default function PaymentMethod(){
    return(
        <div>
            <hr className="border-t-[1px] border-[#D8D8D8]" />
            <div className="w-[1280px] p-[100px] pt-[50px] ">
            <h1 className="font-[mulish] font-[700] leading-0 text-[#30797C] text-xl" >Travelsy</h1>
            </div>
            <div className='flex items-center'>
                <img className='w-[50px] h-[25px] ' src={payment1} alt="payment1" />
                <img className='w-[76px] h-[16px] ' src={payment2} alt="payment2" />
                <img className='w-[43px] h-[13px] ' src={payment3} alt="payment3" />
                <img className='w-[70px] h-[20px] ' src={payment4} alt="payment4" />
                <img className='w-[34px] h-[27px] ' src={payment5} alt="payment5" />
                <div>
                <img className='w-[20px] h-[20px] ' src={payment6} alt="payment6" />
                <p>English (United State)</p>
                <FaChevronDown/>
                </div>
            </div>
        </div>
    )
}