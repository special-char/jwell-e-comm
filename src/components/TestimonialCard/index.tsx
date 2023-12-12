import Image from "next/image";

type Props = {
	data: {
		id: number;
		description: string;
		image: string;
		name: string;
		position: string;
	};
};

const TestimonialCard = ({ data }: Props) => {
	return (
		<div className="sm:w-[60%] mx-auto flex flex-col justify-center items-center gap-10 pb-20">
			<p className="text-center text-gray">{data.description}</p>
			<div className="flex flex-col gap-2 items-center">
				<div className="w-20 aspect-square relative rounded-full overflow-hidden">
					<Image src={data.image} alt="testimonial person" fill />
				</div>
				<p className="small font-bold">{data.name}</p>
				<p className="small text-gray">{data.position}</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
