import react from 'react';
import { useState, useEffect } from "react";
import axios from "axios"
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

                'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
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

                'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
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
        color: "white"
    }

    return (

        <div style={style}>

            <div style={{ "font-size": "80px", paddingBottom: '0%' }}>
                Stats
            </div>

            <div style={{ "font-size": "80px", paddingTop: '0%' }}>
                Formula
            </div>

            <div style={{ "font-size": "36px", "font-weight": "100", paddingRight: '35%', paddingBottom: '7%' }}>
                2021 FORMULA 1 STATISTICS
            </div>
            <br />

            <div style={{ float: 'left', overflow: 'hidden', width: '50%' }}>
                <h2 style={{ paddingLeft: '0%', fontWeight: 'bold' }}>TEAM STANDINGS</h2>
                <Table variant='dark' hover style={{ margin: '5%', color: 'white', marginLeft: '0%' }}>
                    <thead style={{ color: '#C01F1F' }} >
                        <tr>
                            <th></th>
                            <th>Team</th>
                            <th></th>
                            <th>Points</th>
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

            <div style={{ float: 'left', overflow: 'hidden', width: '50%' }}>
                <h2 style={{ paddingLeft: '5%', fontWeight: 'bold' }}>DRIVER STANDINGS</h2>
                <Table variant='dark' hover style={{ margin: '5%', color: 'white' }}>
                    <thead style={{ color: '#C01F1F' }}>
                        <tr>
                            <th></th>
                            <th>Driver</th>
                            <th>Team</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{driverName}</td>
                            <td>{driverTeam}</td>
                            <td>{driverPoints}</td>
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
            <div style={{ marginTop: '3%', marginBottom: '50%', color: 'white' }} >
                <Card style={{ width: '25%', margin: '0%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#111111', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ backgroundColor: '#212529' }} >RACE GP</Card.Header>
                        <Card.Title ></Card.Title>
                        <Card.Text as='h4' style={{ backgroundColor: '#111111', marginTop: '10%' }}>
                            Location<br></br>
                            Date <br></br>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25%', margin: '0%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#111111', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ backgroundColor: '#212529' }} >RACE GP</Card.Header>
                        <Card.Title ></Card.Title>
                        <Card.Text as='h4' style={{ backgroundColor: '#111111', marginTop: '10%' }}>
                            Location<br></br>
                            Date <br></br>
                        </Card.Text>
                    </Card.Body>
                </Card><Card style={{ width: '25%', margin: '0%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#111111', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ backgroundColor: '#212529' }} >RACE GP</Card.Header>
                        <Card.Title ></Card.Title>
                        <Card.Text as='h4' style={{ backgroundColor: '#111111', marginTop: '10%' }}>
                            Location<br></br>
                            Date <br></br>
                        </Card.Text>
                    </Card.Body>
                </Card><Card style={{ width: '25%', margin: '0%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                    <Card.Body style={{ backgroundColor: '#111111', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ backgroundColor: '#212529' }} >RACE GP</Card.Header>
                        <Card.Title ></Card.Title>
                        <Card.Text as='h4' style={{ backgroundColor: '#111111', marginTop: '10%' }}>
                            Location<br></br>
                            Date <br></br>
                        </Card.Text>
                    </Card.Body>
                </Card>


                {/* <Card style={{ width: '25%', margin: '0%', float: 'left' }}>
                <Card.Img variant="top" src={missionPatch} style={{ width: '20%', marginLeft: '40%' }} />
                <Card.Body>
                    <Card.Title>{missionName}</Card.Title>
                    <Card.Text>
                        Launch Year: {launchYear} <br></br>
                        Launch Success: {launchSuccess} <br></br>
                    </Card.Text>
                </Card.Body>
            </Card> */}


            </div>




        </div>




    )

}

export default Landing;