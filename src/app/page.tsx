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
      {products.map((item) => (
        <div key={item.id} className="relative w-full">
          <Link href={`/products/${item.id}`}>
            <Image
              alt={item.productName}
              src={item.productImage}
              width={100}
              height={100}
            />
          </Link>
        </div>
      ))}
    </main>
  );
}
