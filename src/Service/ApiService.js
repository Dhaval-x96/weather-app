import axios from "axios";
const APIService = {
  fetchData: async (city) => {
    try {
      console.log("fetch Data");
      const YOUR_API_KEY = "a874a960936963d75c162ee2a1cf234d";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${YOUR_API_KEY}`
      );
      const weather = {
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        city: response.data.name,
      };
      return weather;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default APIService;
