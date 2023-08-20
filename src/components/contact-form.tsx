import { ContactFormContentCharLimit } from "@/lib/validationSchemas";
import React, { useState } from "react";
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
import { useToast } from "./ui/use-toast";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof zodSchemas.contactForm>>({
    resolver: zodResolver(zodSchemas.contactForm),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(formValues: z.infer<typeof zodSchemas.contactForm>) {
    setSubmitting(true);
    contact
      .notify(formValues)
      .then(() => {
        toast({
          description: "Success! Please wait for further contact via email",
        });
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          description:
            "Cannot submitting form at this time, Please try again later",
        });
        console.log("Failed to notify contact, error:", error);
      })
      .finally(() => setSubmitting(false));
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
        <Button
          disabled={submitting}
          size={"sm"}
          type="submit"
          className="mt-3 font-semibold"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}
