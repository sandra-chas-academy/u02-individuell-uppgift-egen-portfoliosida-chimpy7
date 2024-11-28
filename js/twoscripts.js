const maindisplay = document.getElementById("Maindisplay")
const jebotski  = document.querySelectorAll(".HeaderA")






maindisplay.addEventListener('click',function(){
    jebotski.forEach(element => {
        element.classList.toggle('highlight');

   
});


})
