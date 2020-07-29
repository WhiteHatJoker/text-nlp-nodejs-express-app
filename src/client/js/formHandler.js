function handleSubmit(event) {
    event.preventDefault()
    
    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    if(formText) {
        const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
        const params = '&lang=en&of=json&txt=';
        
        Client.getAppKey('/appkey').then(function(data) {
            Client.postMeaningCloudApi(baseURL, data.applicationKey, params, formText).then(function(data) {
                document.getElementById('results').innerHTML = Client.getDataTable(data);
            })
        })
    } else {
        window.alert('Please enter the text into the textfield');
    }



}

export { handleSubmit }
