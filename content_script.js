var isMac = (navigator.appVersion.indexOf("Mac")!=-1) ? true : false;

chrome.extension.sendRequest({ctrlDown: false});

document.onkeydown=function(e){
	if((e.ctrlKey) && (!isMac)) {
		chrome.extension.sendRequest({ctrlDown: true});
	}
	if((e.metaKey) && (isMac)) {
		chrome.extension.sendRequest({ctrlDown: true});
	}
}


window.onkeyup=function(e){
	if((!e.ctrlKey) && (!isMac)) {
		chrome.extension.sendRequest({ctrlDown: false});
	}
	if((!e.metaKey) && (isMac)) {
		chrome.extension.sendRequest({ctrlDown: false});
	}
}