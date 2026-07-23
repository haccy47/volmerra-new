"use client";

import { motion } from "framer-motion";
import { signUp } from "../actions/auth";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="
        absolute
        inset-0
        bg-cover
        bg-center
        "
        style={{
          backgroundImage: "url('/volmerra.jpg')",
        }}
      />


      {/* Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/45
        "
      />


      {/* Glass Panel */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
        relative
        z-10
        w-[90%]
        max-w-md
        rounded-[30px]
        border
        border-white/20
        bg-white/10
        p-6
        sm:p-10
        shadow-2xl
        backdrop-blur-xl
        "
      >

        <div className="text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="
            font-cinzel
            text-4xl
            sm:text-5xl
            font-black
            tracking-[0.18em]
            text-white
            drop-shadow-xl
            "
          >
            VOLMERRA
          </motion.h1>


          <p
            className="
            mt-4
            text-xs
            tracking-[0.4em]
            uppercase
            text-white/60
            "
          >
            Yeni bir efsaneye katıl
          </p>

        </div>



        <form
          action={signUp}
          className="
          mt-10
          space-y-5
          "
        >

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="
            w-full
            rounded-2xl
            border
            border-white/20
            bg-white/10
            px-5
            py-4
            text-white
            outline-none
            placeholder:text-white/50
            backdrop-blur-md
            transition
            focus:border-yellow-400
            "
          />


          <input
            name="password"
            type="password"
            placeholder="Şifre"
            className="
            w-full
            rounded-2xl
            border
            border-white/20
            bg-white/10
            px-5
            py-4
            text-white
            outline-none
            placeholder:text-white/50
            backdrop-blur-md
            transition
            focus:border-yellow-400
            "
          />


          <button
            type="submit"
            className="
            w-full
            rounded-2xl
            bg-yellow-500
            py-4
            font-bold
            tracking-[0.25em]
            text-black
            transition
            hover:bg-yellow-400
            hover:scale-105
            "
          >
            KAYIT OL
          </button>


        </form>


      </motion.div>


    </main>
  );
}