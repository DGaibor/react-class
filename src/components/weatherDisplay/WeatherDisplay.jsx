import {useState} from "react";

export const WeatherDisplay = (props) => {
    
    const [weather, setWeather] = useState('sunny');
    
    const handleWeatherChange = (event) => {
        setWeather(event.target.value)
    }
    return (
        <div>
            <select onChange={(e)=>handleWeatherChange(e)}>
                <option>sunny</option>
                <option>raining</option>
                <option>snowing</option>
            </select>

            {weather==='sunny' && <p>It's sunny outside!</p>}
            {weather==='raining' && <p>Bring an umbrella, it's raining!</p>}
            {weather==='snowing' && <p>It's snowing outside! Bundle up!</p>}
        </div>
    )
}
