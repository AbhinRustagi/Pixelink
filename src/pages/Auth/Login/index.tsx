"use client";

import { FormBuilder } from "@/components/FormBuilder";
import Link from "next/link";
import { fields } from "./form";

export default function Login() {
  return (
    <>
      <h1 className="font-semibold text-xl mb-6">Welcome back!</h1>
      <FormBuilder
        fields={fields}
        title="Login"
        onSubmit={() => {
          alert("Submitted!");
        }}
      />
      <div className="mt-4 text-sm">
        New to Pixelink?{" "}
        <Link className="underline" href="/register">
          Get started here{" "}
        </Link>
      </div>
    </>
  );
}
