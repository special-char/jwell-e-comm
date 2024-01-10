import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import StarRating from "../Rating";

interface Props {
    img:string;
    name:string;
    price:string;
}

const ProductCard:React.FC<Props> = ({img, name, price}) => {
    return (
        <div className="border border-white hover:border-pink-800 hover:scale-105 transition-transform relative bg-pink-50">
            <img src={img}  alt={name}/>
            <div className="space-y-2 relative p-4">
                <div className="flex gap-0.5 text-20px">
                    <StarRating rating={4} />
                </div>
                <p className="font-medium text-black">{name}</p>
                <p className="text-2xl font-medium text-black">{price}</p>
                <div className="absolute top-4 right-2 bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-[28px] w-[50px] h-[50px] hover:animate-bounce rounded-full grid place-items-center cursor-pointer">
                    <AiOutlineShopping/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard