import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

function Search({insertData}){
       let[city,setCity] = useState("");
       let [error,setError] = useState(false);
       function handlerChange(event){
         setCity(event.target.value);
       }
       let GetWheatherData = async()=>{
          try{
            let API_URL = "https://api.openweathermap.org/data/2.5/weather"
            let API_KEY = "4ea3089f21b190200aea801a34a0a560"
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JsonResponse = await response.json();
            let result = {
               city:city,
               temp : JsonResponse.main.temp,
               tempMin:JsonResponse.main.temp_min,
               tempMax:JsonResponse.main.temp_max,
               humidity : JsonResponse.main.humidity,
               feelsLike : JsonResponse.main.feels_like,
               weather: JsonResponse.weather[0].description,
            }
           console.log(result);
           return result;
           }catch(err){
               throw err;
          }
       }
      async function handlerSubmit(event){
            try{
              event.preventDefault();
              setCity("");
              let result  = await GetWheatherData();
              return insertData(result);
            }catch(err){
                setError(true);
            }
       } 
    return(
        <div>
          
            <form onSubmit={handlerSubmit}>
                 <TextField  id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handlerChange} required/>
                 <br /><br />
                <Button style={{marginBottom:"10px"}} variant="contained" endIcon={<SendIcon />} type='submit'>Search</Button>
            </form>
            {error?<p style={{color:"red"}}>No such place exist</p>:""}
        </div>
    )
}
export default Search;