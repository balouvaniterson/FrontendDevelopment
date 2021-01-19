// JavaScript Document

// Variables

deP = document.querySelector("p.Eerste");

deP2 = document.querySelector("p.Tweede");

deP3 = document.querySelector("p.pmeer");

// Event

deP3.addEventListener("click", ietsDoen);

// Function

function ietsDoen() {
    deP.classList.add("hide");
    deP2.classList.add("show");
    deP3.classList.add("move")
}