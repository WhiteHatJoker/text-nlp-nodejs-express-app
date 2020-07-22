/* Function to Post to Meaning Cloud Sentiment API */
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