document.getElementById("no").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + "px";
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + "px";
});
document.getElementById("si").addEventListener("click", function() {
    alert("¡No te arrepentirás, TE AMO! 💖");
});

// Asegurar que la música se reproduzca en móviles
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("music");
    document.body.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        }
    });
});
