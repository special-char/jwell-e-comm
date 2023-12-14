"use client";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialData } from "@/lib/data";
import PrevIcon from "@/public/icons/chevron-left.svg";
import NextIcon from "@/public/icons/chevron-right.svg";
import styles from "./testimonialCarousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {};

const TestimonialCarousel = (props: Props) => {
	return (
		<section>
			<h4 className={styles.heading}>{testimonialData.heading}</h4>
			<div className="relative">
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					navigation={{
						prevEl: ".testimonial-carousel-prev-btn",
						nextEl: ".testimonial-carousel-next-btn",
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Navigation, Pagination]}
					className="relative"
				>
					{testimonialData.testimonialCards.map((item) => {
						return (
							<SwiperSlide key={item.id}>
								<TestimonialCard data={item} />
							</SwiperSlide>
						);
					})}
				</Swiper>
				<button
					type="button"
					className="testimonial-carousel-prev-btn swiper-custom-navigation-btn left-0"
				>
					<span className="sr-only">testimonial carousel previous button</span>
					<PrevIcon className={styles.btnIcon} />
				</button>
				<button
					type="button"
					className="testimonial-carousel-next-btn swiper-custom-navigation-btn right-0"
				>
					<span className="sr-only">testimonial carousel next button</span>
					<NextIcon className={styles.btnIcon} />
				</button>
			</div>
		</section>
	);
};

export default TestimonialCarousel;
