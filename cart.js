// console.log('cart box clicked');
let total = 0;

function cardItem(target){
    const selectedItemContainer = document.getElementById('selected-items')
    const itemName = target.childNodes[5].innerText;
    
    const count = selectedItemContainer.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${itemName}`;

    selectedItemContainer.appendChild(p);
    const price = target.childNodes[7].innerText.split(' ');
    total = parseFloat(total) + parseFloat(price);
    const totalPriceTwoDecimal = total.toFixed(2);
    document.getElementById("total").innerText = totalPriceTwoDecimal;
    
} 


function calculateTotalPrice(){
        const totalPrice = document.getElementById('total').innerText;
        
        if(totalPrice >= 200){
            document.getElementById('btn-apply').removeAttribute('disabled');
            alert('apply coupon code to get 20% off');
        }else if(totalPrice < 200 || totalPrice > 0){
            document.getElementById('btn-apply').disabled = true;
            alert('Please purchase tk 200 or above & get 20% off');
        }
        
        if(totalPrice > 0){
            document.getElementById('make-purchase').removeAttribute('disabled');
        }else{
            document.getElementById('make-purchase').disabled = true;
        }
}


function btnEnable(){
    const input = document.getElementById('coupon-code').value;
    console.log(input);
    const totalPrice = document.getElementById('total').innerText;
    
    const discount = totalPrice * 20 / 100;
    const discountTwoDecimal = discount.toFixed(2);
    
    const netTotal = totalPrice - discount;
    const netTotalTwoDecimal = netTotal.toFixed(2);

    if(input === ""){
        alert('input coupon code "SELL200" ');
    }else{
        if(input === 'SELL200'){
            document.getElementById('discount').innerText = discountTwoDecimal;
            document.getElementById('netTotal').innerText = netTotalTwoDecimal;
        }
        else{
            document.getElementById('discount').innerText = 0.00;
            document.getElementById('netTotal').innerText = 0.00;
        }
    }
}

function clearPage(){
    document.getElementById('billPaid').reset();
}