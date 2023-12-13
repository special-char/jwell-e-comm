import HomeBanner from "@/containers/HomeBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/containers/TestimonialSection";
import HomeProducts from "@/containers/HomeProducts";

export default function Home() {
	return (
		<main>
			<HomeBanner />
			<HomeProducts />
			<WhyChooseUs />
			<TestimonialSection />
		</main>
	);
}
