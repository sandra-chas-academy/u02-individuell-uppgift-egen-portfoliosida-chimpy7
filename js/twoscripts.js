const maindisplay = document.getElementById("Maindisplay")
const jebotski  = document.querySelectorAll(".HeaderA")

const modalss = document.querySelector('.openmodal')
const huvudmodals = document.querySelector('.huvudmodals')



maindisplay.addEventListener('click',function(){
    jebotski.forEach(element => {
        element.classList.toggle('highlight');

   
});


})


modalss.addEventListener('click',()=>{

    huvudmodals.showModal();


})




window.addEventListener('click', (event) => {
    if (event.target === huvudmodals) {
     huvudmodals.close();
    }
  });






