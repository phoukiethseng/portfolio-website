import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { type zodSchemas } from "@/lib/validationSchemas";
import { type z } from "zod";
import { useForm } from "react-hook-form";
import Button from "@/components/button";
import { Input } from "./ui/input";

export default function ContactForm() {
  const form = useForm<z.infer<typeof zodSchemas.contactForm>>({
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });
  function onSubmit(values: z.infer<typeof zodSchemas.contactForm>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={() => form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
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
