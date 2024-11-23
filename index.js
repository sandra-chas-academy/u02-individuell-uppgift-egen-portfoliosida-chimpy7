const jeboteski = document.querySelectorAll(".headski")
const timski = document.querySelectorAll(".workst")
const infoski = document.querySelectorAll(".infos")
const headschool = document.querySelectorAll(".headskit")
const tidschool = document.querySelectorAll(".schoolt")
const infoschool = document.querySelectorAll(".schooli")



async function worksi() {
    try {
        const response =  await fetch("./work.json") 
        if(!response.ok){
            throw Error("something wernt wrong")
            
        }
        const data  = response.json()
        
        return data  
    } 
    
    catch (error) {
        
    }
    
}
worksi()


async function rename() {
    const data = await worksi();
  

    jeboteski.forEach((jobski, index) => {

    jobski.innerHTML = data.work[0][`work${index+1}`].job
 
});

timski.forEach((tids,index) =>{

 
    tids.innerHTML = data.work[0][`work${index+1}`].tid



})
infoski.forEach((infoski,index) =>{

        infoski.innerHTML = data.work[0][`work${[index+1]}`].förklaring
        

})

headschool.forEach((schoolhski,index)=>{

   schoolhski.innerHTML = data.school[0][`school${index+1}`].skola


})


tidschool.forEach((sctid,index) =>{

        sctid.innerHTML = data.school[0][`school${index+1}`].tid
  

})



infoschool.forEach((scinfo,index) =>{

        scinfo.innerHTML = data.school[0][`school${index+1}`].explain
    

})


}
rename() 