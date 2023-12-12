import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col p-20 gap-2">
			<h2>Normal Routes</h2>
			<Link href="/products">shop or all products</Link>
			<Link href="/products/p001">product/p001</Link>
			<Link href="/about-us">About us</Link>
			<Link href="/contact-us">Contact-us</Link>
			<h2>Intercepting Routes</h2>
			<Link href={`/login`}>login</Link>
			<Link href={`/cart`}>Open cart</Link>
			<Link href="/products/p001">product/p001</Link>
		</main>
	);
}
