import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center p-5">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo-removebg.png"
            alt="Travel With Us Official"
            className="h-12 w-auto"
          />
          <span className="sr-only">Travel With Us Official</span>
        </Link>

        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/dubai">Dubai</Link>
          <Link href="/malaysia">Malaysia</Link>
          <Link href="/sri-lanka">Sri Lanka</Link>
        </div>
      </div>
    </nav>
  );
}
