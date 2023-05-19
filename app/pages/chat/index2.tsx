import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client"

export default function Chat() {

  const { user, error, isLoading } = useUser();

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  return (
    <div className="text-black">
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? (
        <Link href="/api/auth/logout">Logout</Link>
      ) : (
        <Link href="/api/auth/login">Login</Link>
      )}
      <Link href="/api/auth/login">
        Login
      </Link>
      <main>
        <h1>Chat</h1>
      </main>
    </div>
  );
}