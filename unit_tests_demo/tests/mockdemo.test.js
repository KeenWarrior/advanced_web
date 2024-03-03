// const {expect, jest, test} = require('@jest/globals');

const { default: axios } = require('axios');
const {getImageFromGitHub} = require('../fetchdata');

test('mock demo', async () => {
    axios.get = jest.fn(()=>{
        return Promise.resolve({data: {avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4'}});
    })
    const username = 'octocat';
    const image = await getImageFromGitHub(username);
    expect(image).toBeTruthy();
});