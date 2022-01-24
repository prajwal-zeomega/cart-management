let products: { name: string; price: number; }[] = [];

let size = 0;
var formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
  });
  
function addrealme(){
    let item = {name:'realme', price:8000}
    products.push(item);
    localStorage.setItem("items", JSON.stringify(products));
    updateCart();
}

function addredmi(){
    let item = {name:'redmi', price:9000}
    products.push(item);
    localStorage.setItem("items", JSON.stringify(products));
    updateCart();
}

function addsamsung(){
    let item = {name:'samsung', price:15000}
    products.push(item);
    localStorage.setItem("items", JSON.stringify(products));
    updateCart();   
}

function addoppo(){
    let item = {name:'oppo', price:20000}
    products.push(item);
    localStorage.setItem("items", JSON.stringify(products));
    updateCart();
}


function updateCart(){
    let size = JSON.parse(localStorage.getItem("items")).length;
    let size_DOM = document.getElementById("size")
    size_DOM.innerText = `${size}`;
}


function display(){
    let sum:number = 0;

    let rows = JSON.parse(localStorage.getItem("items"));    
    let table = document.getElementById("table_display");

    for(let i = 0; i < rows.length; i++){
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML= rows[i].name;
    cell2.innerHTML= formatter.format(rows[i].price);
    sum+=rows[i].price;
    }

    let display = document.getElementById('total')
    display.innerText = `Total Price: ${formatter.format(sum)}`;
}