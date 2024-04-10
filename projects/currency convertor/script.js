const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns= document.querySelectorAll(".dropdown select");
const btn= document.querySelector("form button");
const fromCurr= document.querySelector(".from select");
const toCurr= document.querySelector(".to select");
const msg= document.querySelector(".msg");

for(let select of dropdowns){
    for(curcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText=curcode;
        newoption.value=curcode;
        select.append(newoption);
    }
    select.addEventListener("change", (evt)=>{
        UpdateFlag(evt.target);
    });
}

const UpdateFlag=(element)=>{
    let curcode= element.value;
    let countrycode= countryList[curcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`; 
    let img= element.parentElement.querySelector("img");
    img.src= newsrc;
};
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount= document.querySelector(".amount input");
    let val= amount.value;
    if(val<1 || val==0){
        val=1; 
        amount.value="1";
    }
    const URL =`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response= await fetch(URL);
    let data= await response.json();
    let rate= data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    console.log(rate);

    let finalamount= val*rate;
    msg.innerText= `${val}${fromCurr.value} = ${finalamount}${toCurr.value}`;
});