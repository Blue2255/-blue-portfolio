const bill = document.getElementById('billtotal')
const tip = document.getElementById('tip')
const total = document.getElementById('bal')
 const people = document.getElementById('one')
let numpeople = Number(people.innerText)
const icons = document.getElementById('plus')
const icon = document.getElementById('minus')

function userinput(){
const tips = Number(tip.value/100)
 const bils = Number(bill.value)
 const tipamount=Number(bils * tips)
//  console.log(`the tipamount is ${tipamount}$`)
 const totala= Number(bils + tipamount) 
//  console.log(` your total is ${totala}$`)
 const perperson = totala / numpeople
//  console.log(perperson)
 total.innerHTML=`$${perperson.toFixed(2)}`

//  total.innerHTML
}
//either you use this functions and enable the onclik function in line 91 and 94 in the html file to add and subtract in the bill calculator app
//  function increasebtn(){
//  numpeople += 1
//  people.innerText=numpeople
//  userinput()

// }
// function decreasebtn(){
//   if(numpeople <=1){
//     return
//   }
//   numpeople += -1
//   people.innerText=numpeople
//   userinput()
 
// }
//.tofixed is a function  for  number to be fixed after a digit eg like 4.00
//this is another method for the bill calculator app
icons.onclick = function(){
 numpeople += +1
 people.innerText=numpeople 
 userinput()
 }

icon.onclick = function(){
  if(numpeople <=1){
  // throw(`hey you can't have more than one user`)
  // console.error(`hey you can't have more than one user`);
let h =window.alert('stop')
    //the throw function allows you to know what the user is doing with your site
    return
  
}

 numpeople += -1
 people.innerText = numpeople 
 userinput()
 }
 function blu(){
  fetch('http:port.hmtl.bal')
  .then(response=>response.json())
  .then(json=>console.log(json))
 }