const formEl = document.querySelector("form");
const divEl = document.querySelector("form div");
const pEl = document.querySelector("form p");

formEl.addEventListener("click", (event) => {
  alert("Form");
  console.log(`Target: ${event.target.tagName}, this: ${formEl.tagName}`);
});

divEl.addEventListener("click", (event) => {
  alert("Div");

  // // Stop Bubbling
  event.stopPropagation();

  // Removes all active event listeners
  event.stopImmediatePropagation();
});

pEl.addEventListener("click", () => {
  alert("P");
});