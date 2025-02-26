import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-4">
      <Link href="/app/page.tsx">
        <a className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition">
          Go Back Home
        </a>
      </Link>
      </p>
    </div>
  );
}
