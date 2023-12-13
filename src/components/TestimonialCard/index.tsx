import Image from "next/image";
import { testimonialCardType } from "@/utils/types";

const TestimonialCard = ({ data }: testimonialCardType) => {
  return (
    <div className="sm:w-[60%] mx-auto flex flex-col justify-center items-center gap-10 pb-20">
      <p className="text-center text-gray">{data.description}</p>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-20 aspect-square relative rounded-full overflow-hidden">
          <Image src={data.image} alt="testimonial person" fill />
        </div>
        <p className="small font-bold">{data.name}</p>
        <p className="small text-gray">{data.designation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
