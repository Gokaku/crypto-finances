import './App.css';
import {Header} from "./components/Header"
import Cryptotable from "./components/cryptoTable/cryptoTable.js"
import CoinGecko from "./components/poByCoinGecko.js"

function App() {
  return (
    <>
    <div className="app">
      <CoinGecko/>
      <Header/>
      <Cryptotable/>
    </div>
    </>
  );
}

export default App;
