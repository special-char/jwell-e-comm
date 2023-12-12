import React from "react";
import Image from "next/image";
import Styles from "./banner.module.css";

type Props = {
  data: {
    heading: string;
    desc?: string;
    btn1?: string;
    btn2?: string;
    bgImage?: string;
  };
};

const Banner = ({ data }: Props) => {
  return (
    <section className={Styles.gridSection}>
      <div className={Styles.content}>
        <div className={Styles.heading}>
          <h2 className={Styles.title}>{data.heading}</h2>
          {data.desc && <p className={Styles.desc}>&quot;{data.desc}&quot;</p>}
        </div>
        <div className={Styles.buttons}>
          {data.btn1 && (
            <button type="button" className={Styles.btn1}>
              {data.btn1}
            </button>
          )}
          {data.btn2 && (
            <button type="button" className={Styles.btn2}>
              {data.btn2}
            </button>
          )}
        </div>
      </div>
      <div className={Styles.bgImage}>
        {data.bgImage && (
          <Image
            src={data.bgImage}
            alt={"Banner Image"}
            fill
            style={{ objectFit: "contain" }}
            className="z-10"
          />
        )}
      </div>
    </section>
  );
};

export default Banner;
