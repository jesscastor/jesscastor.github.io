var x = document.querySelector("btnGetMessage");
var x1 = document.getElementById("paragraphId1");
var x2 = document.getElementById("paragraphId2");
x.addEventListener("mouseover", myFunction(x1,x2));

function myFunction(x1,x2)
{
x2.innerHTML = x1.innerText + "Jessica Castor";
}