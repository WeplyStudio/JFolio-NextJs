
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  email: z.string().email({ message: "Alamat email tidak valid." }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Data formulir tidak valid",
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Formulir kontak dikirim:", parsed.data);

  // In a real application, you would handle email sending here.
  // For example, using a service like SendGrid, Resend, or Nodemailer.

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate potential error
  // if (Math.random() > 0.5) {
  //   return {
  //     message: "Gagal mengirim pesan. Silakan coba lagi nanti.",
  //     success: false,
  //   };
  // }

  return {
    message: "Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda.",
    success: true,
  };
}
