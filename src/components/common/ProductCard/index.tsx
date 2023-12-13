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
    <div key={data.id} className={Styles.main}>
      <div className={Styles.productWrapper}>
        <div className={Styles.image}>
          <Image
            src={data.imgUrl}
            alt={data.title}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={Styles.content}>
          <p className={Styles.title}>{data.title}</p>
          <p className={Styles.price}>{data.price}</p>
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
