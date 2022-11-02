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

/* The whole segment below is for displaying the visibility of the options selected on the services page*/

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
