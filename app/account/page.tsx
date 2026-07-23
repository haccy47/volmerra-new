"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AccountPage() {

  return (

    <main
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-black
      px-5
      "
    >


      {/* Background */}

      <div
      className="
      absolute
      inset-0
      bg-cover
      bg-center
      opacity-40
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
      bg-black/70
      "
      />




      {/* Card */}

      <motion.div

      initial={{
        opacity:0,
        y:40
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:1
      }}

      className="
      relative
      z-10
      w-full
      max-w-md

      rounded-3xl

      border
      border-white/20

      bg-white/10

      p-8

      text-center

      shadow-2xl

      backdrop-blur-xl
      "

      >



      <h1

      className="
      font-cinzel
      text-4xl
      font-bold
      tracking-[0.25em]
      text-white
      "

      >
        VOLMERRA
      </h1>



      <p
      className="
      mt-3
      text-sm
      tracking-widest
      text-white/60
      "
      >
        Volmerra‘ya Katıl
      </p>



      <div
      className="
      mt-8
      flex
      flex-col
      gap-4
      "
      >


      <button
      className="
      rounded-full
      border
      border-white/20
      bg-white/10
      py-3
      text-white
      transition
      hover:bg-white/20
      "
      >
        Giriş Yap
      </button>



      <button
      className="
      rounded-full
      bg-white
      py-3
      text-black
      transition
      hover:scale-105
      "
      >
        Kayıt Ol
      </button>


      </div>



      <Link

      href="/"

      className="
      mt-6
      block
      text-xs
      tracking-widest
      text-white/50
      hover:text-white
      "

      >
        Ana Sayfaya Dön
      </Link>


      </motion.div>


    </main>

  );

}