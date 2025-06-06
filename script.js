// -------------selecionando elementos mo HTML-------------
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //se o menu esta fechado

    if (menu.classList.contains("menu-fechado")) {

        //Abrir o menu
        menu.classList.remove("menu-fechado")

        //Mostrar iconex
        iconeX.style.display = "inline"

        //Esconder icone barras
        iconeBarras.style.display = "none"
    }
    else {
        //Fechar o menu
        menu.classList.add("menu-fechado")

        //Esconder o iconeX
        iconeX.style.display = "none"

        //Mostrar o icone Barras
        iconeBarras.style.display = "inline"
    }

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //Mostra o iconeX
    iconeX.style.display = "inline"

    //Esconda o icone barras
    iconeBarras.style.display = "none"
}