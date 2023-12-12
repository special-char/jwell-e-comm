import React from "react";
import { products } from "@/lib/data";
import Image from "next/image";
import Styles from "./productcard.module.css";
import Button from "../Button";
type Props = {
  data: {
    id: number;
    imgUrl: string;
    title: string;
    price: string;
    btn: string;
    desription: string;
  };
};

const ProductCard = ({ data }: Props) => {
  const Icon = data.btn;

  return (
    <div
      key={data.id}
      className={`flex flex-col gap-4 items-center py-5 ${Styles.main}`}
    >
      <div className="aspect-square w-[250px] relative">
        <Image
          src={data.imgUrl}
          alt={data.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p>{data.title}</p>
        <p className="font-bold">{data.price}</p>
      </div>
      <div className="absolute -bottom-5 ">
        <Button variant="round" color="black">
          <Icon className={"h-4"} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
