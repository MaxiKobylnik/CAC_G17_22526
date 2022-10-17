// var barrios ={
//     {barrio:"Palermo",nombreLugar:"Plaza las Heras", ubicacion:"Av. Cnel. Díaz 2500", link:"https://goo.gl/maps/PT12jfQhByDZP3NT6"},
//     {barrio:"Palermo",nombreLugar:"Jardín Botánico Carlos Thays", ubicacion:"Gral. Las Heras 4266", link:"https://goo.gl/maps/pvC6tUg2vmsC4rLi7"}
// }

// function myFunction(){
//     for(bar in barrios){
//         console.log(bar.barrio + " "+ bar.nombreLugar);
//     }
// }
var barrioVisualizado;
const barrios=[{id: 1,barrio:"Palermo",nombreLugar:"Plaza las Heras", ubicacion:"Av. Cnel. Díaz 2500", link:"https://goo.gl/maps/PT12jfQhByDZP3NT6"},
    {id: 2,barrio:"Palermo",nombreLugar:"Jardín Botánico Carlos Thays", ubicacion:"Gral. Las Heras 4266", link:"https://goo.gl/maps/pvC6tUg2vmsC4rLi7"},
]




function myFunction(){
   let barrioHtml ='<ul>';
    // document.body.innerHTML += 
barrios.map(elemento=> {
    //renderiza codigo html 
    barrioHtml +=
    `<li class="barrio_caja">
    <div >
    <p>${elemento.barrio} </p><br>

    <p>${elemento.nombreLugar}</p><br>
    <p link_id= ${elemento.id} onclick= "change_display(event)">${elemento.ubicacion}</p><br>
    <p id=${elemento.id} class="detalles_escondidos">${elemento.link}</p><br>
    </div>
    </li>    
    `
}
)
 barrioHtml += '</ul>';

 document.body.innerHTML += barrioHtml;
}

function Params(url){

    var urlParams = url.split('?')[1].split('=')[1];
console.log(urlParams);
    return urlParams;

}

function change_display(event){
    let id = event.currentTarget.attributes.link_id.nodeValue;
    if (barrioVisualizado && barrioVisualizado !== id)
    {
        document.getElementById(barrioVisualizado).classList.add("detalles_escondidos");
    }
    
    // console.log(event.currentTarget.attributes.link_id.nodeValue);
    let elemento = document.getElementById(id);
    
    elemento.classList.remove("detalles_escondidos");
    // .style.display = "block";
    barrioVisualizado = id;
    
}