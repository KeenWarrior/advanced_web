export default function Page({ userData }) {
  console.log("Witin reder", userData);
  return <>
    <h2>{userData.name}</h2>
    <img src={userData.avatar_url}/>
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
            avatar_url: userData.avatar_url
        }
      },
    };
  }

  return {
    notFound: true,
  };
}
