import GitHubUser from "@/components/GitHubUser";

export default function User({ params }) {
  const username = params.username;
  return (
    <main>
      <GitHubUser username={"keenwarrior"} />
    </main>
  );
}
