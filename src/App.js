import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import airbnbData from "./airbnbData";
console.log(airbnbData);
function App() {
  const cards = airbnbData.map((item, i) => {
    return (
      <Card
        key={i}
        {...item}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card--box">{cards}</div>
    </div>
  );
}

export default App;
