import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  let [search, setSearch] = useState("");
  let [weatherData, setWeatherData] = useState({});
  let [loading, setLoading] = useState(false);

  let handleInput = (e) => {
    setSearch(e.target.value);
  };
  let handleSearch = () => {
    if (search) {
      setLoading(true);
      fetch("/weather?address=" + search).then((response) => {
        setLoading(false);
        response.json().then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setWeatherData(data);
          }
        });
      });
    }
  };
  return (
    <div className="App">
      <Header />
      <Main
        handleInput={handleInput}
        handleSearch={handleSearch}
        search={search}
        weatherData={weatherData}
        loading={loading}
      />
      <Footer />
    </div>
  );
}

export default App;
