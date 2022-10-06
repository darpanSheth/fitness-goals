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