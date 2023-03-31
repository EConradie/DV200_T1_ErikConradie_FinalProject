import react from 'react';
import { useState, useEffect } from "react";
import axios from "axios"
import '../App.css';

function Compare() {

    const [apiData, setApiData] = useState([]);
    const [driverName, setDriverName] = useState('');
    const [driverAbbr, setDriverAbbr] = useState('');
    const [driverNat, setDriverNat] = useState('');
    const [driverNum, setDriverNum] = useState('');
    const [driverPoints, setDriverPoints] = useState(['']);
    const [driverTeam, setDriverTeam] = useState('');
    const [driverPod, setDriverPod] = useState(['']);
    const [driverPrix, setDriverPrix] = useState(['']);
    const [driverChamps, setDriverChamps] = useState(['']);

    var DriversArray = [];

    useEffect(() => {

        axios.get('https://api-formula-1.p.rapidapi.com/drivers', {
            headers: {
                'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

                'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
            }, params: { id: '20' }
        }).then((response) => {

            // for (let k = 0; k < 20; k++) {

            const index = 0;
            setApiData(response.data)
            console.log(response.data)
            setDriverName(response.data.response[index].name)
            setDriverAbbr(response.data.response[index].abbr)
            setDriverNat(response.data.response[index].nationality)
            setDriverNum(response.data.response[index].number)
            setDriverPoints(response.data.response[index].career_points)
            setDriverTeam(response.data.response[index].teams[0].team)
            setDriverPod(response.data.response[index].podiums)
            setDriverPrix(response.data.response[index].grands_prix_entered)
            setDriverChamps(response.data.response[index].world_championships)

        }).catch((error) => {
            console.log(error);
        })
    }, [])

    var tempObj = {
        name: driverName,
        abbr: driverAbbr,
        nat: driverNat,
        num: driverNum,
        points: driverPoints,
        team: driverTeam,
        pod: driverPod,
        prix: driverPrix,
        champs: driverChamps,
    }

    DriversArray.push(tempObj);

    console.log(DriversArray);


    const style = {
        margin: "auto",
        padding: "5% 10% 10% 10%",
        color: "white",
        height: "2400px"
    }

    return (
        <div style={style}>

            <div style={{ width: '100%' }}>

                <div style={{ width: '40%', height: '500px', float: 'left' }}>

                    <div style={{ width: "40%", float: 'left', textAlign: 'left', marginTop: '5%' }}>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Name</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>Lewis Hamilton</p>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>abbr</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>HAM</p>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Nationality</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>British</p>

                    </div>


                    <div style={{ width: '60%', height: '500px', float: 'right', marginTop: '5%' }}>
                        <img style={{ width: "100%", transform: 'scaleX(-1)' }} src='https://media.api-sports.io/formula-1/drivers/20.png'></img>
                    </div>

                </div>

                <div style={{ width: '20%', height: '500px', float: 'left', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '45%' }}>DRIVER COMPARISON</h1>
                    <h2 style={{ marginBottom: '45%' }}>VS</h2>
                    <h3 style={{ color: 'gray' }}>StatsFormula Approved</h3>
                </div>

                <div style={{ width: '40%', height: '500px', float: 'right' }}>

                    <div style={{ width: "40%", float: 'right', textAlign: 'right', marginTop: '5%' }}>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Name</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>Lewis Hamilton</p>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>abbr</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>HAM</p>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Nationality</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>British</p>

                    </div>


                    <div style={{ width: '60%', height: '500px', float: 'left', marginTop: '5%' }}>
                        <img style={{ width: "100%" }} src='https://media.api-sports.io/formula-1/drivers/20.png'></img>
                    </div>

                </div>

            </div>

            <div style={{ width: '49%', height: '200px', float: 'left' }}>

                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '5%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Team</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center' }}>Mercedes</p>
                </div>
                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '3%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Number</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center' }}>44</p>
                </div>
                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '3%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Points</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center' }}>4165.5</p>
                </div>




            </div>

            <div style={{ width: '49%', height: '200px', float: 'right' }}>

                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '5%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Points</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center' }}>4165.5</p>
                </div>
                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '3%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Number</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center' }}>44</p>
                </div>
                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '3%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Team</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center' }}>Mercedes</p>
                </div>

            </div>

            <div style={{ width: '45%', height: '500px', float: 'left' }}>

            </div>

            <div style={{ width: '10%', height: '500px', float: 'left' }}>
                <p style={{ fontSize: '20px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', marginTop: "20%" }}>Points</p>
                <p style={{ fontSize: '20px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', marginTop: "20%" }}>Podiums</p>
                <p style={{ fontSize: '20px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', marginTop: "20%" }}>Grand Prix's</p>
                <p style={{ fontSize: '20px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', marginTop: "20%" }}>World Champs Won</p>

            </div>

            <div style={{ width: '45%', height: '500px', float: 'right' }}>

            </div>





        </div>


    )

}

export default Compare;