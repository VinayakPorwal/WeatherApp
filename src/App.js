import "./App.css";
import React, { useState } from "react";
import Input from "./Input";
import ShowCard from "./Card";
import Typography from "@mui/material/Typography";

function App() {
  const [City, setCity] = useState("");
  const [temp, settemp] = useState("");
  const [cityname, setcityname] = useState("Your city");
  const [main, setmain] = useState("Weather");
  const [desc, setdesc] = useState("");
  const [url, seturl] = useState("http://openweathermap.org/img/w/01d.png");
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
        var tempValue = data["main"]["temp"];

        var celsius = tempValue - 273.15;
        celsius = Math.round(celsius * 100) / 100;

        setcityname(data["name"]);
        settemp(celsius + "°C");
        setdesc(data["weather"][0]["description"]);
        setmain(data["weather"][0]["main"]);
        seturl(
          "http://openweathermap.org/img/w/" +
            data["weather"][0]["icon"] +
            ".png"
        );
      });

    setCity("");
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function keyPress(e) {
    if (e.keyCode === 13) {
      console.log("value", e.target.value);
      api();
      e.preventDefault();
    }
  }
  return (
    <div className="App">
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          paddingTop: "50px",
          fontWeight: 700,
        }}
      >
        Live Weather App
      </Typography>

      {/* input area component */}
      <Input
        api={api}
        city={City}
        handle={handleCityChange}
        keyfunc={keyPress}
      />

      {/* Output area component */}
      <ShowCard
        url={url}
        cityname={cityname}
        main={main}
        desc={desc}
        temp={temp}
      />
    </div>
  );
}

export default App;
