import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-6xl font-black tracking-widest">
          VOLMERRA
        </h1>
      </main>
    </>
  );
}