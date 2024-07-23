export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full flex justify-center px-4">
      <div className="px-6 py-8 max-w-[28rem] w-full my-20 rounded-md bg-gray-50">
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </main>
  );
}
