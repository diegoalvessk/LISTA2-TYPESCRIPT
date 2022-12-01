/*
Faça uma função ValidarNomeDeUsuario(nome) use o parâmetro “nome” que é
passado e verifique se é um nome de usuário válido de acordo com as regras:
a. O nome de usuário tem entre 4 e 25 caracteres;
b. Deve obrigatoriamente começar com uma letra;
c. Só deve conter letras, número e undeline ( _ );
d. O nome não pode ter o último caractere como underline( _ ).
*/

let nome : string
nome = prompt("Informe o nome.")
validarusuario(nome)

function validarusuario(nome : string) : void{
    if(nome.length>25 || nome.length<4){
        alert("Nome inválido pela número de letras.")
    }

    let primeiraLetra : string
    primeiraLetra = nome.substr(0, 1)

    if(primeiraLetra == "1" || primeiraLetra == "2" || primeiraLetra == "3" || primeiraLetra == "4" || primeiraLetra == "5" || primeiraLetra == "6" || primeiraLetra == "7" || primeiraLetra == "8" || primeiraLetra == "9" || primeiraLetra == "0" ){
        alert("Nome inválido pois começa com um número.")
    }


}