const navBar = document.getElementById('nav_bar'),
      toggleBtn = document.getElementById('toggleId'),
      closeBtn = document.getElementById('closeId'),
      nav = document.querySelectorAll('.navLink');
      const mainContainer = document.getElementsByTagName('tbody')[0];

toggleBtn.addEventListener('click', ()=>{
    navBar.classList.add('showNavBar')
})      
closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('showNavBar')
}) 

function removeEachLink(){
    navBar.classList.remove('showNavBar')
}
nav.forEach(n=>n.addEventListener('click', removeEachLink))


let launchDate = new Date("Jan 1, 2028 12:00:00").getTime();
let timer = setInterval(tick, 1000)


function tick (){
let now = new Date().getTime();
let t = launchDate - now;

if (t > 0){
    // Algorith to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10){
        days  = "0" + days;
    }

// Algorith to calculate hours....
    let hrs = Math.floor((t % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    if (hrs < 10){
        hrs  = "0" + hrs;
    }
// Algorith to calculate Minutes ....
    let mins = Math.floor((t % (1000 * 60 * 60 )) / (1000 * 60));
    if (mins < 10){
        mins  = "0" + mins;
    }

// Algorithm to calculate Seconds....
   let secs = Math.floor((t % (1000 * 60)) / (1000));
   if (secs < 10){
    secs  = "0" + secs;
}

let time = `${days} Days  |   ${hrs}  Hrs   |    ${mins} Mins  |  ${secs}  Sec`;

    document.querySelector('.countdown').innerHTML = time;
}
}




const addToCartBtn = document.querySelectorAll('.addToCartBtn');


for(let i =0; i<addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener('click', addToCart)
}
function addToCart(event){
let btn = event.target;

let itemName = btn.parentElement.parentElement.children[1].children[0].innerText;
let itemPrice = btn.parentElement.parentElement.children[3].innerText;
let itemImage = btn.parentElement.parentElement.children[0].children[0].src;


let cartContainer = document.createElement('tr');
cartContainer.innerHTML = `<td>
<div class="imageInfor">
    <img src="${itemImage}" alt="Food Image">
    <div class="itemText">
        <span class="itemName">${itemName}</span>
       <small>Size: 234g</small>
        
    </div>
</div>
</td>
<td>
<input type"number" value="1">
</td>
<td>
<span class="itemPrice">${itemPrice}</span>
</td>`

mainContainer.appendChild(cartContainer); 


}


