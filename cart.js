var products = [];
var size = 0;
var formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal'
});
function addrealme() {
    var item = { name: 'realme', price: 8000 };
    products.push(item);
    localStorage.setItem("items", JSON.stringify(products));
    updateCart();
}
function addredmi() {
    var item = { name: 'redmi', price: 9000 };
    products.push(item);
    localStorage.setItem("items", JSON.stringify(products));
    updateCart();
}
function addsamsung() {
    var item = { name: 'samsung', price: 15000 };
    products.push(item);
    localStorage.setItem("items", JSON.stringify(products));
    updateCart();
}
function addoppo() {
    var item = { name: 'oppo', price: 20000 };
    products.push(item);
    localStorage.setItem("items", JSON.stringify(products));
    updateCart();
}
function updateCart() {
    var size = JSON.parse(localStorage.getItem("items")).length;
    var size_DOM = document.getElementById("size");
    size_DOM.innerText = "".concat(size);
}
function display() {
    var sum = 0;
    var rows = JSON.parse(localStorage.getItem("items"));
    var table = document.getElementById("table_display");
    for (var i = 0; i < rows.length; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = rows[i].name;
        cell2.innerHTML = formatter.format(rows[i].price);
        sum += rows[i].price;
    }
    var display = document.getElementById('total');
    display.innerText = "Total Price: ".concat(formatter.format(sum));
}
