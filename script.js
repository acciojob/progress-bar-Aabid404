//your JS code here. If required.
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const circles = [
    document.getElementById("circle-1"),
    document.getElementById("circle-2"),
    document.getElementById("circle-3"),
    document.getElementById("circle-4"),
    document.getElementById("circle-5")
];

let currentActive = 1;

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    progress.style.width =
        ((currentActive - 1) / (circles.length - 1)) * 100 + "%";

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}

next.addEventListener("click", function () {
    if (currentActive < circles.length) {
        currentActive++;
        updateProgress();
    }
});

prev.addEventListener("click", function () {
    if (currentActive > 1) {
        currentActive--;
        updateProgress();
    }
});

updateProgress();