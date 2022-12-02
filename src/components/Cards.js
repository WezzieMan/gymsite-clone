const Cards = ({title, text, img}) => {
  return (  
    <div className=''>
      <img src={img} alt="CardNew" />
      <p className='font-semibold text-[24px] text-left '>{title}</p>
      <p className=''>{text}</p>
    </div>
  );
}
 
export default Cards;