
import CartItem from '@/components/common/CartItem';
import React from 'react';
import image from "../../../public/images/product1.png"



const ShoppingCart = () => {
    const productData = {
        id: 1,
        productName: 'Earring',
        productPrice: '$19.99',
        productDescription: 'This is an example product description.',
        rating: 4.5,
        reviewCount: 50,
        productImage:{image},
        handle: 'example-product',
        productThumbnail: {
          id: 1,
          url: {image},
        },
        productImages: [
          {
            id: 1,
            url: {image},
          },
          {
            id: 2,
            url:{image},
          },
        ],
      };
      

  return (
    <div>
      
      <CartItem data={productData} />
    </div>
  );
};

export default ShoppingCart;
