function abrirModalLogoInfo() {
    document.getElementById('modal-logo-info').classList.add('show');
}

function fecharModalLogoInfo() {
    document.getElementById('modal-logo-info').classList.remove('show');
}

// para fechar o modal quando clicar fora dele
window.onclick = function(event) { 
    let modalLogoInfo = document.getElementById('modal-logo-info') 

    if (event.target === modalLogoInfo) { 
        fecharModalLogoInfo()
    }
}