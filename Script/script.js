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
        const selectseatcontainer = document.getElementById('select-seat-number-container');
        const li = document.createElement('li');
        const p = document.createElement('p'); 
        p.innerText =seatNumber;
        li.appendChild(p); 
        selectseatcontainer.appendChild(li); 
 
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