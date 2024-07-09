import { formatTemperature } from "../../helpers";
import { Weather } from "../../hooks/useWeather";

type WeatherDetailProps = {
    weather: Weather
}

export default function WeatherDetail({weather} : WeatherDetailProps) {
    return (
        <div>
            <h2>Clima en {weather.name}</h2>
            <p>{formatTemperature(weather.main.temp)}&deg;C</p>
            <div>
                <p>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span></p>
                <p>Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span></p>
            </div>
        </div>
    )
}
