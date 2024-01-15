 
const populate = async(value, currency) => {
  let myStr=""
  url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_m2J3mPRylMkaS47uU0FSjoP0GNUWo7rXXCZsiCaT&base_currency=" + currency;
  let response = await fetch(url)
  let rJson= await response.json()
  document.querySelector(".output").style.display = "block"
  
  for(let key of Object.keys(rJson["data"])){

            myStr += `<tr>
                          <th>${key}</th>
                          <th>${rJson["data"][key]["code"]}</th>
                          <th>${Math.round(rJson["data"][key]["value"]*value)}</th>
                      </tr>` 
  }
    const tablebody = document.querySelector("tbody");
    tablebody.innerHTML = myStr
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
});
