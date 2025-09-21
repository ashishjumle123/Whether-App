import Search from './searchbox'
import Infobox from './infobox'
import { useState } from 'react';

function WheatherApp(){
    let [weatherData,setWeatherData] = useState({
        city :"Nagpur",
        feelsLike: 23.23,
        humidity: 94,
        temp: 22.47,
        tempMax: 22.47,
        tempMin: 22.47,        
        weather: "overcast clouds"
    })
    
    function insertData(newData){
        setWeatherData(newData);
    }

    return(
       <>
       <h1 style={{color:"black"}}>Wheather App</h1>
        <Search insertData={insertData}/>
       <Infobox info={weatherData}/>
       </>
    )
}
export default WheatherApp;