import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [location, setLocation] = useState([]);
  const [weather, setWeather] = useState({});
  const [isLoaded, setIsLoaded] = useState(0);

  useEffect(() => {
    getLoc();
  }, []);

  useEffect(() => {
    getWeather();
  }, [location]);

  const getLoc = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  };

  const getWeather = async () => {
    try {
      const dataRaw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=89546427df56749cd86d553cce3bae53&units=metric`
      );
      const data = await dataRaw.json();
      setWeather(data);
      if (data.cod == 200) setIsLoaded(1);
      else setIsLoaded(0);
    } catch {
      console.log("Error getting weather data");
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" color="initial">
          Condition: {isLoaded ? weather.weather[0].description : "Loading"}
        </Typography>
        <Typography variant="h3">
          Temp: {isLoaded ? weather.main.temp : "Loading"}°C
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
