import { footerData } from "@/lib/data";
import Link from "next/link";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import styles from "./footer.module.css";
import NewsLetter from "@/components/NewsLetter";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.footerImageContainer}>
				<div className={styles.footerImageWrapper}>
					<Image fill src={footerData.footerImage} alt="footer image" />
				</div>
			</div>
			{/* newsletter */}
			<NewsLetter />
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
