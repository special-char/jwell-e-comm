import Header from "@/components/common/Header";
import HomeBanner from "@/containers/HomeBanner";
import HomeProduct from "@/containers/HomeProduct";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeBanner />
      <HomeProduct />
      <WhyChooseUsSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
