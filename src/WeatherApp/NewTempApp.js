import React, {useContext, useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../WeatherApp/TempStyle.css";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import Inputcontext from "../StoreNew/ContextApi";
import TempTable from "./TempTable";

const NewTempApp = () => {
  const ctx = useContext(Inputcontext);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(
    JSON.parse(localStorage.getItem("weather")) || []
  );

  useEffect(() => {
    const fetchApi = async () => {
        const SECRET_key = "9269a393467f3b03ffa7c497a5ee4463";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ctx.name}&appid=${SECRET_key}`;
        const response = await fetch(url);
        console.log(response)
        const res = await response.json();
        console.log(res);
        console.log(res.main);

        setCity(res.main);
        setLoading(false);

        setWeather([...weather, res]);
    };

    fetchApi();
    }, [ctx.name]);

    

    useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
    }, [weather]);

return (
    <>
    {loading ? (
        <Box sx={{ width: "100%" }}>
        <LinearProgress />
        </Box>
      ) : (
        <>
        <div className="box">
            {!city ? (
            <p className="errorMsg">No Data Found</p>
            ) : (
                <div>
                <div className="info">
                <h2 className="location">
                    <LocationOnIcon className="locationicon" />
                    {ctx.name}
                    </h2>
                    <h1 className="temp">{city.temp}°Cel</h1>
                    <h3 className="tempmin_max">
                    Min : {city.temp_min}°Cel Max : {city.temp_max}°Cel
                    </h3>
                </div>
                <div className="wave"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>
                </div>
            )}
        </div>
        {city ? <TempTable weather={weather} /> : ""}
        </>
    )}</>
);
};
export default NewTempApp;