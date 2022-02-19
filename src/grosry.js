let arr=[
    {
        name:"Bread",
        price: 20
    },
    {
        name:"Seafood",
        price: 30
    },
    {
        name:"Meat",
        price: 100
    },
    {
        name:"Pasta",
        price: 30
    },
    {
        name:"Rice",
        price: 40
    },
    {
        name:"Oils",
        price: 80
    },
    {
        name:"Sauces",
        price: 70
    },
    {
        name:"Soups",
        price: 10
    },
    {
        name:"Cheese",
        price: 200
    },
    {
        name:"Eggs",
        price: 90
    }

]
let tprice=0;
 
str='<ul>'
for(let i=0;i<arr.length;i++){

    str+='<li>'+arr[i].name +'------------>price : '+ arr[i].price+'</li>';

}
str+='</ul>';
document.getElementById("items").innerHTML=str;


function add(){

   let item= document.getElementById("item").value;
   let quantity=  document.getElementById("quantity").value;
   if(item==''){
    document.getElementById("alert").innerText="enter item";
    return;
   }else
   if(checkitem(item)==false){
    document.getElementById("alert").innerText="item is not present"
    return;

   }else if(quantity==''){
    document.getElementById("alert").innerText="enter quantity"
    return;

   }else{
    for(let i=0;i<arr.length;i++){
        if(arr[i].name==item){
            tprice=tprice+(arr[i].price * quantity);
        }
    }

   }
   document.getElementById("alert").innerText=tprice;
   
}

function checkitem(item){

    for(let i=0;i<arr.length;i++){
        if(arr[i].name==item){
           return true;
        }
    }
    return false;

}