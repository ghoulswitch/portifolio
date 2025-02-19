function abrirModalLogoInfo() {
    document.getElementById('modal-logo-info').style.display = 'flex' 
}

function fecharModalLogoInfo() {
    document.getElementById('modal-logo-info').style.display = 'none'
}

// para fechar o modal quando clicar fora dele
window.onclick = function(event) { 
    let modalLogoInfo = document.getElementById('modal-logo-info') 

    if (event.target === modalLogoInfo) { 
        fecharModalLogoInfo()
    }
}