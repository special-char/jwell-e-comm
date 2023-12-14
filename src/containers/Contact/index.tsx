import React from "react";
import { contactDetails } from "@/lib/data";
import ContactDetail from "@/components/ContactDetail";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section>
      <div className="py-12 flex flex-col gap-16 max-w-4xl mx-auto">
        <div className="flex justify-between flex-wrap gap-4">
          {contactDetails &&
            contactDetails.map((item) => {
              return <ContactDetail key={item.id} data={item} />;
            })}
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
