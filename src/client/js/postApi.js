/* Function to Post to Meaning Cloud Sentiment API */
const fetch = require("node-fetch");

async function postMeaningCloudApi(baseURL, appKey, params, text) {
    const url = baseURL+appKey+params+text;
    const response = await fetch(url, {
        method: 'POST',
        headers: {}
    });

    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}


export { postMeaningCloudApi }