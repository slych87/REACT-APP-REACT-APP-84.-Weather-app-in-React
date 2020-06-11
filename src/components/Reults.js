import React from 'react';
const Result = (props) => {
    const { date, city, sunrise, sunset, temp, pressure, wind, err } = props.weather
    return (
        <React.Fragment>
            <div>Pogoda dla: {city}</div>
            <div>temperatura: {temp}</div>
        </React.Fragment>
    );
}

export default Result;