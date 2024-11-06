const btn1= document.querySelector('#btn1');
const btn2=document.querySelector('#btn2');
const btn3=document.querySelector('#btn3');
const btn4=document.querySelector('#btn4');
const btn5=document.querySelector('#btn5');

btn1.addEventListener('click',() => {
    document.querySelector('#output1 p').style.color= "red";
});

btn2.addEventListener('click',() => {
    span = document.getElementById("output2");
    txt = document.createTextNode("Hello world ");
    span.appendChild(txt);
});

btn3.addEventListener('click',() => {
    document.querySelector("#output3 p").classList.remove("small-text");
});

btn4.addEventListener('click',() => {
    document.querySelector("#output4").style.color= "red";
});

btn5.addEventListener('click',() => {
    const mess=document.querySelector("#message");
    console.log(mess.value);
});
