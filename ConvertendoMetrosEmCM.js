/*Faça um Programa que converta metros para centímetros.*/

function ConverterMetrosEmCM(metros){
    let MM = metros*1000
    let CM = metros*100
    console.log(` ${metros} Metro(s) convertido(s) para Milímetro(s) é igual a: ${MM} Milímetro(s)\n ${metros} Metro(s) convertido(s) para Centímetro(s) é igual a: ${CM} Centímetro(s)\n`)
}

ConverterMetrosEmCM(1)