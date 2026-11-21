(function () {
  "use strict";
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("mob-close");
  if (!toggle || !drawer || !overlay) return;
  function setOpen(open) {
    drawer.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open && closeBtn) closeBtn.focus();
    if (!open) toggle.focus();
  }
  toggle.addEventListener("click", function () { setOpen(!drawer.classList.contains("open")); });
  overlay.addEventListener("click", function () { setOpen(false); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("open")) setOpen(false); });
  drawer.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 768 && drawer.classList.contains("open")) setOpen(false); });
})();
