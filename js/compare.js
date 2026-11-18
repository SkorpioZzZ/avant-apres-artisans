// Curseur avant / après, partagé par toutes les pages de comparaison.
// Attendu dans la page : un élément .compare et un input range .compare__range juste après.
// Le script met à jour la variable CSS --pos, utilisée par le CSS pour découper l'image "avant".

document.querySelectorAll(".compare").forEach((box) => {
  const range = box.parentElement.querySelector(".compare__range");

  function setPos(value) {
    box.style.setProperty("--pos", value + "%");
    if (range) range.value = value;
  }

  if (range) {
    range.addEventListener("input", () => setPos(range.value));
  }

  // on peut aussi glisser directement sur l'image (souris ou doigt)
  let dragging = false;

  function fromPointer(event) {
    const rect = box.getBoundingClientRect();
    const pct = ((event.clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, Math.round(pct))));
  }

  box.addEventListener("pointerdown", (event) => {
    dragging = true;
    box.setPointerCapture(event.pointerId);
    fromPointer(event);
  });
  box.addEventListener("pointermove", (event) => {
    if (dragging) fromPointer(event);
  });
  box.addEventListener("pointerup", () => {
    dragging = false;
  });
});
