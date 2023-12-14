import Contact from "@/containers/Contact";
import ContactForm from "@/containers/Contact";
import ContactUsBanner from "@/containers/ContactUsBanner";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ContactUsBanner />
      <Contact />
    </>
  );
};

export default page;
