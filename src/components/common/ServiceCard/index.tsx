import Image from "next/image";
import React from "react";
import { ServiceCardType } from "@/utils/types";
import style from "./servicecard.module.css";

const ServiceCard = ({ data }: ServiceCardType) => {
  return (
    <div className={style.service}>
      <Image src={data.icon} alt={data.heading} height={30} width={30} />
      <div className={style.serviceDetail}>
        <p>{data.heading}</p>
        <p className={style.serviceDescription}>{data.serviceDescription}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
