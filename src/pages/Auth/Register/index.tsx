"use client";

import { FormBuilder } from "@/components/FormBuilder";
import Link from "next/link";
import { fields } from "./form";
import Button from "@/components/Button";

export default function Register() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Create your account</h1>
      <Button
        className="w-72 my-2 text-xs p-3 rounded bg-purple-500 hover:bg-purple-500/80 text-white"
        as="button"
      >
        Continue with Google
      </Button>
      <Button
        className="w-72 my-2 text-xs p-3 rounded bg-purple-500 hover:bg-purple-500/80 text-white"
        href="/register/email"
        as="a"
      >
        Continue with Email
      </Button>
      <div className="mt-4 text-sm">
        Already a user?{" "}
        <Link className="underline" href="/login">
          Continue here{" "}
        </Link>
      </div>
    </>
  );
}
