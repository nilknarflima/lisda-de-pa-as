var listadepecas = ["Pneu", "Parabrisa","caixa de cambio","CorreiaDentada"];

if (listadepecas.length < 4){
    //é possível cadastrar
    console.log("É possível cadastrar mais peças!")
    } else {
        //não é possível cadastrar
        console.log("Não é possível cadastrar mais peças!")
    }
let peso = 90;
if (peso < 100){
    //não possui o peso adequado
    console.log("A peça deve pesar no mínimo 100g.")
    } else {
        //possui o peso adequado
        console.log("A peça possui o peso adequado.")
    }
let nomepeça = "AO"
if (nomepeça.length > 3) {
    console.log("O nome de peça está adequado para o cadastro!")
    } else {
        console.log("O nome deve ter, pelo menos, 3 caracteres. Digite um nome adequado.")
    }
switch(nomepeça.length) {
    case 0:
        console.log("O nome deve ter, pelo menos, 3 caracteres. Digite um nome adequado.")
    case 1:
    
    case 2:
    
    case 3:

    default:
        console.log("O nome de peça está pronta para o cadastro!")

}