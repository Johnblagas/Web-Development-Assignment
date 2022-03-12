'use strict';

let mainPageImage = document.getElementById("main-logo");
document.getElementById("phone-image").src = localStorage.getItem('phone-color');

let editionRadios = document.getElementsByName("in1");
let OSRadios = document.getElementsByName("in2");
let extrasCheckBoxes = document.getElementsByName("in3");

let tempEdRad = parseInt(editionRadios[0].value);
let tempOSRad = parseInt(OSRadios[0].value);

let sum = tempEdRad + tempOSRad;
document.getElementById("cost-area").value = sum;


/*EVENT LISTENERS*/
editionRadios.forEach(radio => radio.addEventListener('change', function(){ 
    sum = sum - tempEdRad + parseInt(radio.value);
    tempEdRad = parseInt(radio.value);
    document.getElementById("cost-area").value = sum;} ));

OSRadios.forEach(radio => radio.addEventListener('change', function(){ 
    sum = sum - tempOSRad + parseInt(radio.value);
    tempOSRad = parseInt(radio.value);
    document.getElementById("cost-area").value = sum;} ));
 
extrasCheckBoxes.forEach(checkbox => checkbox.addEventListener('change', function(){ 
    if(checkbox.checked)
    {
        sum += parseInt(checkbox.value);
        document.getElementById("cost-area").value = sum;
    }
    else
    {
        sum -= parseInt(checkbox.value);
        document.getElementById("cost-area").value = sum; 
    }
    } ));

mainPageImage.addEventListener('click', function(){
    window.location = "index.html";
})
