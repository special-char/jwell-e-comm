import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid sm:grid-cols-2 sm:col-span-2 gap-4">
          <Input name="firstname" label="First name" />
          <Input name="lastname" label="Last name" />
        </div>
        <Input
          name="email"
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
      </div>
      <div>
        <Button variant="fill" color="black" title="send message">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
