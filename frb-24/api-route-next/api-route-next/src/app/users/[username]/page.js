import dynamic from "next/dynamic";
import { Suspense } from "react";

async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return {
    login: data.login,
    name: data.name,
  };
}

export default async function Page({ params }) {
  const username = params.username;
  const user = await fetchUser(username);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {username === "ravi" && <RenderComponent user={user} />}
      </Suspense>
    </div>
  );
}

function RenderComponent({ user }) {
  const GitHubComponent = dynamic(() => import("@/components/GitHubComponent"));
    return <GitHubComponent user={user} />;
}
