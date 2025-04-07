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

    const form = document.getElementById("formMatricula");
    const mensagem = document.getElementById("mensagemConfirmacao");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        mensagem.style.display = "block";
        setTimeout(() => {
            mensagem.style.display = "none";
            form.reset();
        }, 3000);
    });
});


var code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

var pos = 0;
let set = false;

document.addEventListener('keydown', function(e) {
        
    var key = e.key;
    console.log(key);

    if (key == code[pos]) {
        pos++;
        if (pos == code.length) {
        rotate_page()
        pos = 0;
        }
    } else {
        pos = 0;
    }
});

let degree = 0

function rotate_page() {
    if(document.body.style.rotate != "360deg") {
        let x = setInterval(function() {
            degree += 15;
            document.body.style.transitionDuration = "0.5s"
            document.body.style.rotate = degree + "deg";

            if(degree == 360) {
                clearInterval(x);
            }
        }, 10);
    } else {
        let x = setInterval(function() {
            degree -= 15;
            document.body.style.transitionDuration = "0.5s"
            document.body.style.rotate = degree + "deg";

            if(degree == 0) {
                clearInterval(x);
            }
        }, 10);
    }
}