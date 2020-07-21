/* Function to GET APP key from express */
async function getAppKey() {
    const response = await fetch('/appkey');
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}


export { getAppKey }