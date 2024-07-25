const base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const ddowns = document.querySelectorAll(".dropdown select");

for(let select of ddowns){
    for(currcode in countryList){
        let newopt = document.createElement("option");
        newopt.innerText=currcode;
        newopt.value=currcode;
        select.append(newopt);

        if(select.name ==="From" && currcode === "USD"){
            newopt.selected = "selected";
        }
        if(select.name ==="To" && currcode === "INR"){
            newopt.selected = "selected";
        }

    }
    select.addEventListener("change",(evt)=>{
        flag(evt.target);
    })
}

const flag =() =>{
    


}

