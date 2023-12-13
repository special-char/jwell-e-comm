import Header from "@/components/common/Header";
import HomeBanner from "@/containers/HomeBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/containers/TestimonialSection";
import Footer from "@/components/common/Footer";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <WhyChooseUs />
      <TestimonialSection />
      <ProductCard data={products[0]} />
    </main>
  );
}
