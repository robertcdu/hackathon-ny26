const contextOption = {
    "id": "AmSearch",
    "title": "Amazon Search",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextOption);

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "AmSearch") {
        const searchUrl = `https://www.amazon.com/s?k=${clickData.selectionText}`;
        console.log(searchUrl);
        chrome.tabs.create({
            url: searchUrl
          });
    }
})