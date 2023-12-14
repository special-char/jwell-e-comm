import HomeBanner from "@/containers/HomeBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCarousel from "@/containers/TestimonialCarousel";
import HomeProducts from "@/containers/HomeProducts";
import Link from "next/link";
import { products } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeProducts />
      <WhyChooseUs />
      <TestimonialCarousel />
    </main>
  );
}
