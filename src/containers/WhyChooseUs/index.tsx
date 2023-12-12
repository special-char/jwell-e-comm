import Image from "next/image";
import React from "react";

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-yellow text-white">right potion</div>
      <div className="bg-green text-white">
        <Image
          src=""
          alt={"women wearing saree"}
          fill
          className="card-image-animation"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
