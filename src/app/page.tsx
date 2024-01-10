import Divider from "@/components/bannner2";
import Carousel from "@/components/carousel";
import Label from "@/components/label";
import Sale from "@/components/salebanner";
import StaticBanner from "@/components/staticbanner";
import Blog from "@/containers/blog";
import Category from "@/containers/category";
import NewArrival from "@/containers/newarrivals";
import Trending from "@/containers/trending";



export default function Home() {
	return (
		
		<>
	
		<Carousel/>
		<Sale/>
		<Category/>
		<StaticBanner/>
		<NewArrival/>
		<Divider/>
		<Trending/>
		<Blog/>
		<Label/>
		
		
		</>
				
	);
}
