"use client";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialData } from "@/lib/data";
import PrevIcon from "@/public/icons/chevron-left.svg";
import NextIcon from "@/public/icons/chevron-right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {};

const TestimonialSection = (props: Props) => {
	return (
		<section>
			<h4 className="text-center font-semibold mb-8">
				{testimonialData.heading}
			</h4>
			<div className="flex gap-4 relative">
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					navigation={{
						prevEl: ".testimonial-carousel-prev-btn",
						nextEl: ".testimonial-carousel-next-btn",
					}}
					pagination={{
						clickable: true,
						renderBullet: function (index, className) {
							return '<span class="' + className + '"></span>';
						},
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
					<PrevIcon className="w-6 aspect-square" />
				</button>
				<button
					type="button"
					className="testimonial-carousel-next-btn swiper-custom-navigation-btn right-0"
				>
					<NextIcon className="w-6 aspect-square" />
				</button>
			</div>
		</section>
	);
};

export default TestimonialSection;
