let contador = 0;

document.getElementById("mas").addEventListener("click", () => {

    contador++;

    document.getElementById("num").innerHTML=contador;

})

document.getElementById("menos").addEventListener("click", () => {

    contador--;

    document.getElementById("num").innerHTML = contador;

})