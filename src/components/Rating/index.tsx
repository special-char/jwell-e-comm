import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type Props = {}

const StarRating = ({ rating }) => {
    const stars = Array(5).fill(null).map((_, index) => (
        index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
      ));
  return (
    <div className=" text-yellow flex gap-0.5 text-20px">
    {stars}
  </div>
  )
}

export default StarRating