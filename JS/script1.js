/* =========================================
Our Little Universe - 6 Months of Love

JavaScript Part 1
Final Integration + Music Fix Version

Systems:
- Loading
- Surprise Button
- Reveal
- Love Activation
- Background Music
========================================= */

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");

  console.log("Page Loaded ❤️");
});

/* SURPRISE BUTTON SYSTEM */

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("surpriseButton");

  console.log("Surprise Button:", button);

  if (!button) {
    console.log("Button Not Found");

    return;
  }

  button.addEventListener("click", () => {
    console.log("BUTTON CLICKED ❤️");

    if (button.classList.contains("clicked")) return;

    button.classList.add("clicked");

    button.innerHTML = "✨ Our Story Begins ✨";

    /* BACKGROUND MUSIC START */

    const music = document.getElementById("backgroundMusic");

    if (music) {
      music.volume = 0.4;

      music
        .play()

        .then(() => {
          console.log("Music Started 🎵");
        })

        .catch((error) => {
          console.log("Music Error:", error);
        });
    }

    /* LOVE MODE */

    document.body.classList.add("love-active");

    /* HIDE INTRO */

    const intro = document.getElementById("loadingScene");

    if (intro) {
      intro.classList.add("hidden");
    }

    /* SHOW MESSAGE SECTION */

    const reveal = document.getElementById("anniversaryReveal");

    if (reveal) {
      reveal.classList.remove("hidden");

      reveal.classList.add("show");
    }

    /* SHOW LOVE MESSAGE */

    const message = document.querySelector(".love-message");

    if (message) {
      message.classList.add("show");
    }

    /* ACTIVATE OTHER SYSTEMS */

    document.dispatchEvent(new CustomEvent("surpriseStarted"));

    document.dispatchEvent(new CustomEvent("galaxyActivated"));

    console.log("Love Universe Activated ❤️✨");
  });
});
