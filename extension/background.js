let port = chrome.runtime.connectNative("com.nexus.nodejs");

port.onMessage.addListener((response = {}) =>
  chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs =>
    chrome.tabs.sendMessage(tabs[0].id, response)));

chrome.runtime.onMessage.addListener((request = {}, _sender, _sendResponse) =>
  port.postMessage(request));