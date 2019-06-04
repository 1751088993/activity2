let ua = window.navigator.userAgent;
let wx = /MicroMessenger/i.test(ua);

// let wnl = /wnl/i.test(ua);

window.trackEvent = function(eventName, type) {
  let platform = wx ? "wx" : "wnl";
  let eventStr = `${eventName}_${platform}`;
  // console.log(eventStr, type);
  window._czc.push(["_trackEvent", eventStr, type]);
};
