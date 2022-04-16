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

let christian = calcularIMC(71,1.72);
let felipe = calcularIMC(75,1.73);
let gabriela = calcularIMC(65,1.68);
let luisa = calcularIMC(55,1.68);

//IMC individual
imprimir("El IMC de Christian es: " + christian);
imprimir("El IMC de Felipe es: " + felipe);
imprimir("El IMC de Gabriela es: " + gabriela);
imprimir("El IMC de Luisa es: " + luisa);
saltarLinea(2);

//Promedio
imprimir("El promedio de IMC de Christian y Felipe es: " + ((christian+felipe)/2));
imprimir("El promedio de IMC de Gabriela y Luisa es: " + ((gabriela+luisa)/2));