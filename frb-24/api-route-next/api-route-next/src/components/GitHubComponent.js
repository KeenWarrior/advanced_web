"use client"

import { useRouter } from 'next/navigation'

export default function GitHubComponent({ user }) {

    const router = useRouter()

  return (
    <div>
      <h1>GitHubComponent</h1>
      {user && (
        <>
          <p>Username: {user.login}</p>
          <p>name: {user.name}</p>
        </>
      )}

      <div></div>
        <button onClick={()=> router.push("/users/ravi")}>
            Ravi
        </button>
        <button onClick={()=> router.push("/users/keenwarrior")}>
            Anuj
        </button>
    </div>
  );
}
