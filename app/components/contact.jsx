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

  countryCode: z.string().min(1, {
    message: "Please select a country code.",
  }),

  contact: z.string().regex(/^[0-9]{8,15}$/, {
    message: "Enter a valid contact number (8-15 digits).",
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
      countryCode: "",
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
        countryCode: values.countryCode,
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

  // Country codes list
  const countryCodes = [
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+61", country: "Australia" },
    { code: "+55", country: "Brazil" },
    { code: "+7", country: "Russia" },
    { code: "+82", country: "South Korea" },
    { code: "+31", country: "Netherlands" },
    { code: "+46", country: "Sweden" },
    { code: "+47", country: "Norway" },
    { code: "+41", country: "Switzerland" },
    { code: "+32", country: "Belgium" },
    { code: "+43", country: "Austria" },
    { code: "+45", country: "Denmark" },
    { code: "+358", country: "Finland" },
    { code: "+353", country: "Ireland" },
    { code: "+351", country: "Portugal" },
    { code: "+30", country: "Greece" },
    { code: "+48", country: "Poland" },
    { code: "+420", country: "Czech Republic" },
    { code: "+36", country: "Hungary" },
    { code: "+40", country: "Romania" },
    { code: "+971", country: "UAE" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+27", country: "South Africa" },
    { code: "+52", country: "Mexico" },
    { code: "+54", country: "Argentina" },
    { code: "+56", country: "Chile" },
    { code: "+57", country: "Colombia" },
    { code: "+51", country: "Peru" },
    { code: "+60", country: "Malaysia" },
    { code: "+65", country: "Singapore" },
    { code: "+66", country: "Thailand" },
    { code: "+62", country: "Indonesia" },
    { code: "+63", country: "Philippines" },
    { code: "+84", country: "Vietnam" },
    { code: "+92", country: "Pakistan" },
    { code: "+880", country: "Bangladesh" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+20", country: "Egypt" },
    { code: "+234", country: "Nigeria" },
    { code: "+254", country: "Kenya" },
    { code: "+212", country: "Morocco" },
    { code: "+64", country: "New Zealand" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-8">
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
          <div className="grid grid-cols-3 gap-4 bg-black">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country Code</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-black text-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      <option
                        value=""
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Select
                      </option>
                      {countryCodes.map((item) => (
                        <option
                          key={item.code}
                          value={item.code}
                          style={{ backgroundColor: "black", color: "white" }}
                        >
                          {item.code} ({item.country})
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage className={"text-[crimson] text-left"} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your contact number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className={"text-[crimson] text-left"} />
                </FormItem>
              )}
            />
          </div>
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
            className={"w-full hover:bg-white/10  transition-all duration-200 mb-12"}
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
    </div>
  );
}
