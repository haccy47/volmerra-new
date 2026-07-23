"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  BookOpen,
  Map,
  UserRound,
  Gem,
  FileText,
  User,
} from "lucide-react";


const menu = [
  { name: "Hikaye", icon: BookOpen },
  { name: "Harita", icon: Map },
  { name: "Karakterler", icon: UserRound },
  { name: "Taşlar", icon: Gem },
  { name: "Quizler", icon: FileText },
  { name: "Hesap", icon: User },
];


const spring = {
  type: "spring" as const,
  stiffness: 220,
  damping: 22,
};


export default function MobileNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  return (

    <header
      className="
      fixed
      top-5
      left-0
      right-0
      z-[100]
      flex
      justify-between
      px-5
      md:hidden
      "
    >


      {/* Search Button */}

      <AnimatePresence>
        {!searchOpen && (

          <motion.button

            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}

            transition={spring}

            onClick={() => setSearchOpen(true)}

            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            text-white
            shadow-xl
            backdrop-blur-xl
            "

          >

            <Search size={22}/>

          </motion.button>

        )}
      </AnimatePresence>





      {/* Menu Button */}

      <AnimatePresence>
        {!menuOpen && (

          <motion.button

            initial={{ scale:0 }}
            animate={{ scale:1 }}
            exit={{ scale:0 }}

            transition={spring}

            onClick={() => setMenuOpen(true)}

            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            text-white
            shadow-xl
            backdrop-blur-xl
            "

          >

            <Menu size={24}/>

          </motion.button>

        )}
      </AnimatePresence>








      {/* Search Panel */}

      <AnimatePresence>

        {searchOpen && (

          <motion.div

            initial={{
              width:48,
              opacity:0
            }}

            animate={{
              width:"calc(100vw - 40px)",
              opacity:1
            }}

            exit={{
              width:48,
              opacity:0
            }}

            transition={spring}

            className="
            absolute
            left-5
            top-0
            flex
            h-12
            items-center
            overflow-hidden
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            shadow-xl
            backdrop-blur-xl
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
              onClick={() => setSearchOpen(false)}
              className="text-white"
            >

              <X size={22}/>

            </button>


          </motion.div>

        )}

      </AnimatePresence>









      {/* Menu Panel */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              width:48,
              height:48,
              opacity:0
            }}

            animate={{
              width:280,
              height:420,
              opacity:1
            }}

            exit={{
              width:48,
              height:48,
              opacity:0
            }}

            transition={spring}

            className="
            absolute
            right-5
            top-0
            overflow-hidden
            rounded-3xl
            border
            border-white/20
            bg-white/10
            p-6
            text-white
            shadow-2xl
            backdrop-blur-xl
            "

          >


            <div className="
            mb-6
            flex
            justify-end
            ">

              <button
                onClick={() => setMenuOpen(false)}
              >

                <X size={25}/>

              </button>

            </div>





            <div className="
            flex
            flex-col
            gap-5
            ">

              {menu.map((item,index)=>{

                const Icon = item.icon;


                return (

                  <motion.div

                    key={item.name}

                    initial={{
                      opacity:0,
                      x:40
                    }}

                    animate={{
                      opacity:1,
                      x:0
                    }}

                    transition={{
                      delay:index * 0.08
                    }}

                    className="
                    flex
                    items-center
                    gap-4
                    "

                  >

                    <Icon size={24}/>

                    <span>
                      {item.name}
                    </span>

                  </motion.div>

                );

              })}

            </div>


          </motion.div>

        )}

      </AnimatePresence>


    </header>

  );
}