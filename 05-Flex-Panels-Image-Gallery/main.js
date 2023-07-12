const panels = document.querySelectorAll(".panel");
function closeAll(ele) {
  panels.forEach((panel) => {
    if (ele == panel) return;
    panel.classList.remove("open");
  });
}
function toggleOpen() {
  // closeAll(this); //use it if you want only one panel be open in a time
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
});

panels.forEach((panel) => {
  panel.addEventListener("transitionend", toggleActive);
});