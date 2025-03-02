const display = document.querySelector(".screen p");
const numBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const egalBtn = document.getElementById("egal");

// Variable pour stocker l'expression saisie
let expression = "";

// Ajouter un chiffre ou un point
numBtn.forEach(button => {
    button.addEventListener("click", () => {

        // Renvoie la valeur du bouton
        let value = button.dataset.value;

        // Empêcher plusieurs points dans un même nombre
        if (value === "." && expression.slice(-1) === ".") return;

        // Saisie la valeur du bouton cliqué dans value
        if (display.innerText === "0" && value !== ".") {
            expression = value;
        } else {
            expression += value;
        }
        display.innerText = expression;
    });

});

// Ajouter un opérateur
operatorBtn.forEach(button => {
    button.addEventListener("click", () => {

        // Renvoie la valeur du bouton
        let value = button.dataset.value;

        // Empêcher d'ajouter un opérateur si l'expression est vide
        if (expression === "") return;

        // Empêcher plusieurs opérateurs de suite (ex: "5++3")
        if (isNaN(expression.charAt(expression.length - 1))) return;
        expression += value;
        display.innerText = expression;
    });

});

// Calcul du résultat final
egalBtn.addEventListener("click", () => {

    try {
        let result = eval(expression);  // Calcul le résultat
        expression = result.toString(); // Converti le résultat en String
        display.innerText = expression;
    } catch {
        display.innerText = "Erreur";
        expression = "";
    }

});

// Vide la calculatrice lorsque C est cliqué
clearBtn.addEventListener("click", () => {
    expression = "0";
    display.innerText = "0";
});