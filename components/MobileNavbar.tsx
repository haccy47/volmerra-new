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
  {
    name:"Hikaye",
    icon:BookOpen,
  },
  {
    name:"Harita",
    icon:Map,
  },
  {
    name:"Karakterler",
    icon:UserRound,
  },
  {
    name:"Taşlar",
    icon:Gem,
  },
  {
    name:"Quizler",
    icon:FileText,
  },
  {
    name:"Hesap",
    icon:User,
  },
];


export default function MobileNavbar(){

const [menuOpen,setMenuOpen]=useState(false);
const [searchOpen,setSearchOpen]=useState(false);


return(

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


{/* SEARCH BUTTON */}

<motion.button

whileTap={{
scale:.9
}}

onClick={()=>setSearchOpen(true)}

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




{/* MENU BUTTON */}

<motion.button

whileTap={{
scale:.9
}}

onClick={()=>setMenuOpen(true)}

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





{/* SEARCH PANEL */}

<AnimatePresence>

{
searchOpen && (

<motion.div

initial={{
opacity:0,
scale:.2,
x:-80
}}

animate={{
opacity:1,
scale:1,
x:0
}}

exit={{
opacity:0,
scale:.2,
x:-80
}}

transition={{
duration:.45,
ease:"easeInOut"
}}

className="
absolute
left-5
top-0
right-5
h-12
rounded-full
border
border-white/20
bg-white/10
backdrop-blur-xl
shadow-xl
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
onClick={()=>setSearchOpen(false)}
className="text-white"
>

<X size={22}/>

</button>


</motion.div>

)

}

</AnimatePresence>







{/* MENU PANEL */}

<AnimatePresence>

{
menuOpen && (

<motion.div

initial={{
opacity:0,
scale:.2,
x:80
}}

animate={{
opacity:1,
scale:1,
x:0
}}

exit={{
opacity:0,
scale:.2,
x:80
}}

transition={{
duration:.45,
ease:"easeInOut"
}}

className="
absolute
right-5
top-0
w-72
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
flex
justify-end
mb-5
">

<button
onClick={()=>setMenuOpen(false)}
>

<X size={25}/>

</button>

</div>



<div className="
flex
flex-col
gap-5
">

{
menu.map((item,index)=>{

const Icon=item.icon;


return(

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
delay:index*.08
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

)

})

}

</div>


</motion.div>

)

}

</AnimatePresence>



</header>

)

}