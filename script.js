function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'percentage':
            result = (num1 * num2) / 100;
            break;
        case 'fraction':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Divisão por zero';
            }
            break;
        default:
            result = 'Operação inválida';
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}