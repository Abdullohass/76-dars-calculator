import {ayrish,AddNumbers,u,d} from "./add.js";

const son1=document.getElementById("num1");
const son2=document.getElementById("num2");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const umnojit=document.getElementById("umnojit");
const delit=document.getElementById("delit");
const result=document.getElementById("result");

plus.addEventListener("click",()=>{
    result.textContent="Result: "+ AddNumbers(+son1.value,+son2.value)
})
minus.addEventListener("click",()=>{
    result.textContent="Result: "+ ayrish(+son1.value,+son2.value)
})
umnojit.addEventListener("click",()=>{
    result.textContent="Result: "+ u(+son1.value,+son2.value)
})
delit.addEventListener("click",()=>{
    result.textContent="Result: "+ d(+son1.value,+son2.value)
})