import Header from "@/components/Header";
import NewArrival from "@/components/NewArrivals";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/carousel";
import Salebanner from "@/components/salebanner";
import Sale from "@/components/salebanner";
import View from "@/components/view/view";
import Registration from "./registration";
import Add from"@/app/Add/page";
// import Checkout from "@/components/checkout/checkout";
import Checkoutpage from "@/app/checkoutpage/index";
import Login from "./login/page";






export default function Home() {
  return (
    <>
       <Carousel />
      <Sale />
      <NewArrival/>
      <ProductCard img={""} name={""} price={""}/>
      <Salebanner/>
      <Add/>
      {/* <Checkout/> */}
      <Checkoutpage/>
      <Login/>
      <Registration/>
      
      
      
      
      
    </>
  );
}
