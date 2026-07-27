/* =====================================================
Our Little Universe - 6 Months of Love

JavaScript Part 5
Final Cinematic Integration FIXED

Systems:
- Final Reveal
- Ending Animation
- Celebration Effects
- Music Controller
- Anniversary Counter
===================================================== */

/* =========================
FINAL REVEAL SYSTEM
========================= */

const FinalRevealSystem = {
  started: false,

  start() {
    if (this.started) return;

    this.started = true;

    console.log("Final Reveal Started ❤️");

    const section = document.querySelector(".final-section");

    if (section) {
      section.classList.remove("hidden");

      section.classList.add("show");
    }

    setTimeout(() => {
      this.showMessage();
    }, 500);
  },

  showMessage() {
    let message = document.querySelector(".final-message");

    /*
        If final message missing,
        create automatically
        */

    if (!message) {
      message = document.createElement("div");

      message.className = "final-message";

      message.innerHTML = `

            <h1>
            Forever With You ❤️
            </h1>

            <p>
            Our little universe will continue forever ✨
            </p>


            `;

      const section = document.querySelector(".final-section");

      if (section) {
        section.appendChild(message);
      }
    }

    if (message) {
      message.classList.add("show", "visible");
    }

    RomanticEffects.start();

    AnniversaryCounter.update();
  },
};

/* ROMANTIC EFFECTS */

const RomanticEffects = {
  active: false,

  start() {
    if (this.active) return;

    this.active = true;

    this.createHearts();

    this.createStars();

    document.body.classList.add("romantic-celebration");
  },

  createHearts() {
    for (let i = 0; i < 40; i++) {
      const heart = document.createElement("span");

      heart.className = "floating-heart";

      heart.innerHTML = "❤️";

      heart.style.left = Math.random() * 100 + "%";

      heart.style.animationDuration = Math.random() * 5 + 5 + "s";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 8000);
    }
  },

  createStars() {
    for (let i = 0; i < 30; i++) {
      const star = document.createElement("span");

      star.className = "dynamic-star";

      star.innerHTML = "✨";

      star.style.left = Math.random() * 100 + "%";

      star.style.top = Math.random() * 100 + "%";

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 6000);
    }
  },
};

const MusicController = {
  music: null,

  init() {
    this.music = document.querySelector("#backgroundMusic");
  },

  play() {
    if (!this.music) return;

    this.music.volume = 0.6;

    this.music.play().catch(() => {
      console.log("Music waiting interaction");
    });
  },
};

const AnniversaryCounter = {
  startDate: new Date("2026-01-25"),

  calculate() {
    return Math.floor((new Date() - this.startDate) / (1000 * 60 * 60 * 24));
  },

  update() {
    const counter = document.querySelector(".relationship-counter");

    if (counter) {
      counter.innerHTML = `${this.calculate()} days of love together ❤️`;

      counter.classList.add("show");
    }
  },
};

function setupFinalButton() {
  document.addEventListener("click", function (event) {
    const button = event.target.closest(".final-button");

    if (!button) return;

    console.log("Final Button Clicked ❤️");

    FinalRevealSystem.start();

    MusicController.play();

    if (typeof HeartSystem !== "undefined") {
      HeartSystem.burst(50);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  MusicController.init();

  AnniversaryCounter.update();

  setupFinalButton();

  console.log("JavaScript Part 5 Fixed Loaded ❤️");
});
