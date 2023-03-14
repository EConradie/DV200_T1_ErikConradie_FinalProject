import react from 'react';
import { useState, useEffect } from "react";
import axios from "axios"
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';


function Landing() {

    const [apiData, setApiData] = useState([]);
    const [missionName, setMissionName] = useState(['Loading']);
    const [missionPatch, setMissionPatch] = useState(['']);
    const [launchYear, setLaunchYear] = useState('')
    const [launchSuccess, setLaunchSuccess] = useState('')


    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then((response) => {
                console.log(response);
                const index = 0;
                setApiData(response.data)
                setMissionName(response.data[index].mission_name)
                setMissionPatch(response.data[index].links.mission_patch)
                setLaunchYear(response.data[index].launch_year)
                if (response.data[index].launch_success) {
                    setLaunchSuccess("Success")
                } else {
                    setLaunchSuccess("Failed")
                }
            })
            .catch((error) => {
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

            <div style={{ "font-size": "80px", paddingBottom: '0%'}}>
                Stats
            </div>

            <div style={{ "font-size": "80px", paddingTop: '0%' }}>
                Formula
            </div>

            <div style={{ "font-size": "36px", "font-weight": "100", paddingRight: '35%', paddingBottom: '7%' }}>
                This is the landing page and here's some content.
                How much wood would a woodchuck chuck if a
                woodchuck would chuck wood?
            </div>
            <br />

            <div style={{ float: 'left', overflow: 'hidden', width: '50%' }}>
                <h2 style={{ paddingLeft: '0%', fontWeight: 'bold' }}>TEAM STANDINGS</h2>
                <Table variant='dark' hover style={{ margin: '5%', color: 'white', marginLeft: '0%' }}>
                    <thead style={{ color: '#C01F1F' }} >
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
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
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <h2 style={{ paddingTop: '10%', fontWeight: 'bold' }}>UPCOMING EVENTS</h2>
            <div style={{ marginTop: '3%', marginBottom: '50%', color: 'white' }} >
            <Card style={{ width: '25%', margin: '0%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                <Card.Body style={{backgroundColor: '#111111', paddingBottom: '10%', borderRadius: '20px'}} >
                    <Card.Header as='h3' style={{backgroundColor: '#212529'}} >ABUDATBIE GP</Card.Header>
                    <Card.Title ></Card.Title>
                    <Card.Text as='h4' style={{backgroundColor: '#111111', marginTop: '10%'}}>
                        Location:<br></br>
                        Date: <br></br>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '25%', margin: '0%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                <Card.Body style={{backgroundColor: '#111111', paddingBottom: '10%', borderRadius: '20px'}} >
                    <Card.Header as='h3' style={{backgroundColor: '#212529'}} >ABUDATBIE GP</Card.Header>
                    <Card.Title ></Card.Title>
                    <Card.Text as='h4' style={{backgroundColor: '#111111', marginTop: '10%'}}>
                        Location:<br></br>
                        Date: <br></br>
                    </Card.Text>
                </Card.Body>
            </Card><Card style={{ width: '25%', margin: '0%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                <Card.Body style={{backgroundColor: '#111111', paddingBottom: '10%', borderRadius: '20px'}} >
                    <Card.Header as='h3' style={{backgroundColor: '#212529'}} >ABUDATBIE GP</Card.Header>
                    <Card.Title ></Card.Title>
                    <Card.Text as='h4' style={{backgroundColor: '#111111', marginTop: '10%'}}>
                        Location:<br></br>
                        Date: <br></br>
                    </Card.Text>
                </Card.Body>
            </Card><Card style={{ width: '25%', margin: '0%', float: 'left', textAlign: 'center', backgroundColor: 'transparent' }}>
                <Card.Body style={{backgroundColor: '#111111', paddingBottom: '10%', borderRadius: '20px'}} >
                    <Card.Header as='h3' style={{backgroundColor: '#212529'}} >ABUDATBIE GP</Card.Header>
                    <Card.Title ></Card.Title>
                    <Card.Text as='h4' style={{backgroundColor: '#111111', marginTop: '10%'}}>
                        Location:<br></br>
                        Date: <br></br>
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