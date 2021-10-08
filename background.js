var browser = browser || chrome;

//onClick event handler 
//Data for the search is issued to the event as the argument.
function contextMenu_SearchWithGoogle_Clicked(searchStr, tab) {
	
	let text = searchStr.selectionText.trim();// "selectionText" contains the selected character string.

	//Building the Google search URL.
	//The selected character string is passed to Google as a URI-encoded string.
	let uriEncodedStr = encodeURIComponent(text);
	let searchUrl = 'https://www.google.com/search?q=' + uriEncodedStr;

	//Create a new tab
	//Open the URL created above.
	browser.tabs.create({ url: searchUrl });
}

//Add item to context menu
browser.contextMenus.create(
	{
		id: 'contextMenu_SearchWithGoogle',
		title: 'Search "%s" using Google Search',//The selected character string is entered in the %s part.
		contexts: ['selection'],//Only display extension item in the context menu when there's a text selected in the browser.
		onclick: contextMenu_SearchWithGoogle_Clicked
	}
);

