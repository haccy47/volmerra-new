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


      {/* Glass panel */}
      <div
        className="
        relative
        z-10
        w-[90%]
        max-w-md
        rounded-[30px]
        border
        border-white/20
        bg-white/10
        p-10
        shadow-2xl
        backdrop-blur-xl
        "
      >

        <div className="text-center">

          <h1
            className="
            font-cinzel
            text-5xl
            font-black
            tracking-[0.25em]
            text-white
            drop-shadow-xl
            "
          >
            VOLMERRA
          </h1>


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
            KATIL
          </button>


        </form>


      </div>


    </main>
  );
}
