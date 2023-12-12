import { footerData } from "@/lib/data";
import Link from "next/link";
import MailIcon from "@/public/icons/envelope-outline.svg";

type Props = {};

const Footer = (props: Props) => {
	return (
		<>
			{/* newsletter */}
			<section className="pb-0">
				<div className="flex gap-2 items-center">
					<MailIcon className="w-8 aspect-square" />
					<p className="font-semibold text-green">
						{footerData.newsletter.heading}
					</p>
				</div>
				<div>form</div>
			</section>
			<footer className="py-20 flex flex-col gap-4">
				<h4 className="text-green font-semibold">{footerData.heading}</h4>
				<div className="grid lg:grid-cols-[30%_1fr] gap-8 mb-10">
					<p className="small text-gray">{footerData.desc}</p>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-10">
						{footerData?.footerLinks?.map((item, index) => {
							return (
								<div key={index} className="flex flex-col gap-4">
									{item?.map((link) => {
										return (
											<Link key={link.id} href={link.link}>
												{link.title}
											</Link>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
				<hr className="opacity-30" />
				<div className="flex max-md:flex-col md:justify-between gap-4 text-gray">
					<p className="text-center sm">
						Copyright ©2023. All Rights Reserved.
					</p>
					<div className="flex gap-4 justify-center items-center text-caption2">
						<span>Terms & Conditions</span>
						<span>Privacy Policy</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
