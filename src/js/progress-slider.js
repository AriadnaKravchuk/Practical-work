const sliderBoxes = document.querySelectorAll(".progress-slider__list");
const arrowButtons = document.querySelectorAll(".progress-slider__button");

arrowButtons.forEach((arrowButton) => {
    arrowButton.addEventListener("click", () => {
        const sliderBox = arrowButton.closest(".progress-slider").querySelector(".progress-slider__list");
        sliderBox.scrollLeft += arrowButton.id === "left-button" ? -150 : 150;
    });
});

let isDragging = false;
let sliderBoxBeingDragged = null;

const dragging = (e) => {
    if (!isDragging) return;
    sliderBoxBeingDragged.scrollLeft -= e.movementX;
};

sliderBoxes.forEach((sliderBox) => {
    sliderBox.addEventListener("mousedown", () => {
        isDragging = true;
        sliderBoxBeingDragged = sliderBox;
    });
    sliderBox.addEventListener("mousemove", dragging);
    sliderBox.addEventListener("mouseup", () => {
        isDragging = false;
        sliderBoxBeingDragged = null;
    });
});