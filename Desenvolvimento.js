function mostrarProximo(index) {
  const arrows = document.querySelectorAll(".arrow");
  const steps = document.querySelectorAll(".flow-step");

  if (index + 1 < steps.length) {
    arrows[index].classList.remove("hidden");
    steps[index + 1].classList.remove("hidden");
    steps[index + 1].classList.add("active");
  }
}

function reiniciarFluxo() {
  const steps = document.querySelectorAll(".flow-step");
  const arrows = document.querySelectorAll(".arrow");

  steps.forEach((step, index) => {
    if (index === 0) {
      step.classList.remove("hidden");
      step.classList.add("active");
    } else {
      step.classList.add("hidden");
      step.classList.remove("active");
    }
  });

  arrows.forEach(arrow => arrow.classList.add("hidden"));
}
