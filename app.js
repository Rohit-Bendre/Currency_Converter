const base ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const drop=document.querySelectorAll(".drop select");
let exchange=document.querySelector("button");

for(select of drop){
    for(country in countryList){
        let newopt=document.createElement("option");
        newopt.innerText=country;
        newopt.value=country;
        select.append(newopt);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}



const updateflag=(element)=>{
    let country=countryList[element.value];
    let newflag=`https://flagsapi.com/${country}/flat/64.png`;
    let flag=element.parentElement.querySelector("img");
    flag.src=newflag;
}

exchange.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector("input");
    if(amount.value<1){
        amount.value=1;
    }
    let from=document.querySelector(".from select");
    let to=document.querySelector(".to select");
    let val=from.value.toLowerCase();
    let val1=to.value.toLowerCase();

    let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${val}.json`;
    let responce=await fetch(url);
    let data=await responce.json();
    let convert=data[val][val1];
    let amt=amount.value;
    result=convert*amt;
    let rate=document.querySelector(".rate");
    rate.innerText=`${amount.value} ${from.value}  =  ${result.toFixed(2)} ${to.value}`;
})