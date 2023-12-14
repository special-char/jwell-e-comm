import ContactForm from "@/containers/ContactForm";
import ContactUsBanner from "@/containers/ContactUsBanner";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ContactUsBanner />
      <ContactForm />
    </>
  );
};

export default page;
