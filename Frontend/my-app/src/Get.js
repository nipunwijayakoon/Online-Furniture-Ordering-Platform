
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
      .get("https://localhost:5001/api/Shops")
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
        Shop.shopName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, Shops]);






  if (loading) {
    return <p>Loading Shops...</p>;
  }

  return (
    <div className="App">
      <h1>Shops List</h1>
      
      <form className="data">
      <input
        type="text"
        placeholder="Search a Furniture Shop..."
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
  const { shopName, shopEmail,shopTelNumber} = props;

  return (
    <>
      
      <p>----------- {shopName} -----------</p>
      <p>Email : {shopEmail}</p>
      <p>Tel :{shopTelNumber}</p>
      <br></br>
      <br></br>
    </>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);


export default App