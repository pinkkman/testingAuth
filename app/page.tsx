"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Welcome {session.user?.name}</h2>
        <img src={session.user?.image || ""} alt="User Avatar" />
        <button onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>You are not signed in</h2>
      <button onClick={() => signIn("github")}>
        Sign in with GitHub
      </button>
    </div>
  )
}
