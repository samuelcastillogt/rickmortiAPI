const URL_BASE ="https://rickandmortyapi.com/api/"
const container = document.querySelector(".container_card")
const containerDeatils = document.querySelector(".details")
const formatCard = async(item)=>{
    container.innerHTML += `<a class="card" href="#${item.id}">
    <div class="card_img">
        <img src="${item.image}" alt="">
    </div>
    <div class="card_title">
        <p>${item.name}</p>
    </div>
</a> `
}
const formatDetails = async(item)=>{
    containerDeatils.innerHTML =""
    containerDeatils.innerHTML += `<div class="details_img">
    <img src="${item.image}" alt="">
</div>
<div class="desc">
    <h2>Nomber: ${item.name}</h2>
    <h2>Genero: ${item.gender}</h2>
    <h2>Especie: ${item.species}</h2>
    <h2>Ubicacion: ${item.location.name}</h2>
    <button id="cer">Regresar</button>
</div>`
document.getElementById("cer").addEventListener("click", ()=>{
    containerDeatils.innerHTML =""
    containerDeatils.classList.add("hidden")
    window.location.hash = ""
})
}
const getAllData = async()=>{
    const response = await fetch(URL_BASE + "character")
    const data = await response.json()
    data.results.forEach((item)=> formatCard(item))
}
const getData = async(id)=>{
    const response = await fetch(URL_BASE + "character/" + id)
    const data = await response.json()
    formatDetails(data)
    containerDeatils.classList.remove("hidden")
}
document.addEventListener("DOMContentLoaded", ()=>{ 
    getAllData()
})
window.addEventListener("hashchange", ()=>{
    if(window.location.hash.replace("#", "")> 0){
      getData(window.location.hash.replace("#", ""))  
    }
    
})