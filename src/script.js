function abrirModalLogoInfo() {
    document.getElementById('modal-logo-info').classList.add('show');
}

function fecharModalLogoInfo() {
    document.getElementById('modal-logo-info').classList.remove('show');
}

function abrirModalLogoQuintal() {
    document.getElementById('modal-logo-quintal').classList.add('show');
}

function fecharModalLogoQuintal() {
    document.getElementById('modal-logo-quintal').classList.remove('show');
}

// para fechar o modal quando clicar fora dele
window.onclick = function(event) { 
    const modalLogoInfo = document.getElementById('modal-logo-info');
    const modalLogoQuintal = document.getElementById('modal-logo-quintal');
    
    if (event.target === modalLogoInfo) {
        fecharModalLogoInfo();
    }
    
    if (event.target === modalLogoQuintal) {
        fecharModalLogoQuintal();
    }
}