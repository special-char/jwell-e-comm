import React from "react";
import { ProductCardType } from "@/utils/types";
import Image from "next/image";
import Styles from "./productCard.module.css";
import Button from "../Button";
import Plus from "@/public/icons/plus.svg";

const ProductCard = ({ data }: ProductCardType) => {
  return (
    <div className={Styles.main}>
      <div className={Styles.productWrapper}>
        <div className={Styles.productImage}>
          <Image
            src={data.productImage}
            alt={data.productName}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={Styles.content}>
          <p className={Styles.productName}>{data.productName}</p>
          <p className={Styles.productPrice}>{data.productPrice}</p>
        </div>
      </div>
      <div className={Styles.btnWrapper}>
        <Button variant="round" color="black">
          <Plus className="h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
