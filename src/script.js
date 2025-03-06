function abrirModalLogoInfo() {
    document.getElementById('modal-logo-info').classList.add('show');
    document.body.classList.add('no-scroll');
}

function fecharModalLogoInfo() {
    document.getElementById('modal-logo-info').classList.remove('show');
    document.body.classList.remove('no-scroll');
}

function abrirModalNetflix() {
    document.getElementById('modal-netflix').classList.add('show');
    document.body.classList.add('no-scroll');
}

function fecharModalNetflix() {
    document.getElementById('modal-netflix').classList.remove('show');
    document.body.classList.remove('no-scroll');
}

// para fechar o modal quando clicar fora dele
window.onclick = function(event) { 
    const modalLogoInfo = document.getElementById('modal-logo-info');
    const modalNetflix = document.getElementById('modal-netflix');
    
    if (event.target === modalLogoInfo) {
        fecharModalLogoInfo();
    } if (event.target === modalNetflix) {
        fecharModalNetflix();
    }
}