'use strict';

let colors =[{
    name: "Μαύρο",
    src: "Images/BJSmart Black.png"
},
{
    name: "Κόκκινο",
    src: "Images/BJSmart Red.png"
},
{
    name: "Πράσινο",
    src: "Images/BJSmart Green.png"
},
{
    name: "Μόβ",
    src: "Images/BJSmart Purple.png"
}]

let phoneImage = document.getElementById("phone-image");
let i = 0;

let buyButton = document.getElementById("buy-button");

/*EVENT LISTENERS*/
phoneImage.addEventListener('click', function(){
    if(i>=0 && i<3)
        i++;
    else
        i = 0;

    document.getElementById("phone-image").src = colors[i].src;
    document.getElementById("color-text").textContent = colors[i].name;
    
});

buyButton.addEventListener('click', function(){
    localStorage.setItem('phone-color', colors[i].src);
    window.location = "project-BJSmart-page2.html";
});