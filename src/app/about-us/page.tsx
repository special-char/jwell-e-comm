import React from "react";
import WhyChooseUs from "@/containers/WhyChooseUs";
import AboutUsBanner from "@/containers/AboutUsBanner";
import TestimonialCarousel from "@/containers/TestimonialCarousel";

const page = () => {
	return (
		<>
			<AboutUsBanner />
			<WhyChooseUs />
			<TestimonialCarousel />
		</>
	);
};

export default page;
