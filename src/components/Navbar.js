import mobileAd from '../assets/mobileAd.webp'
import webAd from '../assets/webAd.webp'
import { FiMenu } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';


const Navbar = () => {
  return ( 
    <div>
      {/* Advertisement */}
      <div className='flex xs:hidden'>
        <img src={mobileAd} alt="" />
      </div>

      <div className='hidden xs:flex'>
        <img src={webAd} alt="" />
      </div>

      {/* Navbar */}
      <div className='bg-[#005599] text-white flex items-center'>
        <FiMenu className='w-9 h-9'/>
        <BiWorld className='w-9 h-9'/>
      </div>
    </div>
   );
}
 
export default Navbar;