// JavaScript Document

deP = document.querySelector("p.Eerste");

deP2 = document.querySelector("p.Tweede");

deP3 = document.querySelector("p.pmeer");



deP3.addEventListener("click", ietsDoen);


function ietsDoen() {
    deP.classList.add("hide");
    deP2.classList.add("show");
    deP3.classList.add("move")
}