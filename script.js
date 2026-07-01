// ======================================
// BOTÃO VOLTAR AO TOPO
// ======================================

const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (botaoTopo) {
        botaoTopo.style.display =
            window.scrollY > 250 ? "block" : "none";
    }

});

function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ======================================
// ANIMAÇÃO DOS CARDS
// ======================================

const cards = document.querySelectorAll(".card, .produto");

function mostrarCards() {

    cards.forEach(card => {

        const topo = card.getBoundingClientRect().top;

        if (topo < window.innerHeight - 80) {
            card.classList.add("aparecer");
        }

    });

}

window.addEventListener("scroll", mostrarCards);
mostrarCards();

// ======================================
// FORMULÁRIO
// ======================================

function enviarFormulario(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    document.getElementById("popupSucesso").style.display = "flex";

    document.querySelector(".formulario").reset();
}

function fecharPopup() {
    document.getElementById("popupSucesso").style.display = "none";
}

// ======================================
// ACESSIBILIDADE
// ======================================

let tamanhoFonte = 16;

function abrirPainel() {
    const painel = document.getElementById("painelAcessibilidade");
    if (painel) painel.style.display = "flex";
}

function fecharPainel() {
    const painel = document.getElementById("painelAcessibilidade");
    if (painel) painel.style.display = "none";
}

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

function resetar() {
    tamanhoFonte = 16;
    document.body.style.fontSize = "16px";
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("alto-contraste");
}

// ======================================
// MODO ESCURO / CLARO (CORRIGIDO)
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("btnModo");

    if (!botao) return;

    botao.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            botao.innerText = "Modo Claro";
        } else {
            botao.innerText = "Modo Escuro";
        }

    });

});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute("href"));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const contadores = document.querySelectorAll(".contador");

function animar(contador) {

    const alvo = parseInt(contador.getAttribute("data-target"));
    let atual = 0;

    const passo = Math.ceil(alvo / 60);

    const interval = setInterval(() => {

        atual += passo;

        if (atual >= alvo) {
            contador.innerText =
                (alvo >= 1000 ? "+" : "") + alvo + (alvo < 100 ? "%" : "");
            clearInterval(interval);
        } else {
            contador.innerText = atual;
        }

    }, 20);

}
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            contadores.forEach(c => animar(c));

        }

    });

}, { threshold: 0.5 });

observer.observe(document.querySelector(".numeros"));

const container = document.getElementById("particles");

for(let i=0;i<30;i++){

    const dot = document.createElement("div");

    dot.style.position = "absolute";
    dot.style.width = "6px";
    dot.style.height = "6px";
    dot.style.borderRadius = "50%";
    dot.style.background = "rgba(46,125,50,0.3)";
    dot.style.left = Math.random()*100 + "%";
    dot.style.top = Math.random()*100 + "%";
    dot.style.animation = "float 6s infinite ease-in-out";

    container.appendChild(dot);
}