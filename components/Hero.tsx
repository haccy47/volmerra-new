"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/volmerra.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />


      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 text-center">

        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-cinzel text-5xl font-black tracking-[0.2em] text-white drop-shadow-2xl sm:text-7xl md:text-9xl"
        >
          VOLMERRA
        </motion.h1>


        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 max-w-xl font-inter text-sm tracking-widest text-white/70 sm:text-lg"
        >
          A world shaped by stones, legends and forgotten powers.
        </motion.p>


        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >

          <Link
            href="/"
            className="mt-10 inline-block rounded-full border border-white/30 bg-white/10 px-8 py-4 font-inter text-sm font-bold uppercase tracking-widest text-white backdrop-blur-xl transition hover:bg-white/20"
          >
            Volmerra'ya Katıl
          </Link>

        </motion.div>

      </div>

    </section>
  );
}