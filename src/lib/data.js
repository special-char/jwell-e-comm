import Facebook from "@/public/icons/facebook.svg";
import Twitter from "@/public/icons/twitter.svg";
import Instagram from "@/public/icons/instagram.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import Plus from "@/public/icons/plus.svg";

//----------------------------NAVBAR----------------------------------//
export const navbarData = {
  heading1: "Bea You",
  heading2: ".",
  navLinks: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Shop",
      url: "/products",
    },
    {
      id: 3,
      title: "About us",
      url: "/about-us",
    },
    {
      id: 4,
      title: "Contact us",
      url: "/contact-us",
    },
  ],
};

//-------------------------------HOME PAGE ------------------------------//
export const homePageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "Less is more when it comes to skin care.",
  description: "Beautifull you",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
};

export const topProduct = {
  heading: "Crafted with excellent material.",
  desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  btn: "Explore",
};

export const whyChooseUs = {
  image: "/images/whyChooseUsImg.jpg",
  heading: "Why Choose Us",
  desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  services: [
    {
      id: 1,
      icon: "/icons/shippingtruck.svg",
      heading: "Fast & Free Shipping",
      detail:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 2,
      icon: "/icons/bag.svg",
      heading: "Easy to Shop",
      detail:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 3,
      icon: "/icons/support.svg",
      heading: "24/7 support",
      detail:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 4,
      icon: "/icons/return.svg",
      heading: "Hassle free return",
      detail:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
  ],
};

export const help = {
  image1: "",
  image2: "",
  image3: "",
  heading1: "We Help You Make Modern Interior Design",
  description:
    "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada",
  icon: "",
  points: [
    {
      id: 1,

      pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
    },
    {
      id: 2,

      pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
    },
    {
      id: 3,

      pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
    },
    {
      id: 4,

      pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
    },
  ],
  btn: "",
};

export const testimonialData = {
  heading: "Testimonials",
  testimonialCards: [
    {
      id: 1,
      description:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
      image: "/images/person-1.png",
      name: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      id: 2,
      description:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
      image: "/images/person-1.png",
      name: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      id: 3,
      description:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
      image: "/images/person-1.png",
      name: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
  ],
};

//-------------------------------FOOTER-------------------------------//

export const footerData = {
  newsletter: {
    heading: "Subscribe to Newsletter",
  },
  heading: "Furni.",
  desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant",
  socialmedia: [
    {
      id: 1,
      name: "facebook",
      icon: Facebook,
    },
    {
      id: 2,
      name: "Twitter",
      icon: Twitter,
    },
    {
      id: 3,
      name: "Instagram",
      icon: Instagram,
    },
    {
      id: 4,
      name: "Linkedin",
      icon: Linkedin,
    },
  ],
  footerLinks: [
    [
      {
        id: 1,
        title: "About us",
        link: "/",
      },
      {
        id: 2,
        title: "Service",
        link: "/",
      },

      {
        id: 3,
        title: "Contact us",
        link: "/",
      },
    ],
    [
      {
        id: 1,
        title: "Support",
        link: "/",
      },
      {
        id: 2,
        title: "Knowledge base",
        link: "/",
      },
    ],
    [
      {
        id: 1,
        title: "Jobs",
        link: "/",
      },
      {
        id: 2,
        title: "Our team",
        link: "/",
      },
      {
        id: 3,
        title: "Leadership",
        link: "/",
      },
      {
        id: 4,
        title: "Privacy Policy",
        link: "/",
      },
    ],
    [
      {
        id: 1,
        title: "Nordic Chair",
        link: "/",
      },
      {
        id: 2,
        title: "Kruzo Aero",
        link: "/",
      },
      {
        id: 3,
        title: "Ergonomic Chair",
        link: "/",
      },
    ],
  ],
};

//-----------------------------SHOP SECTION---------------------------------------------//

export const shopBannerData = {
  bgImage: "",
  heading: "Shop",
};

export const products = [
  {
    id: 1,
    imgUrl: "/images/product1.png",
    title: "Nordic Chair",
    price: "$50.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 2,
    imgUrl: "/images/product2.png",
    title: "Kurzo Aero Chair",
    price: "$78.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 3,
    imgUrl: "/images/product3.png",
    title: "Ergonomic Chair",
    price: "$43.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 4,
    imgUrl: "",
    title: "Ergonomic Chair",
    price: "$43.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 5,
    imgUrl: "",
    title: "Ergonomic Chair",
    price: "$43.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 6,
    imgUrl: "",
    title: "Ergonomic Chair",
    price: "$43.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 7,
    imgUrl: "",
    title: "Ergonomic Chair",
    price: "$43.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 8,
    imgUrl: "",
    title: "Ergonomic Chair",
    price: "$43.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 9,
    imgUrl: "",
    title: "Ergonomic Chair",
    price: "$43.00",
    btn: Plus,
    desription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
];
//-------------------------------------ABOUT US -------------------------------------------//

export const aboutUsBanner = {
  bgImage: "/images/bannerImage.png",
  heading: "About Us",
  desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  btn1: "Shop Now",
  btn2: "Explore",
};

export const ourTeamData = {
  title: "Our Team",
  teamMember: [
    {
      id: 1,
      image: "",
      name: "Lawson Arnold",
      designation: "CEO, Founder, Atty.",
      description:
        " in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      btnText: "Learn More",
    },
    {
      id: 2,
      image: "",
      name: "Jeremy Walker",
      designation: "CEO, Founder, Atty.",
      description:
        "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      btnText: "Learn More",
    },
    {
      id: 3,
      image: "",
      name: "Patrik White",
      designation: "CEO, Founder, Atty.",
      description:
        "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      btnText: "Learn More",
    },
    {
      id: 4,
      image: "",
      name: "Kathryn Ryan",
      designation: "CEO, Founder, Atty.",
      description:
        "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      btnText: "Learn More",
    },
  ],
};
//----------------------------SERVICES------------------------//

export const serviceBanner = {
  bannerBgImage: "",
  bannerHeading: "About Us",
  bannerdescription:
    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  bannerbtn1: "Shop Now",
  bannerbtn2: "Explore",
};

//-----------------------------CONTACT-US--------------------------//

export const contactUsBanner = {
  bgImage: "/images/bannerImage.png",
  heading: "Contact Us",
  desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  btn1: "Shop Now",
  btn2: "Explore",
};

export const contactdetail = [
  {
    id: 1,
    icon: "",
    detail: "43 Raymouth Rd. Baltemoer, London 3910",
  },
  {
    id: 2,
    icon: "",
    info: "info@yourdomain.com",
  },
  {
    id: 3,
    icon: "",
    info: "+1 294 3925 3939",
  },
];

export const contactform = {
  name1: "First name",
  name1: "Last name",
  email: "Email Address",
  message: "Message",
};

//-----------------------------CART-------------------------------------//
export const cartBanner = {
  bgimage: "",
  heading: "Cart",
};

export const cartPage = {
  cartDetail: [
    {
      id: 1,
      title: "Image",
    },
    {
      id: 2,
      title: "Product Name",
    },
    {
      id: 3,
      title: "Price",
    },
    {
      id: 4,
      title: "Quantity",
    },
    {
      id: 5,
      title: "Total",
    },
    {
      id: 6,
      title: "Remove",
    },
  ],
  cartProduct: [
    {
      id: 1,
      image: "",
      productName: "Chair",
      amount: "$50.00",
    },
    {
      id: 2,
      image: "",
      productName: "Chair",
      amount: "$50.00",
    },
    {
      id: 3,
      image: "",
      productName: "Chair",
      amount: "$50.00",
    },
  ],
  btn1: "Update Cart",
  btn2: "Continue shopping",
};

export const coupon = {
  coupontext: "Coupon",
  description: "Lorem a src jkuyyhur",
  placeholdertext: "Enter the coupon code",
  btn: "Apply Code",
};

export const cartTotal = {
  title: "Cart Total ",
  subtotal: "subtotal",
  total: "total",
  btn: "Proceed To Checkout",
};
//-----------------------------CHECKOUT FORM--------------------------//
