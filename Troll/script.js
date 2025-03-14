const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
let yesSize = 24;
let offsetX = 0, offsetY = 0;

noButton.addEventListener('mousemove', function (event) {
    const rect = this.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < 100) {
        const moveX = (deltaX / distance) * 200;
        const moveY = (deltaY / distance) * 200;
        offsetX += moveX;
        offsetY += moveY;

        this.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});

noButton.addEventListener('click', function () {
    yesSize += 10;
    if (yesSize > window.innerWidth) {
        yesSize = window.innerWidth - 20;
    }
    yesButton.style.fontSize = `${yesSize}px`;
    yesButton.style.padding = `${yesSize / 4}px ${yesSize / 2}px`;
});
document.getElementById("yes").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
    celebrate(); // Gọi hiệu ứng ăn mừng
});

function celebrate() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ["#ff0000", "#ff8000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#8000ff"];

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    })();
}
