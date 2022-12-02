import Cards from "./Cards";

import img1 from "../assets/cardsImages/img1.webp"
import img2 from "../assets/cardsImages/img2.webp"
import img3 from "../assets/cardsImages/img3.webp"
import img4 from "../assets/cardsImages/img4.webp"
import img5 from "../assets/cardsImages/img5.webp"
import img6 from "../assets/cardsImages/img6.webp"

const FirstArticle = () => {
  const cards = [
    {title: "What You Should Know About Fasted Cardio", text: "In this article you'll learn what the research shows regarding fasted cardio and fat loss loss. Hint: it could be a useful tool to help you reach your goals.", img: img1},
    {title: "How To Choose Your Next Training Program (Plus Program Recommendations)", text:'One of the most frequently asked questions we receive is, "What program should I move to after I finish my current programming cycle?" This step-by-step guide will help answer that.', img: img2},
    {title: "What To Eat Before You Workout with Samantha Jerring", text:'Nutrex athlete and IFBB Pro, Samantha Jerring, gives M&S a sneak peek at what her pre-workout nutrition looks like before she heads deep into her 2022 Olympia Prep!', img: img3},
    {title: "45-Minute Kettlebell and Bodyweight Workout for Fat Loss", text:'This simple, yet effective full body workout maximizes fat loss and overall fitness performance. With very minimal equipment you can burn calories and start moving better.', img: img4},
    {title: "6 Advanced Exercises to Build a Big and Wide Back (Plus Free Workout!)", text:'Take your back development to the next level with these advanced movements. These exercises can be added to your next pulling session, back workout, or full-body training session.', img: img5},
    {title: "6-Week Women’s Full Body Strength and Conditioning Workout", text:'This circuit-style workout will help you torch calories and feel stronger, in a short amount of time. Try this 3-day full body workout for efficient lean muscle gains!', img: img6}
  ]

  return (  
    <div className="text-center pt-5 px-8 xl:px-12  mx-auto">
      <div className="max-w-[45rem] md:max-w-[65rem] mx-auto">
        {/* Title */}
        <p className="font-black text-[40px]  text-[#005599]">NEW AT MUSCLE & STRENGTH</p>
      </div>

      {/* News */}
      <div className='grid grid-cols-1 xmd:grid-cols-3 gap-x-5 gap-y-5 pt-6'>
        {cards.map(card => (
          <Cards title={card.title} text={card.text} img={card.img}/>
        ))}
      </div>
    </div>
  );
}
 
export default FirstArticle;