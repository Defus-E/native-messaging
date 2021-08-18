// let port;

// const reconnectToExtension = function () {
//   port = null
//   // connectToExtension();
//   // setTimeout(connectToExtension, 1000 * 1);
// };

// const connectToExtension = () => {
//   console.log("s")
//   port = chrome.runtime.connect("igfnejdljeikiglblhkeoiphpgknnpcn");
//   console.log(port);
//   port.onDisconnect.addListener(reconnectToExtension);
// };

// connectToExtension();

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", () => {
    console.log("Sending ping...");
  
    chrome.runtime.sendMessage({ body: "ping" });
  });
  
  chrome.runtime.onMessage.addListener((request = {}, _sender, _sendResponse) => {
    console.log("Received: ", request.body);
  });
}, false);
