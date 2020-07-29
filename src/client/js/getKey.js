/* Function to GET APP key from express */
const fetch = require("node-fetch");

async function getAppKey(url) {
    const response = await fetch(url);
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}


export { getAppKey }