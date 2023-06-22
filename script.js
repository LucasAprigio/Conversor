function converterKgParaLibras() {
    
    var inputKg = document.getElementById("inputKg");
    var resultado = document.getElementById("resultado");
    var kg = parseFloat(inputKg.value);
    var libras = kg * 2.20462;

    resultado.innerHTML = kg + " kg = " + libras.toFixed(2) + " lb";
}