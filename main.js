const form = document.getElementById('form-comparacao');


form.addEventListener("submit", function(e){
    e.preventDefault();

const numeroA = parseFloat (document.getElementById('numero-a').value);
const numeroB = parseFloat (document.getElementById('numero-b').value);

function comparaNumero(numeroA, numeroB){
    return numeroB > numeroA; } {
    if (numeroB == numeroA){
        alert('O valor A é igual ao valor B ');
    } else if (numeroA > numeroB) {
        alert('O valor A é maior ao valor B');
    } else {
        alert('O valor B é maior ao valor A');
    } 
}

formEValido = comparaNumero(numeroA, numeroB)

if (formEValido) {
    alert ("Sucesso")
} else {
    alert ("Erro")
}
});