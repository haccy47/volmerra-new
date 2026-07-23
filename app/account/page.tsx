import { signOut } from "../actions/auth";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-yellow-600/30 bg-black/60 backdrop-blur-xl p-8 shadow-2xl">

        <h1 className="text-3xl text-yellow-400 font-bold text-center">
          Volmerra Account
        </h1>

        <div className="mt-8 space-y-4 text-white/80">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-sm text-white/40">
              Kullanıcı
            </p>
            <p>
              Warrior
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-sm text-white/40">
              Rank
            </p>
            <p>
              Ember Knight
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-sm text-white/40">
              Sezon
            </p>
            <p>
              Season 1
            </p>
          </div>
        </div>

        <form action={signOut} className="mt-8">
          <button
            className="w-full rounded-xl bg-yellow-500 py-3 text-black font-bold hover:bg-yellow-400 transition"
            type="submit"
          >
            Çıkış Yap
          </button>
        </form>

      </div>
    </main>
  );
}