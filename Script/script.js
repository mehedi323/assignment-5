// function handleOnclick(){
//      const royelPSection = document.getElementById('royel-p-section');

// }

document.getElementById('scrollButton').onclick = function() {
    document.getElementById('targetSection').scrollIntoView({
        behavior: 'smooth'
    });
};

const Ticket = document.getElementsByClassName('p-4');  
let count = 0;
let count2 = 40;

for(const tikets of Ticket){
    tikets.addEventListener('click', function(e){
        count = count + 1;
        count2 = count2 - 1;
        const seatNumber = e.target.innerText;
        
        const selectSeatPrice = document.getElementById('select-seat-price')
        const selectSeatName = document.getElementById('select-seat-name')
        const selectseatcontainer = document.getElementById('select-seat-number-container');
        const li = document.createElement('li');
        const li2 = document.createElement('li')
        const li3 =document.createElement('li');
        const p3 =document.createElement('p');
        const p = document.createElement('p'); 
        const p2 = document.createElement('p'); 
        p3.innerText = '550';   
        p.innerText =seatNumber;
        p2.innerText = 'Economi'
        li.appendChild(p);
        li2.appendChild(p2)
        li3.appendChild(p3)
        selectSeatName.appendChild(li2)
        selectSeatPrice.appendChild(li3)
        selectseatcontainer.appendChild(li); 

        const price = document.getElementById('price').innerText;
        const totalPrice = document.getElementById('total-price').innerText;

        const totalCost =  parseInt(totalPrice)
        document.getElementById('total-price').innerText = totalCost + parseInt(price)
 
        setBackgroundColor(seatNumber)
        setInnerText('seat-id' , count)
        setInnerText('40-seat', count2)
    })
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}
 

function setInnerText(id , value){
    document.getElementById(id).innerText = value;
}