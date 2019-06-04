let ua = window.navigator.userAgent;
let wx = /MicroMessenger/i.test(ua);

let wnl = /wnl/i.test(ua);

window.trackEvent = function(eventName, type) {
  let platform = wx ? "WX2018" : wnl ? "WSJ2018" : "WEB2018";
  let eventStr = `${platform}.${eventName}.wnl`;
  // console.log(eventStr, type);
  window._czc.push(["_trackEvent", eventStr, type]);
};
