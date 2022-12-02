import heroImg from '../assets/front.jpg'

const Hero = () => {
  return (  
    <div>
      <div className='absolute h-[30rem] flex w-full'>
        <img 
          src={heroImg} 
          alt="HeroImage" 
          className='object-cover w-full h-full'/>
      </div>
      <div className='
        z-30 
        relative 
         text-white 
         flex 
         items-center 
         justify-center 
         h-[33rem]
         flex-col
         px-4'
      >
        <h1 className='font-bold text-[60px] sm:text-[72px]  text-center'>Welcome to Muscle & Strength</h1>

        <h3 className='font-sm text-[22px] sm:text-[26px]  text-center'>We provide the tools you need to build the body.</h3>

        <h3 className='font-sm  text-[22px] sm:text-[26px] text-center -mt-1'>you want. All Free.</h3>
      </div>
    </div>
  );
}
 
export default Hero;