import React from "react";
import ContactForm from "../contact-form";
import { Label } from "@radix-ui/react-label";

export default function Contact() {
  return (
    // <div className="flex h-full w-full flex-col items-center justify-center">
    //   <ContactForm />
    // </div>
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-[80%] max-w-[500px] flex-col items-stretch justify-start gap-6 sm:w-[70%] md:w-[50%]">
        <Label className="text-center text-3xl font-bold">Contact Me</Label>
        <ContactForm />
      </div>
    </div>
  );
}
