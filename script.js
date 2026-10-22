/* John Rey Singson portfolio - zine JavaScript
   scroll reveal + small live details. vanilla only. */
(function () {
  "use strict";

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- marquee: duplicate track for seamless loop ---------- */
  var tickerTrack = document.querySelector(".ticker-track");
  if (tickerTrack && tickerTrack.scrollWidth < window.innerWidth * 2) {
    tickerTrack.innerHTML += tickerTrack.innerHTML;
  }

  /* ---------- hero photo: random tilt on load, playful zine feel ---------- */
  var frame = document.querySelector(".photo-frame");
  if (frame) {
    var tilts = [-4, -2, 2, 3, 5];
    var t = tilts[Math.floor(Math.random() * tilts.length)];
    frame.style.setProperty("--tilt", t + "deg");
  }

  /* ---------- workshop nodes wiggle on click (touch feedback) ---------- */
  document.querySelectorAll(".log-node").forEach(function (node) {
    node.addEventListener("click", function () {
      node.classList.add("wiggle");
      setTimeout(function () { node.classList.remove("wiggle"); }, 500);
    });
  });

  /* ---------- konami-lite easter egg: type "lain" ---------- */
  var typed = "";
  document.addEventListener("keydown", function (e) {
    if (e.key && /^[a-z]$/i.test(e.key)) {
      typed = (typed + e.key.toLowerCase()).slice(-4);
      if (typed === "lain") {
        document.body.classList.add("rage-quit");
        setTimeout(function () { document.body.classList.remove("rage-quit"); }, 2600);
      }
    }
  });
})();
