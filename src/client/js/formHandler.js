function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
    const params = '&lang=en&of=json&txt=';
    
    Client.getAppKey().then(function(data) {
        Client.postMeaningCloudApi(baseURL, data.applicationKey, params, formText).then(function(data) {
            console.log(data);
        })
    })

}

export { handleSubmit }
