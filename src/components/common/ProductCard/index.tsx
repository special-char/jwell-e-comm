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
      className={`flex flex-col justify-between w-full items-center ${Styles.main}`}
    >
      <div className="flex flex-col gap-6 w-full items-center py-6 px-4">
        <div className={Styles.image}>
          <Image
            src={data.imgUrl}
            alt={data.title}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="small font-semibold">{data.title}</p>
          <p className="font-bold">{data.price}</p>
        </div>
      </div>
      <div className={Styles.btnWrapper}>
        <Button variant="round" color="black">
          <Icon className="h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
