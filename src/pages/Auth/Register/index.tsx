import Link from "next/link";

export default function Register() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Create your account</h1>
      <div className="mt-4 text-sm">
        Already a user?{" "}
        <Link className="underline" href="/login">
          Continue here{" "}
        </Link>
      </div>
    </>
  );
}
