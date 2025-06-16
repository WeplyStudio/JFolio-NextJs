
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { Send, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  email: z.string().email({ message: "Harap masukkan alamat email yang valid." }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-md">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Mengirim...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Kirim Pesan
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, {
    message: "",
    success: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema), // This will now use the Indonesian error messages
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Sukses!" : "Kesalahan",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        reset(); 
      }
    }
  }, [state, toast, reset]);

  const onSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formAction(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-foreground/80">Nama Lengkap</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Nama Anda"
          className="mt-1 bg-background border-border focus:border-primary focus:ring-primary"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="text-foreground/80">Alamat Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="email.anda@contoh.com"
          className="mt-1 bg-background border-border focus:border-primary focus:ring-primary"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground/80">Pesan</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Pesan Anda..."
          rows={5}
          className="mt-1 bg-background border-border focus:border-primary focus:ring-primary"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
