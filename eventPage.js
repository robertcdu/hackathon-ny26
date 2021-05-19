const contextOption = {
    "id": "AmSearch",
    "title": "Amazon Search",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextOption);

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "AmSearch") {
        alert("clicked!");
    }
})