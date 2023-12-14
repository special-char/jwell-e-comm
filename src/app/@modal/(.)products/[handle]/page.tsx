import Modal from "@/components/common/Model/index";
import Image from "next/image";
import { products } from "@/lib/data";
import StarIcon from "@/public/icons/star.svg";
import Button from "@/components/common/Button";
import clsx from "clsx";
import Link from "next/link";
type Props = {
  params: {
    handle: string;
  };
};
const page = ({ params }: Props) => {
  return (
    <Modal>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 rounded-md">
        <div className="relative w-full aspect-square">
          <Image
            src={products[0].productImage}
            alt={products[0].productName}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col justify-between gap-4">
          <h3 className="font-bold">{products[0].productName}</h3>
          <p className="text-gray">{products[0].productDescription}</p>

          <h6 className="font-bold">{products[0].productPrice}</h6>

          <div className="flex items-center gap-4">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={clsx("h-5 w-5 flex-shrink-0", {
                    ["text-yellow"]: products[0].rating > rating,
                    ["text-gray/20"]: products[0].rating <= rating,
                  })}
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="text-gray">{products[0].reviewCount} reviews</p>
          </div>

          <Button
            type="submit"
            variant="fill"
            color="green"
            className={"!rounded-md"}
          >
            Add to bag
          </Button>
          <Link href={"#"} className="text-blue-500 text-center">
            view more
          </Link>
        </div>
        {/* <div>
        Product detail with id:{" "}
        <span className="text-rose-500">{params.handle}</span>
      </div> */}
      </div>
    </Modal>
  );
};

export default page;
