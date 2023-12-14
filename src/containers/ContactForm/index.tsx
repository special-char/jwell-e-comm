import React from "react";
import { contactDetails } from "@/lib/data";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const ContactForm = () => {
  return (
    <section>
      <div className="flex justify-between flex-wrap">
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
      </div>
      <form className="grid grid-cols-2 gap-4">
        <Input name="Firstname" label="First name" />
        <Input name="Lastname" label="Last name" />
        <Input
          name="Email"
          label="Email"
          type="email"
          wrapperClassName="col-span-2"
        />
        <Input
          as="textarea"
          name="message"
          label="Message"
          rows={5}
          wrapperClassName="col-span-2"
        />
      </form>
    </section>
  );
};

export default ContactForm;
