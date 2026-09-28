document.addEventListener("DOMContentLoaded", function () {
  if (!window.PLATFORM_DATA) {
    console.warn("PLATFORM_DATA was not found.");
    return;
  }

  renderHomepagePlatforms();
  renderFullPlatforms();
});

function renderHomepagePlatforms() {
  const slider = document.getElementById("homepage-platform-slider");
  const track = document.getElementById("homepage-platform-track");

  if (!slider || !track || window.PLATFORM_DATA.length === 0) return;

  const originalItems = window.PLATFORM_DATA;
  const visibleCount = 3;
  const gapPx = 15;

  // Two copies provide a seamless one-card-at-a-time loop.
  [...originalItems, ...originalItems].forEach(function (item) {
    const link = document.createElement("a");
    link.className = "platform-slide";
    link.href = `platforms.html#${encodeURIComponent(item.id)}`;
    link.setAttribute("aria-label", `View ${item.name}`);

    link.innerHTML = `
      <img src="${escapePlatformHTML(item.image)}" alt="${escapePlatformHTML(item.name)}">
      <span class="platform-slide-overlay">
        <span class="platform-slide-name">${escapePlatformHTML(item.name)}</span>
      </span>
    `;

    track.appendChild(link);
  });

  let index = 0;
  const intervalMs = 4000;
  const transitionMs = 2000;
  let timer = null;
  let resetTimer = null;

  // The Research Focus area is a three-column grid with 15 px gaps.
  // Use the exact same three-column calculation here, so exactly three
  // Platform cards fit inside the carousel viewport and everything else
  // remains clipped until it slides in from the right.
  function syncCardSize() {
    const researchGrid = document.getElementById("homepage-research");
    const researchCard = researchGrid
      ? researchGrid.querySelector(".mini-card")
      : null;

    const viewportWidth = slider.getBoundingClientRect().width;
    if (viewportWidth > 0) {
      const cardWidth = (viewportWidth - gapPx * (visibleCount - 1)) / visibleCount;
      slider.style.setProperty("--platform-card-width", `${cardWidth}px`);
    }

    if (researchCard) {
      const researchHeight = researchCard.getBoundingClientRect().height;
      if (researchHeight > 0) {
        slider.style.setProperty("--platform-card-height", `${researchHeight}px`);
      }
    }
  }

  function cardStep() {
    const first = track.querySelector(".platform-slide");
    if (!first) return 0;
    return first.getBoundingClientRect().width + gapPx;
  }

  function updatePosition(animate) {
    track.style.transition = animate
      ? `transform ${transitionMs}ms ease`
      : "none";
    track.style.transform = `translate3d(-${index * cardStep()}px, 0, 0)`;
  }

  function advance() {
    index += 1;
    updatePosition(true);

    if (index >= originalItems.length) {
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(function () {
        index = 0;
        updatePosition(false);
      }, transitionMs + 20);
    }
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    stop();
    if (originalItems.length > visibleCount) {
      timer = window.setInterval(advance, intervalMs);
    }
  }

  function resetLayout() {
    syncCardSize();
    index = 0;
    updatePosition(false);
    start();
  }

  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", start);
  window.addEventListener("resize", resetLayout);

  requestAnimationFrame(function () {
    requestAnimationFrame(resetLayout);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stop();
  }
}

function renderFullPlatforms() {
  const container = document.getElementById("full-platform-list");
  if (!container) return;

  window.PLATFORM_DATA.forEach(function (item) {
    const card = document.createElement("article");
    card.className = "card platform-detail-card";
    card.id = item.id;

    card.innerHTML = `
      <div class="platform-detail-image-wrap">
        <img class="platform-detail-image" src="${escapePlatformHTML(item.image)}" alt="${escapePlatformHTML(item.name)}">
      </div>
      <div class="platform-detail-content">
        <span class="platform-category">${escapePlatformHTML(item.category)}</span>
        <h2>${escapePlatformHTML(item.name)}</h2>
        <p>${escapePlatformHTML(item.description)}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function escapePlatformHTML(value) {
  if (!value) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
