import Link from "next/link";
import Head from "next/head";
import { useSession } from "next-auth/react";

export default function Unauthorized() {
  const { data: session, status } = useSession();

  const loading = status === "loading";
  const isLoggedIn = !!session;

  return (
    <>
      <Head>
        <title>Unauthorized</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          401 - Unauthorized
        </h1>

        {!loading && (
          <p className="text-lg text-gray-700 mb-6">
            {isLoggedIn
              ? "🚫 You do not have permission to view this page."
              : "🔒 You need to log in to access this page."}
          </p>
        )}

        <Link
          href={isLoggedIn ? "/" : "/auth/login"}
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          {isLoggedIn ? "← Go back home" : "Login →"}
        </Link>
      </main>
    </>
  );
}
