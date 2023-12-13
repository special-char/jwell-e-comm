import TestimonialSection from "@/containers/TestimonialSection";
import WhyChooseUsSection from "@/containers/WhyChooseUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HomeBanner from "@/containers/HomeBanner";

export default function Home() {
	return (
		<main>
			<Header />́
			<HomeBanner />
			<WhyChooseUsSection />
			<TestimonialSection />
			<Footer />
		</main>
	);
}
