
let productSave  = true 
let productNam
let productDesc
let productPrice 
let productStock
let productView = false 
let products = []

while(productSave){
  productSave  = confirm("desea guardar u producto")
  if(productSave){
     productNam = prompt("Ingrese nombre del producto")
     productDesc = prompt("Ingrese descripcion del producto")
     productPrice = prompt("Ingrese precio del producto")
     productStock = prompt("Ingrese Stock del producto")
  
  let product = {
      productNam:productNam,
      productDesc:productDesc,
      productPrice:productPrice, 
      productStock:productStock
  }
  products.push(product)
  }

}
if(products.length){
 productView = confirm("quiere ver la lista de producto")

}
if(productView){
  for(let i=0;i<products.length;i++){
   alert(`${products[i].productNam},${products[i].productDesc},${products[i].productPrice},${products[i].productStock}` )

  }
}

