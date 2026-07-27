/* =========================================
   Our Little Universe - 6 Months of Love

   JavaScript Part 2
   Final Integration Fix

   Systems:
   - Reveal Controller
   - Message Reveal
   - Galaxy Activation
   - Sparkle Effects
   - Scroll Fix
========================================= */

let revealStarted = false;

const RevealController = {
  intro: null,

  message: null,

  galaxy: null,

  init() {
    this.intro = document.querySelector(".intro-section");

    this.message = document.querySelector(".message-section");

    this.galaxy = document.querySelector(".galaxy-section");
  },

  start() {
    if (revealStarted) return;

    revealStarted = true;

    document.body.classList.add("love-active");

    this.hideIntro();

    setTimeout(() => {
      this.showMessage();
    }, 1000);

    setTimeout(() => {
      this.activateGalaxy();
    }, 2000);
  },

  hideIntro() {
    if (this.intro) {
      this.intro.classList.add("hidden");

      // FIX SCROLL JUMP

      setTimeout(() => {
        window.scrollTo({
          top: 0,

          behavior: "instant",
        });
      }, 50);
    }
  },

  showMessage() {
    if (this.message) {
      this.message.classList.remove("hidden");

      this.message.classList.add("show");

      animateTitle();

      const message = document.querySelector(".love-message");

      if (message) {
        message.classList.add("show");
      }
    }
  },

  activateGalaxy() {
    if (this.galaxy) {
      this.galaxy.classList.remove("hidden");

      this.galaxy.classList.add("active");
    }

    createSparkles();

    document.dispatchEvent(new CustomEvent("galaxyActivated"));
  },
};

/* 2. RECEIVE BUTTON EVENT */

document.addEventListener(
  "surpriseStarted",

  () => {
    RevealController.init();

    RevealController.start();
  },
);

/* 3. TITLE LETTER ANIMATION */

function animateTitle() {
  const title = document.querySelector(".romantic-title");

  if (!title) return;

  const text = title.innerText;

  title.innerHTML = "";

  [...text].forEach((letter, index) => {
    const span = document.createElement("span");

    span.innerHTML = letter === " " ? "&nbsp;" : letter;

    span.classList.add("letter-animation");

    span.style.animationDelay = `${index * 0.08}s`;

    title.appendChild(span);
  });
}

let sparkleCount = 0;

function createSparkles() {
  const container =
    document.querySelector(".sparkle-container") || document.body;

  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("span");

    sparkle.classList.add("sparkle", "reveal-sparkle");

    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random() * 100 + "%";

    sparkle.style.top = Math.random() * 100 + "%";

    sparkle.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(sparkle);

    sparkleCount++;

    setTimeout(() => {
      sparkle.remove();
    }, 6000);
  }
}

console.log("JavaScript Part 2 Final Fixed Loaded ✨");
