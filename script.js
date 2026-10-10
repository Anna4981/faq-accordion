// Decision: should more than one answer be able to stay open at once?
// false = opening one answer closes the others.
const ALLOW_MULTIPLE = false;

const items = document.querySelectorAll(".accordion__item");
const toggleAllBtn = document.getElementById("toggleAll");

// Show or hide one item and keep aria-expanded in sync with the class
function setItemState(item, isOpen) {
  item.classList.toggle("active", isOpen);
  item.querySelector(".accordion__question").setAttribute("aria-expanded", isOpen);
}

function updateToggleAllLabel() {
  const allOpen = [...items].every((item) => item.classList.contains("active"));
  toggleAllBtn.textContent = allOpen ? "Collapse all" : "Expand all";
}

items.forEach((item) => {
  const question = item.querySelector(".accordion__question");

  question.addEventListener("click", () => {
    const willOpen = !item.classList.contains("active");

    // Close the other items first when only one may be open
    if (!ALLOW_MULTIPLE && willOpen) {
      items.forEach((other) => {
        if (other !== item) setItemState(other, false);
      });
    }

    // classList.toggle with a second argument forces add (true) or remove (false)
    setItemState(item, willOpen);
    updateToggleAllLabel();
  });
});

// Expand all / Collapse all
toggleAllBtn.addEventListener("click", () => {
  const shouldOpen = toggleAllBtn.textContent === "Expand all";
  items.forEach((item) => setItemState(item, shouldOpen));
  updateToggleAllLabel();
});

// Open the first question when the page loads
setItemState(items[0], true);
updateToggleAllLabel();