import "./App.css";
import { useEffect, useState } from "react";
import APIService from "./Service/ApiService";
import Weather from "./component/Weather";

const gujaratCities = [
  "Rajpipla",
  "Ahmedabad",
  "Vadodara",
  "Rajkot",
  "Surat",
  "Jamnagar",
  "Bhavnagar",
  "Gandhinagar",
  "Bharuch",
  "Nadiad",
  "Anand",
];

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    let index = 0;
    const fetchDataForNextCity = async () => {
      if (index < gujaratCities.length) {
        const city = gujaratCities[index];
        const weatherData = await APIService.fetchData(city);
        setWeather(weatherData);
        setTimeout(fetchDataForNextCity, 10000);
        index++;
      }
      if (index == gujaratCities.length) {
        index = 0;
      }
    };

    fetchDataForNextCity();
  }, []);

  return <Weather data={weather} />;
}

export default App;
