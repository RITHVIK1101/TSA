document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-overlay");
    const boxes = document.querySelectorAll(".solution-box");

    buttons.forEach((button, index) => {
      button.addEventListener("mouseover", function () {
        boxes[index].classList.add("inverted");
      });

      button.addEventListener("mouseout", function () {
        boxes[index].classList.remove("inverted");
      });
    });
  });