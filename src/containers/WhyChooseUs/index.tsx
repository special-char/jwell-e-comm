import Image from "next/image";
import React from "react";
import style from "./whychooseus.module.css";
import { whyChooseUs } from "@/lib/data";
import ServiceCard from "@/components/common/ServiceCard";

type Props = {
  image: string;
  heading: string;
  desc: string;
  services: Array<{
    id: number;
    icon: string;
    heading: string;
    detail: string;
  }>;
};

const WhyChoose = (props: Props) => {
  return (
    <section className="pt-20">
      <div className={style.container}>
        <div className={style.detailpotion}>
          <div className={style.header}>
            <h1>{whyChooseUs.heading}</h1>
            <p>{whyChooseUs.desc}</p>
          </div>
          <div className={style.servicesContainer}>
            {whyChooseUs &&
              whyChooseUs.services?.map((item) => {
                return <ServiceCard key={item.id} data={item} />;
              })}
          </div>
        </div>
        <div className={style.imagepotion}>
          <div className={style.imagewrapper}>
            <Image
              src={whyChooseUs.image}
              alt="why choose us image"
              fill
              style={{ objectFit: "cover" }}
              className={style.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
