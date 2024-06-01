"use client";
import React from 'react'
import { Input } from "@/components/ui/input";
import zod from "zod";
import ShinyButton from "@/components/magicui/shiny-button";
import { toast } from "sonner"
import {useRouter} from "next/navigation";
import { SaveEmailInUpstash } from './action';

function FormEmail() {
    const router = useRouter();
    const schema = zod.string().email("El email no es válido");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const emailInput = form.elements.namedItem('email') as HTMLInputElement;
      const email = schema.safeParse(emailInput.value);
  
        if (!email.success) {
        toast.error(email.error.issues[0].message);
      }
      
     
      try {
        const result = await SaveEmailInUpstash(emailInput.value);
        if (result === 'ok') {
          toast.success('El email se registro correctamente');
          //TODO: Fix this Error 
          //@ts-ignore
          e.target.reset();
          router.refresh();
        } 
 
      } catch(error){
        //@ts-ignore
        toast.error(error.message);
      }
    };
  return (
    <form  className="flex flex-col-reverse md:flex-row gap-2 " onSubmit={handleSubmit}>
    <ShinyButton text="registrar" />
    <Input placeholder="john@gmail.com"  name="email"  className="bg-zinc-950 border-zinc-800 w-full" />
  </form>
  )
}

export default FormEmail