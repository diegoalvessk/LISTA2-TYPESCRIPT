/*
Faça uma função PalavraMaisLonga(frase) pegue o parâmetro “frase” que está
sendo passado e retorne a palavra mais longa na string. Se houver duas ou mais
palavras com o mesmo tamanho, retorne a primeira palavra da string com esse
tamanho. Deve ignorar pontuação e caracteres especiais (!?-.#$, etc). As palavras
podem conter números, por exemplo “Ola palavra123 831”
*/
var string = "Te amo diego osvaldo cruz";
var big = "";
string.split(" ").forEach(function (word) {
    if (word.trim().length > big.length) {
        big = word.trim();
    }
});
console.log(big);
