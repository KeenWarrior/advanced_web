async function getGithubUser(username){
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    return data;
}

async function sum(a, b){
    return a + b;
}

module.exports = {getGithubUser, sum};

