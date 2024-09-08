import "./styles.css";

const contentContainerElement = document.getElementById("content-container");
const loadingIndicatorElement = document.getElementById("loading");

let pageNumber = 1;
const pageSize = 10;
let isLoadingContent = false;

function loadContent() {
  loadingIndicatorElement.style.display = "block";
  isLoadingContent = true;

  // Simulate an API call with a timeout
  setTimeout(() => {
    for (let i = 0; i < pageSize; i++) {
      const contentDiv = document.createElement("div");
      contentDiv.className = "content";
      contentDiv.textContent = `Content item ${
        (pageNumber - 1) * pageSize + i + 1
      }`;

      contentContainerElement.appendChild(contentDiv);
    }

    loadingIndicatorElement.style.display = "none";

    pageNumber++;
    isLoadingContent = false;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isLoadingContent
    ) {
      loadContent();
    }
  });

  // Initial load
  loadContent();
});
