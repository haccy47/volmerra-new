"use server";

import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export async function signUp(formData: FormData) {
  console.log("YENI AUTH DOSYASI CALISIYOR");

  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log("SIGNUP ERROR:", error.message);
    return;
  }

  redirect("/account/login");
}

export async function signIn(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("LOGIN ERROR:", error.message);
    return;
  }

  redirect("/account");
}

export async function signOut() {
  await supabase.auth.signOut();

  redirect("/");
}