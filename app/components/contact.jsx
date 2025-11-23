// name: "",
//     email: "",
//     contact: "",
//     message: "",

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { submitForm } from "../../lib/actions/form";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    })
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(32, {
      message: "Name must not be longer than 32 characters.",
    }),

  email: z.email({ message: "Please enter a valid email address." }),

  contact: z.string().regex(/^\+[1-9]\d{1,3}[- ]?\d{6,14}$/, {
    message: "Enter a valid contact number with country code.",
  }),

  message: z
    .string()
    .min(1, {
      message: "Message must be at least 1 character.",
    })
    .max(500, {
      message: "Message must not be longer than 500 characters.",
    }),
});

export default function ContactForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    setIsLoading(true);
    try {
      const data = {
        name: values.name,
        email: values.email,
        contact: values.contact,
        message: values.message,
      };
      await submitForm(data);
      toast.success("Form submitted successfully!");
      form.reset();
      router.refresh();
      setIsLoading(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage className={"text-[crimson] text-left"} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input placeholder="Enter your contact number" {...field} />
              </FormControl>
              <FormMessage className={"text-[crimson] text-left"} />
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
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage className={"text-[crimson] text-left"} />
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
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage className={"text-[crimson] text-left"} />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"outline"}
          disabled={isLoading}
          className={"w-full hover:bg-white/10  transition-all duration-200"}
        >
          {isLoading ? (
            <div className="flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
