import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-bold text-amber-600 mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
