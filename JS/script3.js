/* =========================================================
OUR LITTLE UNIVERSE - 6 MONTHS OF LOVE

JAVASCRIPT PART 3
Fixed Final Integration Version

Systems:
- Heart Engine
- Galaxy Atmosphere
- Romantic Activation
- Timeline Core
========================================================= */

const HeartSystem = {
  container: null,

  timer: null,

  active: false,

  symbols: ["❤️", "💖", "💕", "💗", "✨"],

  init() {
    this.container = document.querySelector(".heart-container");

    if (!this.container) {
      this.container = document.createElement("div");

      this.container.className = "heart-container";

      document.body.appendChild(this.container);
    }
  },

  create() {
    if (!this.active) return;

    const heart = document.createElement("span");

    heart.className = "heart floating-heart";

    heart.innerHTML =
      this.symbols[Math.floor(Math.random() * this.symbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = Math.random() * 25 + 15 + "px";

    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    this.container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  },

  start() {
    if (this.active) return;

    this.active = true;

    this.timer = setInterval(() => {
      this.create();
    }, 700);
  },

  burst(amount = 25) {
    for (let i = 0; i < amount; i++) {
      setTimeout(() => {
        this.create();
      }, i * 100);
    }
  },
};

/* GALAXY SYSTEM */

const GalaxySystem = {
  active: false,

  start() {
    if (this.active) return;

    this.active = true;

    setInterval(() => {
      if (!this.active) return;

      const star = document.createElement("span");

      star.className = "dynamic-star";

      star.innerHTML = "✦";

      star.style.position = "absolute";

      star.style.left = Math.random() * 100 + "%";

      star.style.top = Math.random() * 100 + "%";

      const galaxy = document.querySelector(".galaxy-section");

      if (galaxy) {
        galaxy.appendChild(star);
      }

      setTimeout(() => {
        star.remove();
      }, 4000);
    }, 500);
  },
};

/* GALAXY ACTIVATION EVENT */

document.addEventListener("galaxyActivated", () => {
  HeartSystem.init();

  HeartSystem.start();

  HeartSystem.burst(30);

  GalaxySystem.start();

  document.body.classList.add("love-active");

  console.log("Romantic Universe Started ❤️✨");
});

/* TIMELINE CORE */

const LoveTimeline = {
  memories: [],

  add(date, title, message) {
    this.memories.push({
      date,
      title,
      message,
    });
  },

  get(index) {
    return this.memories[index];
  },
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Part 3 Fixed Loaded ❤️");
});
