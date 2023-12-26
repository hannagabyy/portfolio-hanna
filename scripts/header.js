let menuAberto = document.getElementById("menu")
let body = document.body
let conteudo = document.querySelector('.conteudo')
let menuLabel = document.getElementById('menu-label')


menuAberto.addEventListener("change", function() {
    if (menuAberto.checked) {
        conteudo.classList.add("menu-aberto");
    } else {
        conteudo.classList.remove("menu-aberto");
    }
});

body.addEventListener('click', function (e) {
    if (menuAberto.checked && !menuLabel.contains(e.target)) {
        menuAberto.click()
    }
    
});