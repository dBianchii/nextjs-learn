import Link from "next/link";

export default function Segment1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-10">
      <h1>Welcome to segment1!</h1>
      <Link href="/" className="underline text-blue-200">
        Go Back
      </Link>
    </main>
  );
}
