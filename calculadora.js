
function calcularAreaDoCirculo() {
    const raio = parseFloat(document.getElementById("Raio").value);

    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, digite um valor válido para o raio.");
        return;
    }

    const pi = Math.PI; // Valor de pi
    const area = pi * Math.pow(raio, 2); // Fórmula da área do círculo
    document.getElementById("Rcirculo").innerHTML = area.toFixed(2)
   /*  var resultado = (`A área do círculo com raio ${raio} é ${area.toFixed(2)}`); */
    
}

function calcularAreaCoroaCirculo() {
    const raioExterno = parseFloat(document.getElementById("Rexterno").value);
    const raioInterno = parseFloat(document.getElementById("Rinterno").value);

    var areaExterna = Math.PI * Math.pow(raioExterno, 2);
    var areaInterna = Math.PI * Math.pow(raioInterno, 2);
    var areaCoroa = areaExterna - areaInterna;

    document.getElementById("Rcoroa").innerHTML = areaCoroa.toFixed(2)


    if (!isNaN(raioExterno) && !isNaN(raioInterno) && raioExterno > raioInterno) {
        var areaExterna = Math.PI * Math.pow(raioExterno, 2);
        var areaInterna = Math.PI * Math.pow(raioInterno, 2);
        var areaCoroa = areaExterna - areaInterna;

        
      /*   alert(`A área da coroa do círculo é: ${areaCoroa}`);  */
    } else {
        alert("Por favor, insira valores numéricos válidos, e o raio externo deve ser maior que o raio interno.");
    } 
}

function calcularAreaHexagono() {

    const ladoDoHexagono = parseFloat(document.getElementById("RH").value);


    if (!isNaN(ladoDoHexagono) && ladoDoHexagono > 0) {
        const areaDoHexagono = (Math.pow(ladoDoHexagono, 2) * (3 * Math.sqrt(3))) / 2
        document.getElementById("resultado").innerHTML = areaDoHexagono.toFixed(2)
    

    } else {
        console.log("Por favor, insira um valor válido para o lado do hexágono.");
    }
}

function calcularAreaDoPentagono() {
    const lado = parseFloat(document.getElementById("Lpentagono").value);

    if (isNaN(lado) || lado <= 0) {
        alert("Por favor, digite um valor válido para o comprimento do lado.");
    
    }

    const pi = Math.PI; // Valor de pi
    const area = (5 / 4) * Math.pow(lado, 2) * (1 / Math.tan(pi / 5)); // Fórmula da área do pentágono
    document.getElementById("resultado").innerHTML = area.toFixed(2)
    


}

function calcularAreaQuadrado() {
    var lado = parseFloat(document.getElementById("Lado").value)
    var area = lado * lado;

    document.getElementById("Rquadrado").innerHTML = area.toFixed(2)
    
    if (!isNaN(lado) && lado > 0) {
        const areaDoQuadrado = calcularAreaQuadrado();
        
    } else {
    alert("Por favor, insira um valor numérico válido maior que zero."); 
    }
}

function calcularAreaRetangulo() {
    var comprimento = parseFloat(document.getElementById("Cretangulo").value);
    var largura = parseFloat(document.getElementById("Lretangulo").value);
    var area = comprimento * largura;
    
    document.getElementById("Rquadrado").innerHTML = area.toFixed(2)

    
    if (!isNaN(comprimento) && !isNaN(largura)) {
       
    } else {
        alert("Por favor, insira valores numéricos válidos.");
    }
}

function calcularAreaTrapezioIrregular() {
            
    const baseMaior = parseFloat(document.getElementById("BaseMaior").value);
    const baseMenor = parseFloat(document.getElementById("BaseMenor").value);
    const altura = parseFloat(document.getElementById("Altura").value);

    const area = ((baseMaior + baseMenor) / 2) * altura;


    // Verificar se os valores inseridos são números válidos
    if (!isNaN(baseMaior) && !isNaN(baseMenor) && !isNaN(altura) && baseMaior > 0 && baseMenor > 0 && altura > 0) {
        const areaDoTrapezio = (area);
        document.getElementById("resultado").innerHTML = area.toFixed(2)
    } else {
        alert("Por favor, insira valores numéricos válidos maiores que zero.");
    }
}

function calcularAreadotriangulo() {
    // Obtenha os valores da base e altura do usuário
    var base = parseFloat(document.getElementById("Btriangulo").value);
    var altura = parseFloat(document.getElementById("Atriangulo").value);

    // Verifique se os valores são válidos
    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos para a base e a altura.");
    
    }

    // Calcule a área do triângulo
    var area = (base * altura) / 2;

    document.getElementById("Rtriangulo").innerHTML = area.toFixed(2) 

}

function calcularArea() {
    // Obtenha os valores inseridos pelo usuário
    var raioMaior = parseFloat(document.getElementById('Bmaior').value);
    var raioMenor = parseFloat(document.getElementById('Bmenor').value);
    var altura = parseFloat(document.getElementById('A').value);

    // Calcule a área do tronco de pirâmide
    var area = Math.PI * (raioMaior + raioMenor) * (raioMaior - raioMenor + Math.sqrt(Math.pow(altura, 2) + Math.pow(raioMaior - raioMenor, 2)));

    // Exiba o resultado na página
    document.getElementById('resultado').textContent = area.toFixed(2);
}