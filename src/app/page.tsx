import WhyChooseUs from "@/containers/WhyChooseUs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-green">
      {/* <Link href={`/login`} className="bg-yellow text-white text-opacity-30">
        Click me
      </Link>
      <Link href={`/cart`} className="text-white text-opacity-40">
        Open cart
      </Link> */}
      <WhyChooseUs />
    </main>
  );
}
