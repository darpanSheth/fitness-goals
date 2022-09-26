function showHideNavBar(){
    /* This function is to toggle the visibility of the nav bar when 
    hamburger icon is clicked*/

    var toggle = document.getElementsByClassName("nav-bar");
    var iconLine = document.getElementsByClassName("icon-line");
    var midLine = document.getElementById("mid-line");

    if(toggle[0].style.display == "none"){
        toggle[0].style.display = "block";
        midLine.style.display = "none";
        iconLine[0].style.backgroundColor = "black";
        iconLine[0].style.transform = "skewY(45deg)";
        iconLine[2].style.backgroundColor = "black";
        iconLine[2].style.transform = "skewY(-45deg)";
    }
    else{
        toggle[0].style.display = "none";
        midLine.style.display = "block"
        iconLine[0].style.backgroundColor = "lightgreen";
        iconLine[0].style.transform = "skewY("+(0)+"deg)";
        iconLine[2].style.backgroundColor = "lightgreen";
        iconLine[2].style.transform = "skewY("+0+"deg)";
    }
}

function calculateBMI(form){
    /* The below section is to calculate the BMI on the home page and than display its
    result according to the value obtained*/

    var weight;                                                         //variable to hold the value of weight entered by user.
    var height;                                                         //variable to hold the value of height entered by user.
    var BMIValue;                                                       //stores the BMI value.
    var BMIValueDisplay = document.querySelector('#result-BMI');         //for displaying the result of BMI and weight condition into the DOM.                 

    if(document.getElementById("weight-unit").value == "lb"){
        weight = form.elements["weight"].value * 0.453592;              //gives the value of weight in kg for BMI calculaiton
    }
    else{
        weight = form.elements["weight"].value;
    }

    if(document.getElementById("height-unit").value == "in."){
        height = form.elements["height"].value * 2.54 / 100;            //gives the value of height in m for BMI calculaiton.
    }
    else{
        height = form.elements["height"].value / 100;
    }

    BMIValue = weight / Math.pow(height, 2);
    BMIValue = BMIValue.toFixed(1);
    BMIValueDisplay.children[0].innerHTML = BMIValue;

    if(BMIValue >= 30){
        BMIValueDisplay.children[1].innerHTML = "obese";
    }
    else if(BMIValue >= 25 && BMIValue < 30){
        BMIValueDisplay.children[1].innerHTML = "Overweight";
    }
    else if(BMIValue >= 18.5 && BMIValue < 25){
        BMIValueDisplay.children[1].innerHTML = "Healthy weight";
    }
    else{
        BMIValueDisplay.children[1].innerHTML = "Underweight";
    }

    form.reset();
}

/* The segment below is for displaying the visibility of the options selected on the services page*/

const allInOne = document.getElementById("offer-checkbox");                                 //selected the allInOne offer checkbox
const container5 = document.getElementsByClassName("bill-service");                         //selected whole bottom container.
const amountLine = document.getElementById("amount-footer");                                //selected the amount line
const listbox = document.getElementById("services-options");                                //selected all the options from the listbox
const proceedButton = document.getElementById("proceed-button");                            //selected the proceed button
const personalTrainingSection = document.getElementById("personalTraining");
const dieticianSection = document.getElementById("dietician");
const supplimentsPackageSection = document.getElementById("supplimentsPackage");
const yogaSessionsSection = document.getElementById("yogaSessions");
const zumbaAerobicsSection = document.getElementById("zumbaAerobics");

allInOne.addEventListener("click", () => {
    if(allInOne.checked){
        for(let containers of container5){
            console.log(containers);
            containers.classList.add("bill-service-flex");
        }
        amountLine.style.display = "block";
        listbox.disabled = true;
        proceedButton.disabled = true;

        document.getElementById("total-amount").innerHTML = "<del>$305</del> $280";
    }
    else{
        for(let containers of container5){
            containers.classList.remove("bill-service-flex");
        }
        amountLine.style.display = "none";
        listbox.disabled = false;
        proceedButton.disabled = false;
        
    }
    
})

proceedButton.addEventListener("click", (e) => {
    e.preventDefault();
    let totalCost = 0;
    const servicePrices = {
        "Personal training": 100,
        "Dietician": 60,
        "Suppliments package": 75,
        "Yoga sessions": 30,
        "Zumba Aerobics": 40
    }

    for(let containers of container5){
        containers.classList.remove("bill-service-flex");
    }
    amountLine.style.display = "none";

    for(let selectedOption of listbox.selectedOptions){
        const key = selectedOption.value;
        const price = servicePrices[key];
        totalCost += price;
        document.getElementById("total-amount").innerText = "$" + totalCost;
        amountLine.style.display = "block";
        switch (key) {
            case "Personal training":
                personalTrainingSection.classList.add("bill-service-flex");
                break;
             
            case "Dietician":
                dieticianSection.classList.add("bill-service-flex");
                break;
            
            case "Suppliments package":
                supplimentsPackageSection.classList.add("bill-service-flex");
                break;

            case "Yoga sessions":
                yogaSessionsSection.classList.add("bill-service-flex");
                break;

            case "Zumba Aerobics":
                zumbaAerobicsSection.classList.add("bill-service-flex");
                break;
        
            default:
                break;
        }      
    };
    

    e.target.form.reset();

})



