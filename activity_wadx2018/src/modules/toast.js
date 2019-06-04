export default function toast(args, cb) {
  var id = (Math.random() * 1e5).toFixed(0);
  var node = '<div class="toast toast-' + id + '">' + "<span>消息</span>" + "</div>";
  document.body.insertAdjacentHTML("beforeend", node);
  var toast = document.querySelector(".toast-" + id);
  toast.firstElementChild.textContent = args.text;
  var position = args.position || "center";
  if (position === "top") toast.style.top = "5%";
  if (position === "bottom") {
    toast.style.top = "inherit";
    toast.style.bottom = "5%";
  }
  var t = args.time || 1000;
  setTimeout(function() {
    toast.style.opacity = "1";
  }, 10);
  setTimeout(function() {
    toast.style.transition = "all 1s ease";
    toast.style.opacity = "0";
    setTimeout(function() {
      toast.parentNode.removeChild(toast);
      typeof cb === "function" && cb();
    }, 1000);
  }, t);
}

// webkitTransitionEnd

// var pfx = ["webkit", "moz", "MS", "o", ""];

// function PrefixedEvent(element, type, callback) {
//   for (var p = 0; p < pfx.length; p++) {
//     if (!pfx[p]) type = type.toLowerCase();
//     element.addEventListener(pfx[p] + type, callback, false);
//   }
// }

