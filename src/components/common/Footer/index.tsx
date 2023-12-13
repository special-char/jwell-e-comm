import { footerData } from "@/lib/data";
import Link from "next/link";
import MailIcon from "@/public/icons/envelope-outline.svg";
import Button from "@/components/common/Button";
import SocialIcons from "@/components/common/SocialIcons";
import SendIcon from "@/public/icons/send.svg";
import Input from "../Input";
import Image from "next/image";
import styles from "./footer.module.css";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.footerImageWrapper}>
				<Image fill src={footerData.footerImage} alt="footer image" />
			</div>
			{/* newsletter */}
			<section>
				<div className={styles.newsLetterHeadingWrapper}>
					<MailIcon className={styles.newsLetterHeadingIcon} />
					<p className={styles.newsLetterHeading}>
						{footerData.newsLetter.heading}
					</p>
				</div>
				<form className={styles.newsLetterForm}>
					<Input name="name" placeholder="Enter your name" />
					<Input name="email" placeholder="Enter your email" type="email" />
					<Button
						variant="fill"
						color="green"
						className="!rounded-xl"
						type="submit"
					>
						<SendIcon className={styles.newsLetterFormIcon} />
					</Button>
				</form>
			</section>
			<footer className={styles.footer}>
				<h4 className={styles.heading}>{footerData.heading}</h4>
				<div className={styles.footerDataWrapper}>
					<div className={styles.descriptionWrapper}>
						<p className={styles.description}>{footerData.description}</p>
						<SocialIcons />
					</div>
					<div className={styles.footerLinks}>
						{footerData?.footerLinks?.map((item, index) => {
							return (
								<div key={index} className={styles.footerLinkSection}>
									{item?.map((link) => {
										return (
											<Link
												key={link.id}
												href={link.url}
												className={styles.link}
											>
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
				<div className={styles.copyrightWrapper}>
					<p className="sm">{footerData.copyright.description}</p>
					<div className={styles.copyrightLinks}>
						{footerData.copyright.links.map((link) => {
							return (
								<Link
									key={link.id}
									href={link.url}
									className={styles.copyrightLink}
								>
									{link.title}
								</Link>
							);
						})}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
