import Layout from "@/layouts/AuthLayout";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
