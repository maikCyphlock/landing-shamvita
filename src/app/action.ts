"use server"
import { Redis } from "@upstash/redis";
import zod from "zod";
const redis = Redis.fromEnv();
import {Ratelimit} from "@upstash/ratelimit";

interface Email {
  email: string;
  timestamp: number;
}
const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.fixedWindow(5, "30 s"),
  });
const SaveEmailInUpstash = async (email: string) => {
    const identifier = "api";
    const limit = await ratelimit.limit(identifier);
    if (limit.success === false) {
     throw new Error("Has excededo el limite de registros");
    }


  const schema = zod.string().email("El email no es válido");
  const SafaEmail = schema.safeParse(email);
  if( !SafaEmail.success){
    return 'error ' + SafaEmail.error.issues[0].message
  }
  const emailObject: Email = {
    email: email,
    timestamp: Date.now(),
  };
  
  const result = await redis.hsetnx("emails", email, JSON.stringify(emailObject));
  console.log(result);
  if (result === 1) {
     return 'ok'
  } else {
    
    throw new Error("Ese email ya fue registrado");
  }
  
};

export { SaveEmailInUpstash };