function calculate(){
    const age = document.querySelector("#amount").value;
    const height = document.querySelector("#rate").value;
    const weight = document.querySelector("#months").value;
    const pic = document.querySelectorAll(".representation");
  

    pic.forEach((pics) => {
      console.log(pics);
    })

    // const interest = (amount * (rate * 0.01)) / month;

    let heightInMeters = height / 100;
    let h = heightInMeters*heightInMeters;

    const total = (weight / h);
    console.log(total);

    document.querySelector("#totalvalue").innerHTML = "BMI : " + (total).toFixed(0);
    return total;
}

const health = document.querySelector(".btn");
let underPopup = document.getElementById("under-popup");
let normalPopup = document.getElementById("normal-popup");
let overPopup = document.getElementById("over-popup");
let obesePopup = document.getElementById("obese-popup");
let eobesePopup= document.getElementById("eobese-popup");

function healthStatus(){
  let checkBmi = calculate();
  checkBmi = checkBmi.toFixed(0);
  console.log(checkBmi);
  if(checkBmi < 18 ){
    openUnderPopup();
  }
  else if(checkBmi >= 18.5 && checkBmi <= 24){
    openNormalPopup();
  }
  else if(checkBmi >= 25 && checkBmi <= 29){
    openOverPopup();
  }
  else if(checkBmi >= 30 && checkBmi <= 34){
    openObesePopup();
  }
  else if(checkBmi > 35){
    openEObesePopup();
  }
}

function openUnderPopup(){
  underPopup.classList.add("open-under-popup");
  console.log("here")
}

function openNormalPopup(){
  normalPopup.classList.add("open-normal-popup");
}

function openOverPopup(){
  overPopup.classList.add("open-over-popup");
}

function openObesePopup(){
  obesePopup.classList.add("open-obese-popup");
}

function openEObesePopup(){
  eobesePopup.classList.add("open-eobese-popup");
}

function closeUnderPopup(){
  underPopup.classList.remove("open-under-popup");
}

function closeNormalPopup(){
  normalPopup.classList.remove("open-normal-popup");
}

function closeOverPopup(){
  overPopup.classList.remove("open-over-popup");
}

function closeObesePopup(){
  obesePopup.classList.remove("open-obese-popup");
}

function closeEObesePopup(){
  eobesePopup.classList.remove("open-eobese-popup");
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};