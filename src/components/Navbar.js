import mobileAd from '../assets/mobileAd.webp'
import webAd from '../assets/webAd.webp'
import logo from '../assets/logo.png'
import { FiMenu } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { TfiUser } from 'react-icons/tfi';
import { FiSearch } from 'react-icons/fi'


const Navbar = () => {
  return ( 
    <div>
      {/* Advertisement */}
      <div className='bg-[#000000]'>
        <div className='flex xs:hidden mx-auto xl:w-[80vw]'>
          <img src={mobileAd} alt="" />
        </div>

        <div className='hidden xs:flex mx-auto xl:w-[80vw]'>
          <img src={webAd} alt="" />
        </div>
      </div>

      {/* Navbar */}
      <div className='w-full bg-[#005599]'>
        <div className='bg-[#005599] flex items-center justify-between px-3 py-1 mx-auto xl:w-[80vw] 2xl:w-[70]'>
          {/* Left */}
          <div className=' text-white flex items-center gap-4'>
            <FiMenu className='w-9 h-9'/>
            <BiWorld className='w-9 h-9'/>
            <div className='w-11 items-center hidden md:flex'>
              <img src={logo} alt="" />
            </div>
          </div>
          {/* Middle */}
          <div className='w-11 flex items-center md:hidden'>
            <img src={logo} alt="" />
          </div>
          <div className='items-center hidden relative md:flex'>
            <input 
              type="search" 
              className='rounded-[0.4rem] py-1.4 w-[26rem] lg:w-[36rem] p-[.2rem]'
            />
           <div className="absolute bg-[#0072cf]  w-[2rem] h-[2rem] right-0 flex items-center justify-center rounded-r-[0.4rem]">
              <FiSearch className="text-[26px] text-white" />
            </div>
          </div>
          {/* Right */}
          <div className='flex items-center gap-4'>
            <BsCart className='w-9 h-9 text-white' />
            <TfiUser className='w-9 h-9 text-white' />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;