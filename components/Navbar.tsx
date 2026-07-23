"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Map,
  UserRound,
  Gem,
  FileText,
  Search,
  X,
} from "lucide-react";


const menu = [
  { name: "Hikaye", icon: BookOpen, href: "/" },
  { name: "Harita", icon: Map, href: "/" },
  { name: "Karakterler", icon: UserRound, href: "/" },
  { name: "Taşlar", icon: Gem, href: "/" },
  { name: "Quizler", icon: FileText, href: "/" },
];


export default function Navbar() {

  const [searchOpen, setSearchOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);


  function openSearch(){

    setTransitioning(true);

    setTimeout(()=>{
      setSearchOpen(true);
      setTransitioning(false);
    },400);

  }


  function closeSearch(){

    setTransitioning(true);

    setTimeout(()=>{
      setSearchOpen(false);
      setTransitioning(false);
    },400);

  }


  return (

    <header
      className="
      fixed
      left-1/2
      top-6
      z-50
      hidden
      -translate-x-1/2
      md:block
      "
    >

      <motion.nav

        animate={{
          width:
          searchOpen
          ? 320
          : transitioning
          ? 60
          : "auto"
        }}

        transition={{
          duration:0.4,
          ease:"easeInOut"
        }}

        className="
        relative
        flex
        h-14
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-white/20
        bg-white/10
        px-6
        shadow-2xl
        backdrop-blur-xl
        "
      >


        <AnimatePresence mode="wait">


        {!searchOpen && !transitioning && (

          <motion.div

            key="menu"

            initial={{
              opacity:0,
              scale:1
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            exit={{
              opacity:0,
              scale:0.5
            }}

            transition={{
              duration:0.3
            }}

            className="
            flex
            items-center
            gap-5
            "

          >


            <Link
              href="/"
              className="
              font-cinzel
              text-lg
              font-bold
              tracking-[0.25em]
              text-white
              "
            >
              VOLMERRA
            </Link>


            <div className="flex items-center gap-4">


              {menu.map((item)=>{

                const Icon=item.icon;

                return (

                  <Link
                    key={item.name}
                    href={item.href}
                    className="
                    text-white/80
                    transition
                    hover:scale-110
                    hover:text-white
                    "
                  >

                    <Icon size={22}/>

                  </Link>

                )

              })}


              <button
                onClick={openSearch}
                className="
                text-white/80
                transition
                hover:scale-110
                hover:text-white
                "
              >

                <Search size={22}/>

              </button>


            </div>


          </motion.div>

        )}



        {searchOpen && (

          <motion.div

            key="search"

            initial={{
              opacity:0,
              scale:0.7
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:0.4
            }}

            className="
            absolute
            inset-0
            flex
            items-center
            px-5
            "

          >


            <input

              autoFocus

              placeholder="Volmerra'da ara..."

              className="
              flex-1
              bg-transparent
              text-white
              outline-none
              placeholder:text-white/50
              "

            />


            <button

              onClick={closeSearch}

              className="
              text-white
              transition
              hover:rotate-90
              "

            >

              <X size={24}/>

            </button>


          </motion.div>

        )}



        </AnimatePresence>


      </motion.nav>


    </header>

  );

}