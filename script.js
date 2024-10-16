function calcularIMC(){
    let user_weight = parseFloat(document.getElementById("weight").value);
    let user_height = parseFloat(document.getElementById("height").value);
    
    if  (isNaN(user_weight) || isNaN(user_height) ||  user_weight <= 0 || user_height <= 0) {
        alert("Insira um valor válido!")
        return
    }else if (user_weight >= 200 || user_height >= 200){
        alert("Insira um valor válido!")
    }

    imc =  user_weight / (user_height * user_height).toFixed(2);

    let nivel_imc;

    if (imc <= 18.5){
        nivel_imc = "Você está abaixo do peso!"
    }else if (imc <= 25){
        nivel_imc = "Você está com o peso normal!"
    }else if(imc <= 30){
        nivel_imc = "Você está com sobrepeso!"
    }else if(imc > 30){
        nivel_imc = "Você está com obesidade!"
    }

    alert(nivel_imc + " Seu IMC é de: " + imc.toFixed(0))
}