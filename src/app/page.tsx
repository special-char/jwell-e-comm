import Banner from "@/components/common/Banner";
import TestimonialSection from "@/containers/TestimonialSection";
import WhyChooseUsSection from "@/containers/WhyChooseUs";
import Link from "next/link";
import { homePageBanner } from "@/lib/data";
import { shopBannerData } from "@/lib/data";
import { aboutUsBanner } from "@/lib/data";
import { contactUsBanner } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <h2>Normal Routes</h2>
      <Link href="/products">shop or all products</Link>
      <Link href="/products/p001">product/p001</Link>
      <Link href="/about-us">About us</Link>
      <Link href="/contact-us">Contact-us</Link>
      <h2>Intercepting Routes</h2>
      <Link href={`/login`}>login</Link>
      <Link href={`/cart`}>Open cart</Link>
      <Link href="/products/p001">product/p001</Link>
      <WhyChooseUsSection />
      <TestimonialSection />
      <Banner data={homePageBanner} />
      <Banner data={shopBannerData} />
      <Banner data={aboutUsBanner} />
      <Banner data={contactUsBanner} />
    </main>
  );
}
