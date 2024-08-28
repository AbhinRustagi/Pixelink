"use client";

import { FormBuilder } from "@/components/FormBuilder";
import Link from "next/link";
import { fields } from "./form";

export default function EmailRegister() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Create your account</h1>
      <FormBuilder fields={fields} title="Register" onSubmit={() => {}} />
      <div className="mt-4 text-sm">
        Already a user?{" "}
        <Link className="underline" href="/login">
          Continue here{" "}
        </Link>
      </div>
    </>
  );
}
