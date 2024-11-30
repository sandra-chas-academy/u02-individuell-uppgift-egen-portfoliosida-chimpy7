
const modalsss = document.querySelector('.opnkal')
const huvudmodalss = document.querySelector('.dw')


const modalone = document.querySelector('.h3mod')
const huvudmodaltwo= document.querySelector('.h3body')

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