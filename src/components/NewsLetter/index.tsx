import React from "react";
import SendIcon from "@/public/icons/send.svg";
import MailIcon from "@/public/icons/envelope-outline.svg";
import Button from "@/components/common/Button";
import styles from "./newsLetter.module.css";
import Input from "../common/Input";
import { footerData } from "@/lib/data";

type Props = {};

const NewsLetter = (props: Props) => {
	async function subscribeToNewsletter(formData: FormData) {
		"use server";

		const rawFormData = {
			name: formData.get("name"),
			email: formData.get("email"),
		};

		console.log(formData);
		console.log(rawFormData);

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
				<Button
					variant="fill"
					color="green"
					className="!rounded-xl"
					type="submit"
				>
					<span className="sr-only">Subscribe to Newsletter button</span>
					<SendIcon className={styles.newsLetterFormIcon} />
				</Button>
			</form>
		</section>
	);
};

export default NewsLetter;
