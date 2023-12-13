import Image from "next/image";
import React from "react";
import { whyChooseUs } from "@/lib/data";
import style from "./servicecard.module.css";

type Props = {
  data: {
    id: number;
    icon: string;
    heading: string;
    detail: string;
  };
};

const ServiceCard = ({ data }: Props) => {
  return (
    <div className={style.service}>
      <Image src={data.icon} alt={data.heading} height={30} width={30} />
      <div className={style.detail}>
        <p>{data.heading}</p>
        <p className={style.description}>{data.detail}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
