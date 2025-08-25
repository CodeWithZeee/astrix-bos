"use server";

import prisma from "../../lib/prisma"; // <-- relative path

export async function submitForm({ name, email, contact, message }) {
  try {
    const form = await prisma.form.create({
      data: { name, email, contact, message },
    });
    
    return { success: true, form };
  } catch (error) {
    console.error("Error creating form:", error);
    return { success: false, error: error.message || "Something went wrong" };
  }
}
