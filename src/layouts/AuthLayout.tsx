export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex justify-center items-center px-4">
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
}
