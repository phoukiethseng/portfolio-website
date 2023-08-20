import { ContactFormContentCharLimit } from "@/lib/validationSchemas";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from "./ui/textarea";
import contact from "@/lib/contact";

export default function ContactForm() {
  const form = useForm<z.infer<typeof zodSchemas.contactForm>>({
    resolver: zodResolver(zodSchemas.contactForm),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(formValues: z.infer<typeof zodSchemas.contactForm>) {
    contact.notify(formValues).catch((error) => {
      console.log("Failed to notify contact, error:", error);
    });
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
                <Textarea
                  {...field}
                  className="min-h-[150px]"
                  placeholder="Your message"
                />
              </FormControl>
              <FormDescription className="text-right text-xs">
                Character limit: {ContactFormContentCharLimit}
              </FormDescription>
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
