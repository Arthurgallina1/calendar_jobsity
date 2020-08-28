import axios from "axios";

const getWeatherData = async (city) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6daa5ca0354aef74fdd251bd510d7e18&units=metric`
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
