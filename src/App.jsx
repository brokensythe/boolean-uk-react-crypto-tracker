// - Use this template => https://codesandbox.io/s/crypto-tracker-starter-template-edtw5
// - Make sure you check the existing code, ex. components, props, etc
// - You will find a file called constants.js with all the URLs for your fetches. You just need to import them where needed
// - Make sure to check what are the responses from these fetches
// - Display the Side List with each one of the coins
//     - You will have to use a fetch to the CRIPTO_LIST URL
//     - Use the SideListItem component to display each individual item
//     - When you click on a coin, you should display its info in the Main Section
// - Display the Main Section
//     - You should display here the info of the selected coin from the Side List
// - Display the News Section
//     - You will have to use a fetch to the STATUS_UPDATES URL
//     - Use the NewsCard to display each news item
// - Finish the Main Section
//     - Display the time that has passed since the coin data was updated on the server
//     - To achieve this, use the last_updated key from each Coin Item object together with a setInterval

import { useEffect, useState } from "react";

import MainDetail from "./components/MainDetail";
import SideListItem from "./components/SideListItem";
import { CRIPTO_LIST } from "./constants";

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null);
  const [cryptocurrencies, setCryptocurrencies] = useState([])

  useEffect(function(){
    fetch(CRIPTO_LIST)
    .then(resp=>resp.json())
    .then(currencyInfo=>setCryptocurrencies([...currencyInfo]))
  },[])

  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id;
  }

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        <ul>
        {cryptocurrencies.map(currencies=><SideListItem item={currencies} isSelectedCripto={isSelectedCripto} selectCripto={setSelectedCripto}/>)}
        </ul>
      </aside>
      <main className="main-detail">
        {selectedCripto
          ? "Create the main detail component here"
          : "Select a coin bro!"}
        {/* News feed component needs to go here */}
      </main>
    </>
  );
}

export default App;
