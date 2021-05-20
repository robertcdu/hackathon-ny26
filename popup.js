document.addEventListener('DOMContentLoaded', function() {
    let checkPriceButton = document.getElementById('checkPage');
    checkPriceButton.addEventListener('click', function() {
        console.log('clicked!');
        //chrome.tabs.getCurrent(null, function(tab) {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            // tabs[0].url -> current url 
            chrome.tabs.create({
                url: 'https://camelcamelcamel.com/search?sq=' + tabs[0].url
            });
            
       });
    });
});