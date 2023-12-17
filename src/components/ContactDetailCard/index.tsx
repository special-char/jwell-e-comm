import Button from "../common/Button";
import { ContactDetailType } from "@/utils/types";
import style from "./contactdetail.module.css";
import { SVGProps, cloneElement } from "react";

const ContactDetailCard = ({ data }: ContactDetailType) => {
	const Icon = (props: SVGProps<SVGSVGElement>) => {
		const Ele = () => data.icon;
		return cloneElement(<Ele />, {
			...props,
		});
	};

	return (
		<div className={style.contactDetails}>
			<Button variant="fill" color="green" className={style.icon}>
				<Icon className="h-4" />
			</Button>
			<p className={style.description}>{data.description}</p>
		</div>
	);
};

export default ContactDetailCard;
