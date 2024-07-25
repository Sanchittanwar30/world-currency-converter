const base_url="https://latest.currency-api.pages.dev/v1/currencies";

const ddowns = document.querySelectorAll(".dropdown select");
const btn= document.querySelector("form button");

const fromCurr= document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of ddowns){
    for(currcode in countryList){
        let newopt = document.createElement("option");
        newopt.innerText=currcode;
        newopt.value=currcode;
        

        if(select.name ==="from" && currcode === "USD"){
            newopt.selected = "selected";
        }
        else if(select.name ==="to" && currcode === "INR"){
            newopt.selected = "selected";
        }
        select.append(newopt);

    }
    select.addEventListener("change",(evt)=>{
        flag(evt.target);
    })
}

const flag =(element) =>{
let currcode=element.value;
let cntcode= countryList[currcode];
let newsrc= `https://flagsapi.com/${cntcode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src=newsrc;

}

const updaterate = async () =>{
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval ==="" || amtval<1){
        amtval=1;
        amount.value="1";
    }
  
   const url = `${base_url}/${fromCurr.value.toLowerCase()}.json`;
   let response = await fetch(url);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let totAmt = rate*amtval;

    msg.innerText = `${amtval} ${fromCurr.value} = ${totAmt} ${toCurr.value}`;

}

btn.addEventListener("click",  (evt)=>{
    evt.preventDefault();
    updaterate();

})

window.addEventListener("load", () => {
    updaterate();
  });
