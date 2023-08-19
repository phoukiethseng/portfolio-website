import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodSchemas } from "@/lib/validationSchemas";
import type * as z from "zod";
import { useForm } from "react-hook-form";
import Button from "@/components/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
  const form = useForm<z.infer<typeof zodSchemas.contactForm>>({
    resolver: zodResolver(zodSchemas.contactForm),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof zodSchemas.contactForm>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-stretch justify-start"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="email@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input {...field} type="text" placeholder="Your message" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"sm"} type="submit" className="mt-3 font-semibold">
          Send
        </Button>
      </form>
    </Form>
  );
}
