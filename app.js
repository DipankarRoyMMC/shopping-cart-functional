function getProductNumber(product, price, isIncrease){
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);   
    
    if(isIncrease == true){
        productNumber = parseInt(productInput.value) + 1;
    } else if(productNumber > 0){
        productNumber = parseInt(productInput.value) - 1;
    }
    // get total balance
    productInput.value = productNumber; 
    const productBalance = document.getElementById(product + '-total');
    const totalProduct = productNumber * price;
    productBalance.innerText = totalProduct;
    // call update balance 
    updateCalculate();
}
// getValue from input Field 
function getValueIput(product){
    const getInputProduct = document.getElementById(product + '-number');
    const getProduct = parseInt(getInputProduct.value);
    return getProduct;
}
// total calcualte 
function updateCalculate(){
    const phoneTotal = getValueIput('phone') * 1219;
    const caseTotal = getValueIput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalBalance = subTotal + tax;

    // update in HTML 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-balance').innerText = totalBalance;
}


// handler add button 
document.getElementById('phone-plus').addEventListener('click', function(){
    getProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    getProductNumber('phone', 1219, false);
});
document.getElementById('case-plus').addEventListener('click', function(){
    getProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    getProductNumber('case', 59, false);
});

