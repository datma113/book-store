
//number of purchasing text
let numberPurchasing = document.getElementById("numberPurchasing");
let NumberPurchasingBtn = document.getElementsByClassName("cart-left-btn");

NumberPurchasingBtn[0].addEventListener("click", () => {
    let numberTemp = numberPurchasing.textContent;
    numberTemp--;
    if( numberTemp < 1 )
        numberTemp = 1;
    numberPurchasing.innerHTML = (numberTemp);
});
NumberPurchasingBtn[1].addEventListener("click", () => {
    let numberTemp = numberPurchasing.textContent;
    numberTemp++;
    numberPurchasing.innerHTML = (numberTemp);
});

// choose option in book format
let chooseOption = document.getElementsByClassName("main-purchasing-right-opt");
for (let i = 0; i < chooseOption.length; i++) {
    (function () {
        chooseOption[i].addEventListener("click", () =>{
            for(let k = 0; k < chooseOption.length ; k++){
                chooseOption[k].style.border = "none";
                chooseOption[k].style.color = "black";
            }
            chooseOption[i].style.borderBottom = 2  + "px "+"solid "+"black";
            chooseOption[i].style.color = "red";
        },false);
    }()); // immediate invocation
}

// choose change to scroll
let chooseCTS = document.getElementsByClassName("change-to-scroll-element");
for (let i = 0; i < chooseCTS.length; i++) {
    (function () {
        chooseCTS[i].addEventListener("click", () =>{
            for(let k = 0; k < chooseCTS.length ; k++){
                chooseCTS[k].style.border = "none";
            }
            chooseCTS[i].style.borderBottom = 2  + "px "+"solid "+"black";

        },false);
    }()); // immediate invocation
}
//scroll to element which be chosen
chooseCTS[0].addEventListener("click", () => {
    let pos = $(chooseCTS[0]).offset().top;     //bug bug bug bug
    document.documentElement.scrollTop = pos;
});