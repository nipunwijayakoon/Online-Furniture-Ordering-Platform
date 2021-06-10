
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './Get.css';



function App() {
  const [Shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredShops, setFilteredShops] = useState([]);






  useEffect(() => {
    setLoading(true);
    axios
      .get("https://lankafurnituremakersapi.azurewebsites.net/api/Shops")
      .then((res) => {
        setShops(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  
  useEffect(() => {
    setFilteredShops(
      Shops.filter((Shop) =>
        Shop.shopOwnerName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, Shops]);






  if (loading) {
    return <p>Loading Shops...</p>;
  }

  return (
    <div className="App">
      <h1>BRANCH LIST</h1>
      
      <form className="data">
      <input
        type="text"
        placeholder="Your area : ( ex : GALLE )"
        onChange={(e) => setSearch(e.target.value)}
      />
      </form>





      {filteredShops.map((Shop, idx) => (
        <ShopDetail key={idx} {...Shop} />
      ))}



    </div>
  );
}



const ShopDetail = (props) => {
  const { shopOwnerName, shopName, shopEmail} = props;

  return (
    <>
      
      <p> {shopOwnerName}</p>
      <p2>Owner : {shopName} </p2>  
      <p2>Contact : {shopEmail}</p2>
      <br></br>
      <br></br>
    </>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);


export default App