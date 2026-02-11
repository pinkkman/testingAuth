"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Welcome {session.user?.name}</h2>
        <img src={session.user?.image || ""} alt="User Avatar" />
        <button className="text-black border rounded-2xl p-4 bg-red-500" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>You are not signed in</h2>
      <button className="text-black border rounded-2xl p-4 bg-cyan-400" onClick={() => signIn("github")}>
        Sign in with GitHub
      </button>
    </div>
  )
}
