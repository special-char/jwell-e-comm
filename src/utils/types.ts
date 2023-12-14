export type DesktopNavType = {
  data: {
    heading1: string;
    heading2: string;
    navLinks: Array<{
      id: number;
      title: string;
      url: string;
    }>;
  };
};

export type MobileNavType = {
  data: {
    heading1: string;
    heading2: string;
    navLinks: Array<{
      id: number;
      title: string;
      url: string;
    }>;
  };
};

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
    productDescription: string;
  };
};
export type ServiceCardType = {
  data: {
    id: number;
    icon: string;
    heading: string;
    serviceDescription: string;
  };
};
export type ContactDetailType = {
  data: {
    id: number;
    icon: string;
    description: string;
  };
};
