import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Form } from "react-hook-form";
import {z} from "zod"



const formSchema = zodResolver.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(2, { message: "min 2 length" })
    .max(8, { message: "max 8 length" }),
});

const page = () => {
  return (
    <>
      <h1>Register</h1>
      <Form>

      </Form>
    </>
  );
};

export default page;
