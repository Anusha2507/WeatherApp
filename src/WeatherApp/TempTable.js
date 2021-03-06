import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";

export default function TempTable({ weather }) {
    console.log({ weather });
    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>City Name</TableCell>
                <TableCell>Max Temp</TableCell>
                <TableCell>Min Temp</TableCell>
                <TableCell>Pressure</TableCell>
                <TableCell>Humidity</TableCell>
                <TableCell>Speed</TableCell>
                <TableCell>Description</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
            {weather.map((row) => (
                <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell>{row.main.temp_max}°Cel</TableCell>
                    <TableCell>{row.main.temp_min}°Cel</TableCell>
                    <TableCell>{row.main.pressure}mb</TableCell>
                    <TableCell>{row.main.humidity}%</TableCell>
                    <TableCell>{row.wind.speed}km/h</TableCell>
                    <TableCell>{row.weather[0].description}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
);
}