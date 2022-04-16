function saltarLinea(saltos){
    for(let i=0;i<saltos;i++)
        document.write("<br>");
}

function imprimir(msg) {
    document.write(msg);
    saltarLinea(1);
}

function calcularIMC(peso,altura) {
    return (peso/(altura*altura));
}

let nombre = prompt("Ingrese su nombre: ");
let peso = prompt(`Bienvenido/a ${nombre}, favor de ingresar su peso: `);
let altura = prompt("Ahora ingrese su altura: ");

let imc = parseFloat(calcularIMC(peso,altura));
let color,estado;

imc = Math.round(imc*100)/100;

//POR DEBAJO
if(imc < 18.5){
    color = "#1389FF";
    estado = "Bajo de peso";
}
//SALUDABLE
else if(imc >= 18.5 && imc < 25){
    color = "#46AF15";
    estado = "Normal";
}
//SOBREPESO
else if(imc >= 25 && imc < 30){
    color = "#FFD013";
    estado = "Sobrepeso";
}
//OBESIDAD I
else if(imc >= 30 && imc < 35){
    color = "#FF9013";
    estado = "Obesidad I";
}
//OBESIDAD II
else if(imc >= 35 && imc < 40){
    color = "#FF610D";
    estado = "Obesidad II";
}
//OBESIDAD III
else if(imc > 40){
    color = "#FF180D";
    estado = "Obesidad III";
}

imprimir(`Nombre: <b>${nombre}</b>`);
imprimir(`Peso: <b>${peso} kgs.</b>`);
imprimir(`Altura: <b>${altura} mts.</b>`);
saltarLinea(1);
imprimir(`IMC: <b style="color:${color}">${imc}</b>`);
//imprimir(`IMC: <b style="color:${color}">${Math.round(imc*100)/100}</b>`);
imprimir(`Estado: <b style=color:${color}>${estado}</b>`);