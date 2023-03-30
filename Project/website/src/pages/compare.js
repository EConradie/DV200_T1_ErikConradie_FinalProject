import react from 'react';
import { useState, useEffect } from "react";
import axios from "axios"
import '../App.css';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';


function Compare() {

    const [apiData, setApiData] = useState([]);
    const [teamName, setTeamName] = useState(['']);
    const [teamPoints, setTeamPoints] = useState(['']);
    const [driverName, setDriverName] = useState('');
    const [driverTeam, setDriverTeam] = useState('');
    const [driverPoints, setDriverPoints] = useState(['']);



    useEffect(() => {

        axios.get('https://api-formula-1.p.rapidapi.com/rankings/teams', {
            headers: {
                'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

                //'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
            }, params: { season: '2021' }
        }).then((response) => {
            const index = 0;
            setApiData(response.data)
            setTeamName(response.data.response[index].team.name)

            for (let i = 0; i > 5; i++) {
            }

            setTeamPoints(response.data.response[index].points)

        }).catch((error) => {
            console.log(error);
        })

        axios.get('https://api-formula-1.p.rapidapi.com/rankings/drivers', {
            headers: {
                'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

                //'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
            }, params: { season: '2021' }
        }).then((response) => {
            const index = 0;
            setApiData(response.data)
            setDriverName(response.data.response[index].driver.name)
            setDriverPoints(response.data.response[index].points)
            setDriverTeam(response.data.response[index].team.name)

        }).catch((error) => {
            console.log(error);
        })
    }, [])


    const style = {
        margin: "auto",
        padding: "5% 10% 10% 10%",
        color: "white",
        height: "2400px"
    }

    return (
      <p>Hy</p>

    )

}

export default Compare;