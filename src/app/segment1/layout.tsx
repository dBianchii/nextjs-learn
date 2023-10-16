export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-auto border-red-200"></div>
      {children}
    </div>
  );
}
