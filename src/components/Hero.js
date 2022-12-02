import heroImg from '../assets/front.jpg';
import { CgGym } from 'react-icons/cg'
import { ImNewspaper } from 'react-icons/im'
import { AiOutlineCalculator } from 'react-icons/ai'
import { GiGymBag } from 'react-icons/gi'


const Hero = () => {
  return (  
    <div>
      <div className="relative">
        <div className="absolute z-0 w-full h-[33rem] flex">
          <img src={heroImg} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="relative z-30 text-white flex flex-col items-center justify-center h-[33rem] px-4 leading-tight">
          <h1 className="font-bold text-[60px] sm:text-[80px] text-center">Welcome to <br /> Muscle & Strength</h1>

          <h3 className="font-sm text-[22px] sm:text-[30px] text-center">We provide the tools you need to build the</h3>
          
          <h3 className="font-sm text-[22px] sm:text-[30px] text-center -mt-1">body you want. All Free.</h3>
        </div>
      </div>

      <div className="w-full bg-[#f5f5f5]">
        <div className=" flex items-center justify-between  px-12 sm:px-20  py-2 max-w-[50rem] mx-auto ">
          <div className="flex flex-col items-center justify-center font-bold text-[42px] text-[#005599]">
            <GiGymBag />
            <p className="text-[15px] text-gray-500">Store</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold text-[42px] text-[#005599]">
            <CgGym />
            <p className="text-[15px] text-gray-500">Workouts</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold text-[42px] text-[#005599]">
            <ImNewspaper />
            <p className="text-[15px] text-gray-500">Articles</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold text-[42px] text-[#005599]">
            <AiOutlineCalculator />
            <p className="text-[15px] text-gray-500">Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Hero;