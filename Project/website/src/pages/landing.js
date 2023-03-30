import react from 'react';
import { useState, useEffect } from "react";
import axios from "axios"
import '../App.css';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';


function Landing() {

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

        <div style={style}>

            <img id='hero' src='https://images5.alphacoders.com/317/thumb-1920-317664.jpg'></img>

            <div style={{ "font-size": "80px", paddingBottom: '0%', position: 'relative' }}>
                Stats
            </div>

            <div style={{ "font-size": "80px", paddingTop: '0%', position: 'relative' }}>
                Formula
            </div>

            <div style={{ "font-size": "36px", "font-weight": "100", paddingRight: '35%', paddingBottom: '7%', position: 'relative' }}>
                2021 FORMULA 1 STATISTICS
            </div>
            <br />

            <div style={{ float: 'left', overflow: 'hidden', width: '50%', position: 'relative' }}>
                <h2 style={{ paddingLeft: '0%', fontWeight: 'bold' }}>TEAM STANDINGS</h2>
                <Table variant='dark' striped hover style={{ margin: '5%', color: 'white', marginLeft: '0%', boxShadow: '10px 5px 5px black' }}>
                    <thead style={{ color: '#C01F1F' }} >
                        <tr>
                            <th style={{ backgroundColor: 'transparent', fontSize: '20px' }}>Pos</th>
                            <th style={{ backgroundColor: 'transparent', fontSize: '20px' }}>Team</th>
                            <th style={{ backgroundColor: 'transparent', fontSize: '20px' }}></th>
                            <th style={{ backgroundColor: 'transparent', fontSize: '20px' }}>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{teamName}</td>
                            <td></td>
                            <td>{teamPoints}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td colSpan={2}></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div style={{ float: 'left', overflow: 'hidden', width: '50%', position: 'relative' }}>
                <h2 style={{ paddingLeft: '5%', fontWeight: 'bold' }}>DRIVER STANDINGS</h2>
                <Table striped hover variant='dark' style={{ margin: '5%', color: 'white', boxShadow: '10px 5px 5px black' }}>
                    <thead style={{ color: '#C01F1F', background: '0' }}>
                        <tr >
                            <th style={{ backgroundColor: 'transparent', fontSize: '20px' }}>Pos</th>
                            <th style={{ backgroundColor: 'transparent', fontSize: '20px' }}>Driver</th>
                            <th style={{ backgroundColor: 'transparent', fontSize: '20px' }}>Team</th>
                            <th style={{ backgroundColor: 'transparent', fontSize: '20px' }}>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{driverName}a</td>
                            <td>{driverTeam}a</td>
                            <td>{driverPoints}a</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td colSpan={2}></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <h2 style={{ paddingTop: '10%', fontWeight: 'bold' }}>UPCOMING EVENTS</h2>
            <div style={{ marginTop: '3%', marginBottom: '7%', color: 'white' }} >

                <Card style={{ width: '23%', margin: '0%', marginRight: '2%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>Abu Dhabi Grand Prix</Card.Header>
                        <Card.Title ></Card.Title>

                        <div><img src='https://media.api-sports.io/formula-1/circuits/23.png'></img></div>
                        <Card.Text as='h4' style={{ marginTop: '10%' }}>
                        <p>Abu Dhabi</p>
                        <p>Yas Marina, Abou Dabi</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23%', margin: '0%', marginRight: '2%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>Abu Dhabi Grand Prix</Card.Header>
                        <Card.Title ></Card.Title>
                        <div><img src='https://media.api-sports.io/formula-1/circuits/23.png'></img></div>
                        <Card.Text as='h4' style={{ marginTop: '10%' }}>
                        <p>Abu Dhabi</p>
                        <p>Yas Marina, Abou Dabi</p>
                        </Card.Text>
                    </Card.Body>
                </Card><Card style={{ width: '23%', margin: '0%', marginRight: '2%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>Abu Dhabi Grand Prix</Card.Header>
                        <Card.Title ></Card.Title>
                        <div><img src='https://media.api-sports.io/formula-1/circuits/23.png'></img></div>
                        <Card.Text as='h4' style={{ marginTop: '10%' }}>
                        <p>Abu Dhabi</p>
                        <p>Yas Marina, Abou Dabi</p>
                        </Card.Text>
                    </Card.Body>
                </Card><Card style={{ width: '23%', margin: '0%', marginRight: '2%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>Abu Dhabi Grand Prix</Card.Header>
                        <Card.Title ></Card.Title>
                        <div><img src='https://media.api-sports.io/formula-1/circuits/23.png'></img></div>
                        <Card.Text as='h4' style={{ marginTop: '10%' }}>
                        <p>Abu Dhabi</p>
                        <p>Yas Marina, Abou Dabi</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ float: 'left', overflow: 'hidden', width: '50%', position: 'relative', marginTop: '4%', marginBottom: '10%' }}>
                <h2 style={{ paddingBottom: '5%', fontWeight: 'bold' }}>TOP TEAM DASHBOARD</h2>

                <Card style={{ width: '96%', margin: '0%', marginRight: '2%', float: 'left', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '5%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>Red Bull Racing</Card.Header>
                        <Card.Title ></Card.Title>
                        <Card.Text></Card.Text>

                        <div style={{ backgroundColor: '#121212', width: "50%", float: 'left', borderRadius: '10px', marginBottom: '5%' }}>
                            <img style={{width:"100%"}} src='https://media.api-sports.io/formula-1/teams/1.png'></img>
                        </div>
                        <div style={{ width: "50%", float: 'right', textAlign: 'center' }}>
                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>World Championships Won</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>4</p>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Pole Position</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>73</p>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Fastest Lap</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>76</p>
                        </div>

                        <div style={{width: "60%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Based</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>Milton Keynes, United Kingdom</p>

                        </div>

                        <div style={{width: "40%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>President</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>Dietrich Mateschitz</p>

                        </div>

                        <div style={{width: "60%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Director</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>Christian Horner</p>

                        </div>

                        <div style={{width: "40%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Technical Manager</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>Pierre Waché</p>

                        </div>


                    </Card.Body>
                </Card>
            </div>

            <div style={{ float: 'left', overflow: 'hidden', width: '50%', position: 'relative', marginTop: '4%', marginBottom: '10%' }}>
                <h2 style={{ paddingBottom: '5%', fontWeight: 'bold' }}>TOP DRIVER DASHBOARD</h2>

                <Card style={{ width: '96%', margin: '0%', marginRight: '2%', float: 'left', backgroundColor: 'transparent' }}>
                <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '5%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>Lewis Hamilton</Card.Header>
                        <Card.Title ></Card.Title>
                        <Card.Text></Card.Text>

                        <div style={{ backgroundColor: '#121212', width: "50%", float: 'left', borderRadius: '10px', marginBottom: '5%' }}>
                            <img style={{width:"100%"}} src='https://media.api-sports.io/formula-1/drivers/20.png'></img>
                        </div>
                        <div style={{ width: "50%", float: 'right', textAlign: 'center' }}>
                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Team</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>Mercedes-AMG Petronas</p>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>World Championships Won</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>7</p>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Grands Prix Entered</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>288</p>

                        </div>

                        <div style={{width: "60%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Nationality</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>British</p>

                        </div>

                        <div style={{width: "40%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Birthdate</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>1985-01-07</p>

                        </div>

                        <div style={{width: "60%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Podiums</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>182</p>

                        </div>

                        <div style={{width: "40%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Number</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>44</p>

                        </div>


                    </Card.Body>
                </Card>
            </div>




        </div>




    )

}

export default Landing;