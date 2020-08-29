import axios from "axios";
import { API_KEY } from "../keys";

const getWeatherData = async (city) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const weather = {
            main: response.data.weather[0].main,
            temp: response.data.main.temp,
        };
        return weather;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export { getWeatherData };
