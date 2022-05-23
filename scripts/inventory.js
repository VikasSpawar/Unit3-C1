var pro=JSON.parse(localStorage.getItem("products"))||[]

pro.forEach(function(el,i){
    var card=document.createElement("div")
    // div.setAttribute("id","all_products")

    var image=document.createElement("img")
    image.src=(el.image)
    var type=document.createElement("p")
    type.innerText=el.type
    var desc=document.createElement("p")
    desc.innerText=el.desc
    var price=document.createElement("p")
    price.innerText=el.price

    var btn=document.createElement("button")
    btn.innerText="Remove"
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click" ,function(el,i){
        rem(el,i)
    })
    card.append(image,type,desc,price,btn)
    document.querySelector("#all_products").append(card)
});
function rem(el,i){
    pro.splice(i,1)
    localStorage.setItem("products",JSON.stringify(pro))
    window.location.reload()

}

