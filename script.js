// chiedo nome
var nome = prompt("come ti chiami?");
// chiedo sesso
var sesso = prompt("sei uomo o donna?");
// stampo nome
if (sesso == "uomo") {
  document.getElementById("name").className = "lightblue";
  document.getElementById("name").innerHTML = nome;
}
else if (sesso == "donna") {
  document.getElementById("name").className = "pink";
  document.getElementById("name").innerHTML = nome;
}
else {
  document.getElementById("name").innerHTML = "inserisci un sesso valido!";

}
