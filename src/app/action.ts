"use server"
import zod from "zod";

const SaveEmail = async (email: string) => {
  const schema = zod.string().email("El email no es válido");
  const SafaEmail = schema.safeParse(email);
  if( !SafaEmail.success){
    return 'error ' + SafaEmail.error.issues[0].message
  }

  console.log({email});
  
  return "ok"
  
};

export { SaveEmail as SaveEmailInUpstash };