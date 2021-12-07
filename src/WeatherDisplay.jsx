import React from "react";
import { Spinner } from "react-bootstrap";

class WeatherDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            weatherData: null,
            loading: true,
            icon: ''
        };
    }

    //Запрашиваем погоду выбранного города
    getWeather() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            zip +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({
                weatherData: json,
                loading: false,
                icon: "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
            });
        });
    }

    componentDidMount() {
        this.getWeather()
    }

    render() {
        const weatherData = this.state.weatherData;
        return (
            this.state.loading ?
                <Spinner animation="border" />
                : < div className='weatherDisplay' >
                    < h1 >
                        Сегодня в {weatherData.name}
                        < img src={this.state.icon} alt={weatherData.description} />
                    </h1 >
                    <ul>
                        <li>Текущая температура: {parseInt((weatherData.main.temp - 32) / 1.8)}°С</li>
                        <li>Максимальная: {parseInt((weatherData.main.temp_max - 32) / 1.8)}°С</li>
                        <li>Минимальная: {parseInt((weatherData.main.temp_min - 32) / 1.8)}°С</li>
                        <li>Скорость ветра: {weatherData.wind.speed} м/с</li>
                    </ul>
                </div >
        );
    }
}

export default WeatherDisplay