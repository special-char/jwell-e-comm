import HomeBanner from "@/containers/HomeBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCarousel from "@/containers/TestimonialCarousel";
import HomeProducts from "@/containers/HomeProducts";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <Link href={`/login`}>Click me</Link>
      <Link href={`/cart`}>Open cart</Link>
      <button>Open Menu</button> */}

      <HomeBanner />
      <HomeProducts />
      <WhyChooseUs />
      <TestimonialCarousel />
    </main>
  );
}
