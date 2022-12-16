import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function App() {
  const [City, setCity] = useState("");
  const [temp, settemp] = useState("");
  const [cityname, setcityname] = useState("Your city");
  const [main,setmain] = useState("Weather")
  const [desc, setdesc] = useState("")
  const [url, seturl] = useState("http://openweathermap.org/img/w/01n.png");
  async function api() {
    console.log(City);

    await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        City +
        "&appid=75604dabe1d443f2296dedb386f124a4"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      var tempValue = data['main']['temp'];
      
      var cloudValue = data['clouds']['all'];
      var celsius = (tempValue - 273.15);
      celsius = Math.round(celsius * 100) / 100;
      
      
      setcityname(data['name'])
      settemp(celsius + "°C")
      setdesc(data['weather'][0]['description']);
      setmain(data['weather'][0]['main']);
      seturl("http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png"); 
      });

    setCity("");
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }
  return (
    <div className="App">
      <h2>Live Weather App</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Ex: Indore"
          variant="outlined"
          value={City}
          onChange={handleCityChange}
        />
      </Box>

      <Button variant="contained" onClick={api} props={City}>
        check
      </Button>

      <Card sx={{ maxWidth: 345 , margin: "auto"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            sx={{ margin:"auto",width: "150px"}}
            image={url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {main} in {cityname}
            </Typography>
            <Typography variant="body2" color="text.secondary" id="degree">{temp}</Typography>
            <Typography variant="body2" color="text.secondary" id="desc">{desc}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default App;
