const axios = require('axios');

async function getImageFromGitHub(username) {
    try{
        const url = `https://api.github.com/user/${username}`;
        const response = await axios.get(url);
        return response.data.avatar_url;
    }
    catch (error){
        console.error('Error:', error);
    }
}

module.exports = {getImageFromGitHub};