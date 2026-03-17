let senhaDigitada = document.querySelector("#input");
let senha = "123";
if(senhaDigitada==senha){
    document.querySelector("#msg").textContent="Logando...";
} else {
    document.querySelector("#msg").textContent="Senha Incorreta"
}