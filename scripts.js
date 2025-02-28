document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            const panel = this.nextElementSibling;
            const seta = this.querySelector(".seta");
            if (panel.style.display === "block") {
                panel.style.display = "none";
                seta.style.transform = "rotate(0deg)";
            } else {
                document.querySelectorAll(".panel").forEach((p) => p.style.display = "none");
                document.querySelectorAll(".seta").forEach((s) => s.style.transform = "rotate(0deg)");
                panel.style.display = "block";
                seta.style.transform = "rotate(180deg)";
            }
        });
    });
});