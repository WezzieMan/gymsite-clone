const Cards = ({title, text, img, reads, comments}) => {
  return (  
    <div className='w-full relative mt-[3rem]'>
      <img src={img} alt="CardNew" />
      <p className='font-semibold text-[24px] text-left text-[#1c1f21]'>{title}</p>
      <p className='text-[#1c1f21] text-left mt-2'>{text}</p>

      <div className="text-[13px] mt absolute -bottom-10 ">
        <p className="inline border bg-[#f5f5f5] rounded-xl mr-7 px-3">{reads}</p>
       <p className="inline bg-[#f5f5f5] rounded-xl px-3">{comments}</p>
      </div>
    </div>
  );
}
 
export default Cards;