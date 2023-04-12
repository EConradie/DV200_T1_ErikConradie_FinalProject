import react from 'react';
import { useState, useEffect } from "react";
import axios from "axios"
import '../App.css';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';


function Landing() {

    const [teamName1, setTeamName1] = useState(['']);
    const [teamPoints1, setTeamPoints1] = useState(['']);
    const [teamName2, setTeamName2] = useState(['']);
    const [teamPoints2, setTeamPoints2] = useState(['']);
    const [teamName3, setTeamName3] = useState(['']);
    const [teamPoints3, setTeamPoints3] = useState(['']);
    const [teamName4, setTeamName4] = useState(['']);
    const [teamPoints4, setTeamPoints4] = useState(['']);
    const [teamName5, setTeamName5] = useState(['']);
    const [teamPoints5, setTeamPoints5] = useState(['']);


    const [driverName1, setDriverName1] = useState('');
    const [driverTeam1, setDriverTeam1] = useState('');
    const [driverPoints1, setDriverPoints1] = useState(['']);

    const [driverName2, setDriverName2] = useState('');
    const [driverTeam2, setDriverTeam2] = useState('');
    const [driverPoints2, setDriverPoints2] = useState(['']);

    const [driverName3, setDriverName3] = useState('');
    const [driverTeam3, setDriverTeam3] = useState('');
    const [driverPoints3, setDriverPoints3] = useState(['']);

    const [driverName4, setDriverName4] = useState('');
    const [driverTeam4, setDriverTeam4] = useState('');
    const [driverPoints4, setDriverPoints4] = useState(['']);

    const [driverName5, setDriverName5] = useState('');
    const [driverTeam5, setDriverTeam5] = useState('');
    const [driverPoints5, setDriverPoints5] = useState(['']);

    const [topDName, setTopDName] = useState(['']);
    const [topDTeam, setTopDTeam] = useState(['']);
    const [topDChamps, setTopDChamps] = useState(['']);
    const [topDPrix, setTopDPrix] = useState(['']);
    const [topDNat, setTopDNat] = useState(['']);
    const [topDBirth, setTopDBirth] = useState(['']);
    const [topDPod, setTopDPod] = useState(['']);
    const [topDNum, setTopDNum] = useState(['']);
    const [topDImage, setTopDImage] = useState(['']);

    const [topTTeam, setTopTTeam] = useState(['']);
    const [topTChamps, setTopTChamps] = useState(['']);
    const [topTPole, setTopTPole] = useState(['']);
    const [topTLap, setTopTLap] = useState(['']);
    const [topTBased, setTopTBased] = useState(['']);
    const [topTPres, setTopTPres] = useState(['']);
    const [topTDir, setTopTDir] = useState(['']);
    const [topTTech, setTopTTech] = useState(['']);
    const [topTImage, setTopTImage] = useState(['']);


    useEffect(() => {

        axios.get('https://api-formula-1.p.rapidapi.com/rankings/teams', {
            headers: {
                'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

                'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
            }, params: { season: '2021' }
        }).then((response) => {

            setTeamName1(response.data.response[0].team.name)
            setTeamPoints1(response.data.response[0].points)
            setTeamName2(response.data.response[1].team.name)
            setTeamPoints2(response.data.response[1].points)
            setTeamName3(response.data.response[2].team.name)
            setTeamPoints3(response.data.response[2].points)
            setTeamName4(response.data.response[3].team.name)
            setTeamPoints4(response.data.response[3].points)
            setTeamName5(response.data.response[4].team.name)
            setTeamPoints5(response.data.response[4].points)


        }).catch((error) => {
            console.log(error);
        })

        axios.get('https://api-formula-1.p.rapidapi.com/rankings/drivers', {
            headers: {
                'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

                'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
            }, params: { season: '2021' }
        }).then((response) => {

            setDriverName1(response.data.response[0].driver.name);
            setDriverPoints1(response.data.response[0].points);
            setDriverTeam1(response.data.response[0].team.name);

            setDriverName2(response.data.response[1].driver.name);
            setDriverPoints2(response.data.response[1].points);
            setDriverTeam2(response.data.response[1].team.name);

            setDriverName3(response.data.response[2].driver.name);
            setDriverPoints3(response.data.response[2].points);
            setDriverTeam3(response.data.response[2].team.name);

            setDriverName4(response.data.response[3].driver.name);
            setDriverPoints4(response.data.response[3].points);
            setDriverTeam4(response.data.response[3].team.name);

            setDriverName5(response.data.response[4].driver.name);
            setDriverPoints5(response.data.response[4].points);
            setDriverTeam5(response.data.response[4].team.name);



        }).catch((error) => {
            console.log(error);
        })

        axios.get('https://api-formula-1.p.rapidapi.com/drivers', {
            headers: {
                'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

                'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
            }, params: { id: "25" }
        }).then((response) => {

            const index = 0;

            setTopDName(response.data.response[index].name);
            setTopDTeam(response.data.response[index].teams[0].team.name);
            setTopDChamps(response.data.response[index].world_championships);
            setTopDPrix(response.data.response[index].grands_prix_entered);
            setTopDNat(response.data.response[index].nationality);
            setTopDBirth(response.data.response[index].birthdate);
            setTopDPod(response.data.response[index].podiums);
            setTopDNum(response.data.response[index].number);
            setTopDImage(response.data.response[index].image);


        }).catch((error) => {
            console.log(error);
        })

        axios.get('https://api-formula-1.p.rapidapi.com/teams', {
            headers: {
                'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

                'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
            }, params: { id: "1" }
        }).then((response) => {

            const index = 0;

            setTopTTeam(response.data.response[index].name)
            setTopTChamps(response.data.response[index].world_championships)
            setTopTPole(response.data.response[index].pole_positions)
            setTopTLap(response.data.response[index].fastest_laps)
            setTopTBased(response.data.response[index].base)
            setTopTPres(response.data.response[index].president)
            setTopTDir(response.data.response[index].director)
            setTopTTech(response.data.response[index].technical_manager)
            setTopTImage(response.data.response[index].logo)


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
                <Table variant='dark' striped hover style={{ margin: '5%', color: 'white', marginLeft: '0%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
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
                            <td>{teamName1}</td>
                            <td></td>
                            <td>{teamPoints1}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{teamName2}</td>
                            <td></td>
                            <td>{teamPoints2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{teamName3}</td>
                            <td></td>
                            <td>{teamPoints3}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{teamName4}</td>
                            <td></td>
                            <td>{teamPoints4}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{teamName5}</td>
                            <td></td>
                            <td>{teamPoints5}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div style={{ float: 'left', overflow: 'hidden', width: '50%', position: 'relative' }}>
                <h2 style={{ paddingLeft: '5%', fontWeight: 'bold' }}>DRIVER STANDINGS</h2>
                <Table striped hover variant='dark' style={{ margin: '5%', color: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
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
                            <td>{driverName1}</td>
                            <td>{driverTeam1}</td>
                            <td>{driverPoints1}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{driverName2}</td>
                            <td>{driverTeam2}</td>
                            <td>{driverPoints2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{driverName3}</td>
                            <td>{driverTeam3}</td>
                            <td>{driverPoints3}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{driverName4}</td>
                            <td>{driverTeam4}</td>
                            <td>{driverPoints4}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{driverName5}</td>
                            <td>{driverTeam5}</td>
                            <td>{driverPoints5}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <h2 style={{ paddingTop: '10%', fontWeight: 'bold' }}>UPCOMING EVENTS</h2>
            <div style={{ marginTop: '3%', marginBottom: '7%', color: 'white' }} >

                <Card style={{ width: '23%', margin: '0%', marginRight: '2%', float: 'left', textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
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
                <Card style={{ width: '23%', margin: '0%', marginRight: '2%', float: 'left', textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>Abu Dhabi Grand Prix</Card.Header>
                        <Card.Title ></Card.Title>
                        <div><img src='https://media.api-sports.io/formula-1/circuits/23.png'></img></div>
                        <Card.Text as='h4' style={{ marginTop: '10%' }}>
                            <p>Abu Dhabi</p>
                            <p>Yas Marina, Abou Dabi</p>
                        </Card.Text>
                    </Card.Body>
                </Card><Card style={{ width: '23%', margin: '0%', marginRight: '2%', float: 'left', textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '10%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>Abu Dhabi Grand Prix</Card.Header>
                        <Card.Title ></Card.Title>
                        <div><img src='https://media.api-sports.io/formula-1/circuits/23.png'></img></div>
                        <Card.Text as='h4' style={{ marginTop: '10%' }}>
                            <p>Abu Dhabi</p>
                            <p>Yas Marina, Abou Dabi</p>
                        </Card.Text>
                    </Card.Body>
                </Card><Card style={{ width: '23%', margin: '0%', marginRight: '2%', float: 'left', textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
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

                <Card style={{ width: '96%', margin: '0%', marginRight: '2%', float: 'left', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '5%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>{topTTeam}</Card.Header>
                        <Card.Title ></Card.Title>
                        <Card.Text></Card.Text>

                        <div style={{ backgroundColor: '#121212', width: "50%", float: 'left', borderRadius: '10px', marginBottom: '5%' }}>
                            <img style={{ width: "100%" }} src={topTImage}></img>
                        </div>
                        <div style={{ width: "50%", float: 'right', textAlign: 'center' }}>
                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>World Championships Won</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>{topTChamps}</p>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Pole Position</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>{topTPole}</p>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Fastest Lap</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>{topTLap}</p>
                        </div>

                        <div style={{ width: "60%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Based</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>{topTBased}</p>

                        </div>

                        <div style={{ width: "40%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>President</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>{topTPres}</p>

                        </div>

                        <div style={{ width: "60%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Director</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>{topTDir}</p>

                        </div>

                        <div style={{ width: "40%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Technical Manager</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>{topTTech}</p>

                        </div>


                    </Card.Body>
                </Card>
            </div>

            <div style={{ float: 'left', overflow: 'hidden', width: '50%', position: 'relative', marginTop: '4%', marginBottom: '10%' }}>
                <h2 style={{ paddingBottom: '5%', fontWeight: 'bold' }}>TOP DRIVER DASHBOARD</h2>

                <Card style={{ width: '96%', margin: '0%', marginRight: '2%', float: 'left', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <Card.Body style={{ backgroundColor: '#212529', paddingBottom: '5%', borderRadius: '20px' }} >
                        <Card.Header as='h3' style={{ color: '#C01F1F' }}>{topDName}</Card.Header>
                        <Card.Title ></Card.Title>
                        <Card.Text></Card.Text>

                        <div style={{ backgroundColor: '#121212', width: "50%", float: 'left', borderRadius: '10px', marginBottom: '5%' }}>
                            <img style={{ width: "100%" }} src={topDImage}></img>
                        </div>
                        <div style={{ width: "50%", float: 'right', textAlign: 'center' }}>
                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Team</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>{topDTeam}</p>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>World Championships Won</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>{topDChamps}</p>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Grands Prix Entered</p>
                            <p style={{ fontSize: '25px', marginBottom: '5px' }}>{topDPrix}</p>

                        </div>

                        <div style={{ width: "60%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Nationality</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>{topDNat}</p>

                        </div>

                        <div style={{ width: "40%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Birthdate</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>{topDBirth}</p>

                        </div>

                        <div style={{ width: "60%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Podiums</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>{topDPod}</p>

                        </div>

                        <div style={{ width: "40%", float: 'left', borderRadius: '10px' }}>

                            <p style={{ fontSize: '15px', marginBottom: '5px', color: "#C01F1F" }}>Number</p>
                            <p style={{ fontSize: '22px', marginBottom: '5px' }}>{topDNum}</p>

                        </div>


                    </Card.Body>
                </Card>
            </div>




        </div>




    )

}

export default Landing;