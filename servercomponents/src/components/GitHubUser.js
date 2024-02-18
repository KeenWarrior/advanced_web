'use server';

async function getUser(username){
    const response = await fetch(`https://api.github.com/users/${username}`);
    return await response.json();
}

export default async function GitHubUser({username}){
    const user = await getUser(username);
    return (
        <div>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} width={200} />
        </div>
    );
}