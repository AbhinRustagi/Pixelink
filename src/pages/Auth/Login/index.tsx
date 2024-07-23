import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1 className="font-semibold text-xl mb-4">Welcome back!</h1>
      <div className="mt-4 text-sm">
        New to Pixelink?{" "}
        <Link className="underline" href="/register">
          Get started here{" "}
        </Link>
      </div>
    </>
  );
}
