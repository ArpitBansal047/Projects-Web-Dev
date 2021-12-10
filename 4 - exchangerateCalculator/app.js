const currency_one=document.getElementById('currency-one');
const currency_two=document.getElementById('currency-two');
const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two');

const rate=document.getElementById('rate');
const swap=document.getElementById('swap');

//fetch exchange and update DOM
function calculate(){
    const curren_one=currency_one.value;
    const curren_two=currency_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/f0b86a032e737429f94ddbd2/latest/${curren_one}`)
    .then(res=>res.json())
    .then(data=>{

        const rat=data.conversion_rates[curren_two];

        rate.innerText=`1 ${curren_one}=${rat} ${curren_two}`;

        amount_two.value=(amount_one.value*rat).toFixed(2);
    })
}


//Event listeners
currency_one.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
currency_two.addEventListener('change',calculate);
amount_two.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const temp=currency_one.value;
    currency_one.value=currency_two.value;
    currency_two.value=temp;
    calculate();
})

calculate();