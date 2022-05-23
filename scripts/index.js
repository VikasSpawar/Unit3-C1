//store the products array in localstorage as "products"
var form=document.querySelector("#products")
document.querySelector("form").addEventListener("submit",adding)
var products=JSON.parse(localStorage.getItem("products"))||[]
function adding(){
    event.preventDefault();
    var type=form.type.value;
    var desc=form.desc.value;
    var price=form.price.value;
    var image=form.image.value;
    var p = new pro(type,desc,price,image)
    products.push(p)
localStorage.setItem("products",JSON.stringify(products))
window.location.reload(" ")
}


function pro(t,d,p,i){
    this.type=t
    this.desc=d
    this.price=p
    this.image=i
    return this
}
