/* =========================================================
OUR LITTLE UNIVERSE - 6 MONTHS OF LOVE

JAVASCRIPT PART 4
Final Memory + Final Reveal Integration

Systems:
- Love Timeline
- Message Engine
- Memory Reveal
- Photo Reveal
- Love Button
- Final Bridge
========================================================= */

/* =========================
LOVE STORY DATA
========================= */

const LoveStoryTimeline = {
  data: [
    {
      month: "Month 1",
      title: "The Beginning Of Us 💕",
      message: "Every beautiful story starts with a small moment...",
    },

    {
      month: "Month 2",
      title: "Growing Closer 🌙",
      message: "Little conversations became unforgettable memories.",
    },

    {
      month: "Month 3",
      title: "Our Little Universe ✨",
      message: "A small world created only for us.",
    },

    {
      month: "Month 4",
      title: "More Memories Together 💖",
      message: "Every day became another page of our story.",
    },

    {
      month: "Month 5",
      title: "Almost Half A Year 🌹",
      message: "Time passed, but feelings became stronger.",
    },

    {
      month: "Month 6",
      title: "Happy 6 Monthsary Baby ❤️",
      message: "Six months of love, laughter and memories.",
    },
  ],

  index: 0,

  next() {
    if (this.index >= this.data.length) {
      openFinalReveal();

      return;
    }

    const memory = this.data[this.index];

    MessageSystem.show(memory.title, memory.message);

    MemorySystem.reveal();

    this.index++;

    // after final memory

    if (this.index === this.data.length) {
      setTimeout(() => {
        openFinalReveal();
      }, 1500);
    }
  },
};

/* MESSAGE SYSTEM */

const MessageSystem = {
  show(title, text) {
    const box = document.querySelector(".love-message");

    if (!box) return;

    box.innerHTML = `

        <h2 class="romantic-title">
        ${title}
        </h2>


        <p>
        ${text}
        </p>

        `;

    box.classList.add("show");
  },
};

const MemorySystem = {
  reveal() {
    const section = document.querySelector("#memorySection");

    const card = document.querySelector(".memory-card");

    if (section) {
      section.classList.remove("hidden");

      section.classList.add("show");
    }

    if (card) {
      setTimeout(() => {
        card.classList.add("reveal");
      }, 300);
    }
  },
};

/* FINAL REVEAL BRIDGE */

function openFinalReveal() {
  const finalSection = document.querySelector(".final-section");

  if (finalSection) {
    finalSection.classList.remove("hidden");

    finalSection.classList.add("show");

    setTimeout(() => {
      finalSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500);
  }

  if (typeof HeartSystem !== "undefined") {
    HeartSystem.burst(40);
  }

  console.log("Final Reveal Ready ❤️");
}

function setupLoveButton() {
  const button = document.querySelector(".love-button");

  if (!button) return;

  button.addEventListener("click", () => {
    LoveStoryTimeline.next();

    if (typeof HeartSystem !== "undefined") {
      HeartSystem.burst(20);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupLoveButton();

  console.log("JavaScript Part 4 Final Loaded ❤️");
});
