import ProductModal from "@/components/products/ProductModal";
import { products } from "@/lib/data";
type Props = {
  params: {
    handle: string;
  };
};
const page = ({ params }: Props) => {
  const ProductDetail = products[0];
  return <ProductModal data={ProductDetail} />;
};

export default page;
