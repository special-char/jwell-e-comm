import React from "react";
import Button from "../common/Button";
import { ContactDetailType } from "@/utils/types";

const ContactDetail = ({ data }: ContactDetailType) => {
  const Icon = data.icon;
  return (
    <div key={data.id} className="flex gap-4 items-center">
      <Button
        variant="fill"
        color="green"
        className="!rounded-xl !aspect-square !p-4"
      >
        <Icon className={"h-4"} />
      </Button>
      <p className="text-caption1">{data.description}</p>
    </div>
  );
};

export default ContactDetail;
