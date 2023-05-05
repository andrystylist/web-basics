const operadoresValidos = ["+", "-", "*", "/"];
const txtOp1 = document.querySelector("#op1");
const selOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btbCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

document.getElementById("calculadora-form").addEventListener("submit", (event) => {
    event.preventDefault();
    calcular(event);
});

btbCalcular.addEventListener('click', calcular);

function calcular(event) {
    const operacion = selOperacion.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    // console.log(event);

    if (!operadoresValidos.includes(operacion)) {
        pResultado.innerText = "Cálculo imposible";
        throw new Error("El operador seleccionado no es válido!");
    }

    if (Number.isNaN(txtOp1) || Number.isNaN(txtOp2)) {
        pResultado.innerText = "Cálculo imposible";
        throw new Error("Los operadores deben ser números");
    }

    let resultado;
    switch (operacion){
        case "+":
            resultado = op1 + op2
            break;
        case "-":
            resultado = op1 - op2
            break;
        case "*":
            resultado = op1 * op2
            break;
        case "/":
            resultado = op1 / op2
            break;
    }

    pResultado.innerText = resultado;
}
