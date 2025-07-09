import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import Typography from '@mui/material/Typography';
function Infobox({info}){
      const HOT_URL = "https://wallpapers.com/images/featured/arizona-desert-pictures-5yz6gtc3394vaan6.jpg"
      const RAINY_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrbN3Ci3cw6on7bNHDKgx-u3xa1GmrcjGPQ&s"
      const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1qxoWJMtlX5rM674JuQc4sd8-hUasTEo7w&s"
    return(
       <>
          
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {
            info.humidity>80
            ?RAINY_URL
            :info.temp>15
            ?HOT_URL
            :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80
            ?<ThunderstormIcon/>
            :info.temp>15
            ?<SunnyIcon/>
            :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2"  color="text.secondary" component={"span"}>
            <p> Tempture :- {info.temp}&deg;C</p>
            <p>Humidity :- {info.humidity}</p>
            <p>Max Temp :- {info.tempMax}&deg;C</p>
            <p>Min Temp :- {info.tempMin}&deg;C</p>
            <p>The Wheather Can be Descibed as <b>{info.weather}</b> And Feel like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
       </>
    )
}
export default Infobox;