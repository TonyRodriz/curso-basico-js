const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculadora1');
const input2 = document.querySelector('#calculadora2');
const btn = document.querySelector('#btnCalculadora');
const pResult = document.querySelector('#result');


function btncalcular() {
   const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "resultado: " + sumaInputs;
}

btn.addEventListener('click', btncalcular);