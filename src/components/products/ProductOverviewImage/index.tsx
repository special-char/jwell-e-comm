"use client";
import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import NextIcon from "@/public/icons/chevron-right.svg";
import PrevIcon from "@/public/icons/chevron-left.svg";
import X from "@/public/icons/cencel.svg";
import { Dialog } from "@headlessui/react";
import style from "./productOverviewImage.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/common/Button";

type ProductOverviewImageProps = {
	productImagesData: Array<{
		id: number;
		url: string;
	}>;
};

const ProductOverviewImage = ({
	productImagesData,
}: ProductOverviewImageProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [popupUrl, setPopupUrl] = useState<string | null>(null);

	const [currentIndex, setCurrentIndex] = useState<number | null>(0);
	const swiperRef = useRef(null);
	const mainSwiperRef = useRef(null);

	const handleImagePopup = (url: string) => {
		setPopupUrl(url);
	};

	const handleClosePopup = () => {
		setPopupUrl(null);
	};

	const handleSlideChange = (swiper) => {
		setCurrentIndex(swiper.activeIndex);
	};

	useEffect(() => {
		const goToSlide = () => {
			if (
				swiperRef.current &&
				swiperRef.current.swiper &&
				!isNaN(currentIndex)
			) {
				swiperRef.current.swiper.slideTo(currentIndex);
			}
			if (
				mainSwiperRef.current &&
				mainSwiperRef.current.swiper &&
				!isNaN(currentIndex)
			) {
				mainSwiperRef.current.swiper.slideTo(currentIndex);
			}
		};

		goToSlide();
	}, [popupUrl, currentIndex]);

	return (
		<>
			<Dialog
				open={!!popupUrl}
				onClose={handleClosePopup}
				as="div"
				className="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-50 animate-opacity"
			>
				<Dialog.Panel className="relative w-full h-full p-[4%]">
					{/* <button
						type="button"
						onClick={handleClosePopup}
						className="absolute top-5 right-5 z-10 bg-white p-2 rounded-full"
					></button> */}
					<div className="absolute top-5 right-5 z-10">
						<Button
							variant="round"
							onClick={handleClosePopup}
							className={"bg-white"}
						>
							<X className="w-6 h-6" />
						</Button>
					</div>
					<div className="relative h-full w-full">
						<Swiper
							ref={swiperRef}
							spaceBetween={10}
							navigation={true}
							thumbs={{ swiper: thumbsSwiper }}
							onSlideChange={handleSlideChange}
							navigation={{
								prevEl: ".productPopupCarouselPrevBtn",
								nextEl: ".productPopupCarouselNextBtn",
							}}
							modules={[FreeMode, Navigation, Thumbs]}
							className="w-full h-full rounded-md"
						>
							{productImagesData?.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<Image
											src={item.url}
											fill
											style={{ objectFit: "contain" }}
											alt="productimage"
											priority={true}
										/>
									</SwiperSlide>
								);
							})}
							<button
								type="button"
								className="productPopupCarouselPrevBtn swiper-custom-navigation-btn disabled:bg-gray/30 !bg-opacity-100 !text-white left-4 -translate-y-1/2"
							>
								<PrevIcon className="w-6 aspect-square" />
								<span className="sr-only">Previous button</span>
							</button>
							<button
								type="button"
								className="productPopupCarouselNextBtn swiper-custom-navigation-btn disabled:bg-gray/30 !bg-opacity-100 !text-white right-4 -translate-y-1/2"
							>
								<NextIcon className="w-6 aspect-square" />
								<span className="sr-only">Next Button</span>
							</button>
						</Swiper>
					</div>
				</Dialog.Panel>
			</Dialog>
			<div className={style.mainwrapper}>
				<Swiper
					ref={mainSwiperRef}
					spaceBetween={10}
					navigation={true}
					loop={true}
					thumbs={{ swiper: thumbsSwiper }}
					navigation={{
						prevEl: ".productCarouselPrevBtn",
						nextEl: ".productCarouselNextBtn",
					}}
					onSlideChange={handleSlideChange}
					modules={[FreeMode, Navigation, Thumbs]}
					className={style.main_image}
				>
					{productImagesData?.map((item, index) => {
						return (
							<SwiperSlide
								key={index}
								onClick={() => handleImagePopup(item.url)}
							>
								<Image
									src={item.url}
									fill
									style={{ objectFit: "contain" }}
									alt="productimage"
									priority={true}
								/>
							</SwiperSlide>
						);
					})}
					<button
						type="button"
						className="productCarouselPrevBtn swiper-custom-navigation-btn left-4 -translate-y-1/2"
					>
						<PrevIcon className="w-6 aspect-square" />
						<span className="sr-only">Previous button</span>
					</button>
					<button
						type="button"
						className="productCarouselNextBtn swiper-custom-navigation-btn right-4 -translate-y-1/2"
					>
						<NextIcon className="w-6 aspect-square" />
						<span className="sr-only">Next Button</span>
					</button>
				</Swiper>

				<div className={`${style.image_group} noScrollbar`}>
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper"
					>
						{productImagesData?.map((item, index) => {
							return (
								<SwiperSlide
									key={index}
									className={clsx(
										"bg-white box-border border-2 border-gray/20 inline-block rounded-lg relative aspect-[4/3] hover:cursor-pointer select-none",
										{ ["border-yellow/100"]: currentIndex === index }
									)}
								>
									<Image
										src={item.url}
										fill
										alt="images"
										style={{ objectFit: "contain" }}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default memo(ProductOverviewImage);
