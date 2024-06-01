import RetroGrid from "@/components/magicui/retro-grid";
import FormEmail from "./FormEmail";
import { Redis } from "@upstash/redis";
import WordFadeIn from "@/components/magicui/word-fade-in";
import NumberTicker from "@/components/magicui/number-ticker";
import { Badge } from "@/components/ui/badge";
import ShineBorder from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import dynamic from 'next/dynamic'


const NumberTickerLazy = dynamic(() => import("@/components/magicui/number-ticker"), { ssr: false })
const RetroGridLazy = dynamic(() => import("@/components/magicui/retro-grid"), { ssr: false })
const FormEmailLazy = dynamic(() => import("./FormEmail"), { ssr: false })

const redis = Redis.fromEnv();
export const revalidate = 600;
const RetroGridDemo = async () => {
  const emails = await redis.hgetall("emails");
  let emailsLength = 0;
  if (emails !== null) {
  emailsLength = Object.keys(emails).length;
  }
  
  return (
    <main className=" container mx-auto grid place-items-center min-h-screen gap-4">
      <section className=" md:max-w-6xl flex flex-col text-balance bg-zinc mt-16">
        <ShineBorder
          borderRadius={8}
          className="text-center text-xl font-bold capitalize mb-4 self-center"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          🎉 Introducimos a Shamvita
        </ShineBorder>
        <WordFadeIn
          className="text-center font-extrabold  text-6xl"
          delay={0.3}
          words="el talento se encuentra con la oportunidad"
        />

        <p className="text-center mt-8 text-xl  font-medium text-balance md:max-w-2xl self-center z-10">
          ¿Eres un profesional talentoso buscando nuevas oportunidades o persona
          en búsqueda de expertos cualificados?.
        </p>
        <Link href="#CTA" className="text-center z-10 mt-4 text-balance self-center">
          <Button
            className="text-center text-2xl md:text-xl mt-4 text-balance self-center "
            variant={"outline"}
          >
            {" "}
            Registrate{" "}
          </Button>
        </Link>
        <h2 className="mt-64 text-center  text-4xl font-bold tracking-[-0.02em] text-black/40 drop-shadow-sm dark:text-white/80 md:text-6xl md:leading-[5rem]">
          Conéctate. Trabaja. <span className=" dark:text-[#d6b43a] ">Brilla</span>.
        </h2>
        <p className="text-center self-center text-xl text-pretty mt-4 md:max-w-2xl">
          En <b><i>Venezuela</i></b>, encontrar personas con habilidades específicas a
          menudo depende de referencias personales. Ahora, traemos una solución
          que te permitirá mostrar tu talento y conectar con los mejores
          profesionales del país.
        </p>
     
      
      </section>
      <section
        title="CTA"
        id="CTA"
        className="mt-32 mb-20 w-full  flex flex-col items-center gap-4"
      >
        <div className=" relative flex h-full w-80 md:w-full max-w-xl items-center justify-center overflow-hidden rounded-lg border border-[#4b425a] bg-background p-20 md:shadow-xl">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#FE8FB5] via-[#cc9fff] to-[#f0c731] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            shamvita 
          </span>

          <RetroGridLazy />
        </div>
        <FormEmailLazy />
        <p className="italic text-center text-xl text-gray-500">
          ¡Más de{" "}
          <NumberTickerLazy value={emailsLength > 100 ? emailsLength : 100} />{" "}
          personas se han apuntado en la lista de espera!
        </p>
      </section>
    </main>
  );
};

export default RetroGridDemo;
