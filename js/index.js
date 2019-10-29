function deleteItem(event, index){
  var productsWrapper = document.getElementsByClassName('product');
  var products = [...productsWrapper];
  products[index].parentNode.removeChild(products[index])
}

function getPriceByProduct(itemNode){
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var productsWrapper = document.getElementsByClassName('product');
  var products = [...productsWrapper];
  //console.log(products[0])
  var productsPrices = [];
  var productsQuantities = [];
  var totPricesArr = [];

  products.forEach( function() {
    var pricesSpans = document.getElementsByClassName('cost');
    var prices = [...pricesSpans];

    prices.forEach( function(price, i) {
      productsPrices[i] = price.innerHTML.slice(1);
    });
    console.log(productsPrices);

    var quantitySpans = document.getElementsByClassName('quantity');
    var quantities = [...quantitySpans];
    console.log(quantities);
    quantities.forEach( function(quantity, i) {
      productsQuantities[i] = quantity.value;
    });

    var totalPriceDivs = document.getElementsByClassName('product-total-price');
    var totalPriceDiv = [...totalPriceDivs];

    totalPriceDiv.forEach( function (productPrice, i) {
      var productTotPrice = (productsPrices[i] * productsQuantities[i]).toFixed(2);
      totPricesArr[i] = parseFloat(productTotPrice);
      productPrice.innerHTML = `$${productTotPrice}`;
    });
  });

  var totalPrice = totPricesArr.reduce( function(accumulator, currentPrice) {
    accumulator += currentPrice;
    return accumulator;
  }, 0);

  var totalPriceSpan = document.getElementById('total-price');
  totalPriceSpan.innerHTML = `$${parseFloat(totalPrice)}`;

  console.log(totalPrice);

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  let newProduct = document.createElement('div');
  newProduct.classList.add('product');
}

function createNewItemRow(itemName, itemUnitPrice){




}

function createNewItem(){
  let productName = document.getElementById('new-product-name');
  let productPrice= document.getElementById('new-product-price');

  createNewItemRow(productName.value,productPrice.value);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  var deleteArray = [...deleteButtons];

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  deleteArray.forEach(function(button, index){
    button.addEventListener('click', function(){
    console.log(event);
    deleteItem(event, index)
    })
  }) ;
};
