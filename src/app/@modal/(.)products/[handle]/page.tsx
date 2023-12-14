import Modal from "@/components/common/Model";

type Props = {
	params: {
		handle: string;
	};
};

const page = ({ params }: Props) => {
	return (
		<Modal>
			<div>
				Product detail with id:{" "}
				<span className="text-rose-500">{params.handle}</span>
			</div>
		</Modal>
	);
};

export default page;
