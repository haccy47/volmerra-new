"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">


      {/* Background */}

      <motion.div

        initial={{
          scale:1.15,
          opacity:0
        }}

        animate={{
          scale:1,
          opacity:1
        }}

        transition={{
          duration:2,
          ease:"easeOut"
        }}

        className="
        absolute
        inset-0
        bg-cover
        bg-center
        "

        style={{
          backgroundImage:"url('/volmerra.jpg')"
        }}

      />


      {/* Dark overlay */}

      <div
        className="
        absolute
        inset-0
        bg-black/65
        backdrop-blur-[3px]
        "
      />



      {/* Content */}

      <div
        className="
        relative
        z-10
        flex
        h-screen
        flex-col
        items-center
        justify-center
        px-5
        text-center
        "
      >



        <motion.h1

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1.2
          }}

          className="
          font-cinzel
          text-5xl
          font-black
          tracking-[0.25em]
          text-white
          drop-shadow-2xl

          sm:text-7xl
          md:text-9xl
          "

        >
          VOLMERRA

        </motion.h1>




        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:.6,
            duration:1
          }}

          className="
          mt-6
          max-w-xl
          font-inter
          text-xs
          tracking-[0.3em]
          text-white/70

          sm:text-lg
          "

        >
          Taşların, efsanelerin ve unutulmuş güçlerin şekillendirdiği bir dünya.

        </motion.p>





        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:1,
            duration:1
          }}

          className="relative z-50"

        >

          <Link

            href="/account"

            className="
            relative
            z-50
            mt-10
            inline-block
            rounded-full

            border
            border-white/30

            bg-white/10

            px-8
            py-4

            font-inter
            text-sm
            font-bold
            uppercase

            tracking-[0.25em]

            text-white

            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-105
            hover:bg-white/20
            "

          >

            Volmerra'ya Katıl

          </Link>


        </motion.div>





        <motion.div

          animate={{
            y:[0,10,0]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="
          absolute
          bottom-8
          text-white/40
          text-xs
          tracking-[0.4em]
          "

        >

          KAYDIR

        </motion.div>



      </div>


    </section>
  );
}