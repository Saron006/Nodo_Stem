function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convertir cm a metros

    if (isNaN(weight) || isNaN(height)) {
        alert("Por favor, ingresa valores válidos para el peso y la altura.");
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    document.getElementById('imc-result').textContent = imc;

    let category = "";

    if (imc < 18.5) {
        category = "Peso insuficiente";
        document.getElementById('imc-category').style.color = "#f39c12"; /* Naranja */
    } else if (imc >= 18.5 && imc < 24.9) {
        category = "Peso normal";
        document.getElementById('imc-category').style.color = "#2ecc71"; /* Verde */
    } else if (imc >= 25 && imc < 29.9) {
        category = "Sobrepeso";
        document.getElementById('imc-category').style.color = "#f1c40f"; /* Amarillo */
    } else if (imc >= 30 && imc < 35) {
        category = "Obesidad";
        document.getElementById('imc-category').style.color = "#e67e22"; /* Naranja oscuro */
    } else {
        category = "Obesidad Mayor (Obesidad Mórbida)";
        document.getElementById('imc-category').style.color = "#c0392b"; /* Rojo oscuro */
    }

    document.getElementById('imc-category').textContent = category
}