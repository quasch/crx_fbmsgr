var ctrlDown = false;
var magnet = "";

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.ctrlDown == true) {
      ctrlDown = true;
	} else {
      ctrlDown = false;
		chrome.pageAction.show(sender.tab.id)
	}
  });

chrome.pageAction.onClicked.addListener(function(tab) {
	if(tab.url.indexOf("http://epubgratis.me/node/") > -1) {
		magnet = "http://epubgratis.me/d.php?id=" + tab.url.split("http://epubgratis.me/node/")[1];
		chrome.tabs.update(tab.id, {url:magnet});
	}
	else
	{
		alert("Esta URL no parece ser una publicación de epubgratis.me");
	}
	//chrome.tabs.update(tab.id, {url:tab.url});
});