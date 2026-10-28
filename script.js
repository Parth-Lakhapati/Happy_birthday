
function showSurprise() {
  document.getElementById("surprise").innerHTML =
    "🎁 Happy Birthday, Mona Tai! ❤️🌸<br>" +
    "May your life bloom like these flowers, " +
    "shine brighter than the sun, and be filled " +
    "with endless happiness, love, and success! 💖<br>" +
    "You will always be my favourite Tai! 🥰";
}

// Create falling flower petals
const petalsContainer = document.getElementById("petals");
const petalSymbols = ["🌸", "🌺", "🌼", "💗", "🌷"];

function createPetal() {
  const petal = document.createElement("span");

  petal.className = "petal";
  petal.textContent =
    petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = 12 + Math.random() * 20 + "px";
  petal.style.animationDuration = 5 + Math.random() * 6 + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
document.addEventListener("DOMContentLoaded", function () {
  // Birthday surprise button
  const surpriseButton = document.querySelector("button");
  const surpriseMessage = document.getElementById("surprise");
  const petalsContainer = document.getElementById("petals");

  if (surpriseButton && surpriseMessage) {
    surpriseButton.addEventListener("click", function () {
      surpriseMessage.innerHTML =
        "🎁 Happy Birthday, Mona Tai! ❤️🌸<br>" +
        "May your life bloom like these flowers, shine brighter " +
        "than the sun, and be filled with happiness, love, and success! 💖<br>" +
        "You will always be my favourite Tai! 🥰";
    });
  }

  // Falling flower petals
  if (petalsContainer) {
    const petalSymbols = ["🌸", "🌺", "🌼", "💗", "🌷"];

    function createPetal() {
      const petal = document.createElement("span");

      petal.className = "petal";
      petal.textContent =
        petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

      petal.style.left = Math.random() * 100 + "vw";
      petal.style.fontSize = 12 + Math.random() * 20 + "px";
      petal.style.animationDuration = 5 + Math.random() * 6 + "s";

      petalsContainer.appendChild(petal);

      setTimeout(function () {
        petal.remove();
      }, 12000);
    }

    setInterval(createPetal, 400);
  }
});

  }, 12000);
}

setInterval(createPetal, 400);
