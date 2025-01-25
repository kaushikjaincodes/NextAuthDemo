"use client"

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{session ? `Hello, ${session.user?.name}` : 'Please sign in'}</h1>
      
      {session ? (
        // If the user is logged in, show the logout button
        <button onClick={() => signOut()} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Logout
        </button>
      ) : (
        // If the user is not logged in, show the login button
        <button onClick={() => signIn("google")} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Login with Google
        </button>
      )}
    </div>
  );
}
