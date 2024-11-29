const maindisplay = document.getElementById("Maindisplay")
const jebotski  = document.querySelectorAll(".HeaderA")

const modalss = document.querySelector('.openmodal')
const huvudmodals = document.querySelector('.huvudmodals')

const modalsss = document.querySelector('.opnkal')
const huvudmodalss = document.querySelector('.dw')


const modalone = document.querySelector('.h3mod')
const huvudmodaltwo= document.querySelector('.h3body')



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






  
modalsss.addEventListener('click',()=>{

    huvudmodalss.showModal();


})




window.addEventListener('click', (event) => {
    if (event.target === huvudmodalss) {
     huvudmodalss.close();
    }
  });



  modalone.addEventListener('click',()=>{

    huvudmodaltwo.showModal();


})




window.addEventListener('click', (event) => {
    if (event.target === huvudmodaltwo) {
        huvudmodaltwo.close();
    }
  });