import React from "react";
import { contactDetails } from "@/lib/data";
import Button from "@/components/common/Button";

const ContactForm = () => {
  return (
    <section>
      <section className="flex justify-evenly flex-wrap">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex gap-4 items-center">
              <Button
                variant="fill"
                color="green"
                className="!rounded-xl !aspect-square !p-4"
              >
                <Icon className={"h-4"} />
              </Button>
              <p className="text-caption1">{item.description}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ContactForm;
