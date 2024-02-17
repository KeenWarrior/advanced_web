import Header from "@/components/header";

export default function Page({ userData }) {
  console.log("Witin reder", userData);
  return <>
    <Header />
    <h2>{userData.name}</h2>
    <img src={userData.avatar_url}/>
    <p>Last updated: {userData.last_updated}</p>
  </>;
}

export async function getServerSideProps({ params }) {
  const { username } = params;

  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.status == 200) {
    const userData = await response.json();
    return {
      props: {
        userData: {
            name: userData.name,
            avatar_url: userData.avatar_url,
            last_updated: new Date().toISOString()
        }
      },
      revalidate: 10,
    };
  }

  return {
    notFound: true,
  };
}
