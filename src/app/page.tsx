import TestimonialSection from "@/containers/TestimonialSection";
import WhyChooseUsSection from "@/containers/WhyChooseUs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HomeBanner from "@/containers/HomeBanner";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/lib/data";

export default function Home() {
	return (
		<main>
			<Header />
			<HomeBanner />
			<WhyChooseUsSection />
			<TestimonialSection />
			<Footer />
			<ProductCard data={products[0]} />
		</main>
	);
}
