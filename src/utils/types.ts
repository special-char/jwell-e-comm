export type BannerPropsType = {
  data: {
    backgroundBannerImage: string;
    heading: string;
    description: string;
    actionBtn1: string;
    actionBtn2: string;
  };
};

export type testimonialCardType = {
  data: {
    id: number;
    description: string;
    image: string;
    name: string;
    designation: string;
  };
};

export type ProductCardType = {
  data: {
    id: 1;
    productImage: string;
    productName: string;
    productPrice: string;
    addBtn: string;
    productDescription: string;
  };
};
