// 

import { footerData } from "@/lib/data";
import Link from "next/link";
// import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import styles from "./footer.module.css";
// import NewsLetter from "@/components/NewsLetter";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		// <div className={styles.footerWrapper}>
		// 	<div className={styles.footerImageContainer}>
		// 		<div className={styles.footerImageWrapper}>
		// 			<Image fill src={footerData.footerImage} alt="footer image" />
		// 		</div>
		// 	</div>
		// 	{/* newsletter */}
		// 	<NewsLetter />
		// 	<footer className={styles.footer}>
		// 		<h4 className={styles.heading}>{footerData.heading}</h4>
		// 		<div className={styles.footerDataWrapper}>
		// 			<div className={styles.descriptionWrapper}>
		// 				<p className={styles.description}>{footerData.description}</p>
		// 				<SocialIcons />
		// 			</div>
		// 			<div className={styles.footerLinks}>
		// 				{footerData?.footerLinks?.map((item, index) => {
		// 					return (
		// 						<div key={index} className={styles.footerLinkSection}>
		// 							{item?.map((link) => {
		// 								return (
		// 									<Link
		// 										key={link.id}
		// 										href={link.url}
		// 										className={styles.link}
		// 									>
		// 										{link.title}
		// 									</Link>
		// 								);
		// 							})}
		// 						</div>
		// 					);
		// 				})}
		// 			</div>
		// 		</div>
		// 		<hr className="opacity-30" />
		// 		<div className={styles.copyrightWrapper}>
		// 			<p className="sm">{footerData.copyright.description}</p>
		// 			<div className={styles.copyrightLinks}>
		// 				{footerData.copyright.links.map((link) => {
		// 					return (
		// 						<Link
		// 							key={link.id}
		// 							href={link.url}
		// 							className={styles.copyrightLink}
		// 						>
		// 							{link.title}
		// 						</Link>
		// 					);
		// 				})}
		// 			</div>
		// 		</div>
		// 	</footer>
		// </div>

		<div>

			<footer className="bg-black-200  font-sans dark:bg-white">
				<div className=" py-12">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
						<div className="sm:col-span-2">
							<h1 className="max-w-lg text-xl  font-semibold Weight:700;   tracking-tight text-black  xl:text-2xl dark:text-white">SIGN UP FOR NEWSLATTER</h1>

							<div className="text-black">Subscribe to our newsletters <div />
								<div>now and stay up-to-date with</div>
								<div>new collections</div>

							</div>

							<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
								<input id="email" type="text" className="px-4 py-2 text-white bg-white border rounded-md dark:bg-gray-900 dark:text-white dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Enter Your Email" />


								<button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-500 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-80">

								</button>
							</div>
						</div>

						<div>
							<p className="font-semibold text-black dark:text-black">PRODUCT</p>

							<div className="flex flex-col items-start mt-5 space-y-2">
								<p className="text-black transition-colors duration-300 dark:text-white  hover:cursor-pointer hover:text-pink-300">Prices drop</p>
								<p className="text-blacktransition-colors duration-300 dark:text-white  hover:cursor-pointer hover:text-pink-300">New products</p>
								<p className="text-blacktransition-colors duration-300 dark:text-white  hover:cursor-pointer hover:text-pink-300">Best sales</p>
								<p className="text-black transition-colors duration-300 dark:text-white  hover:cursor-pointer hover:text-pink-300">Contact us</p>
							</div>
						</div>

						<div>
							<p className="font-semibold text-black dark:text-black">ABOUT US</p>

							<div className="flex flex-col items-start mt-5 space-y-2">
								<p className="text-black transition-colors duration-300 dark:text-white  hover:cursor-pointer hover:text-pink-300">Address: The Barn, Ullenhall, Henley in Arden B578 5CC, England</p>
								<p className="text-black transition-colors duration-300 dark:text-white  hover:cursor-pointer hover:text-pink-300">Call Us: +123 321 345</p>
								<p className="text-black transition-colors duration-300 dark:text-white  hover:cursor-pointer hover:text-pink-300">Email: info@yourdomain.com
								</p>
							</div>
						</div>
					</div>

					<hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

					<div className="sm:flex sm:items-center sm:justify-between">
						<div className="flex flex-1 gap-4 hover:cursor-pointer">


						</div>

						<div className="flex gap-4 hover:cursor-pointer">
							<img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
							<img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
							<img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
							<img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />

						</div>
					</div>
					<p className="font-sans p-8 text-black text-start md:text-center md:text-lg md:p-4">Online Shopping/ Promotions/ My Orders /Help/ Customer Service/ Support/ Most Populars/ New Arrivals /Special Products /Manufacturers /Our Stores/ Shipping /Payments /Warantee /Refunds/ Checkout /Discount /Refunds /Policy Shipping/</p>
					<div className="sm:flex sm:items-center justify-center align-middle max-w-full">
						<img src="https://template.hasthemes.com/hiraola/hiraola/assets/images/footer/payment/1.png " />
					</div>
					<p className="font-sans p-8  text-black text-start md:text-center md:text-lg md:p-4">Copyright © 2022 Hiraola. All rights reserved.</p>
				</div>
			</footer>
		</div>


	);
};

export default Footer;
