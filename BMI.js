let option1 = document.querySelector("#height");
let option2 = document.querySelector("#weight");
let buttonev = document.querySelector("button");
let res = document.querySelector(".result");
console.log(option1);
buttonev.addEventListener("click",()=>{
    buttonev.style.backgroundColor = "blue" ;
    val1 = option1.value;
    val2 = option2.value;
    if (val1=="" || val2=="" || val1<0 || val2<0 ||isNaN(val1) || isNaN(val2) ){
        res.innerText ="Please Enter a proper value";
    }
    else {
        let ans = (val2/(val1*val1)).toFixed(2);
        if(ans<18.5){
        res.innerText =`Your BMI is ${ans} and You are Underweighted`;
        }
        else if(ans>=18.5 && ans<25){
            res.innerText =`Your BMI is ${ans} and You are Healthy`;
            }
        else if(ans>25 && ans<=29.9){
                res.innerText =`Your BMI is ${ans} and You are overweighted`;
                }
        else {
            res.innerText =`Your BMI is ${ans} and You are Obesed`;
        }
    }
})
