import SendIcon from "@/public/icons/send.svg";
import MailIcon from "@/public/icons/envelope-outline.svg";
import styles from "./newsLetter.module.css";
import Input from "../common/Input";
import { footerData } from "@/lib/data";
import SubmitButton from "../common/SubmitButton";

type Props = {};

const NewsLetter = (props: Props) => {
	async function subscribeToNewsletter(formData: FormData) {
		"use server";

		const rawFormData = {
			name: formData.get("name"),
			email: formData.get("email"),
		};

		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(formData);
			}, 3000);
		});

		console.log("formdata", rawFormData);

		// mutate data
		// revalidate cache
	}
	return (
		<section>
			<div className={styles.newsLetterHeadingWrapper}>
				<MailIcon className={styles.newsLetterHeadingIcon} />
				<p className={styles.newsLetterHeading}>
					{footerData.newsLetter.heading}
				</p>
			</div>
			<form className={styles.newsLetterForm} action={subscribeToNewsletter}>
				<Input name="name" placeholder="Enter your name" />
				<Input name="email" placeholder="Enter your email" type="email" />
				<SubmitButton
					variant="fill"
					color="green"
					className="!rounded-xl"
					type="submit"
				>
					<span className="sr-only">Subscribe to Newsletter button</span>
					<SendIcon className={styles.newsLetterFormIcon} />
				</SubmitButton>
			</form>
		</section>
	);
};

export default NewsLetter;
