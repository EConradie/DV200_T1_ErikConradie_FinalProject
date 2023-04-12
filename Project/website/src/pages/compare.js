import react from 'react';
import { useState, useEffect } from "react";
import axios from "axios"
import '../App.css';
import Select from 'react-select'
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import RadarChart from "../components/RadarChart";
import { DriversIds } from "../utils/DriversIds";
import { DriverDetails } from '../utils/DriverDetails';
import {Chart, ArcElement} from 'chart.js'
import {CategoryScale} from 'chart.js'; 
import {registerables} from 'chart.js';

Chart.register(...registerables);

Chart.register(CategoryScale);
Chart.register(ArcElement);
Chart.register(CategoryScale);


function Compare() {

         
    // set value for default selection
    const [Driver1Selected, setDriver1Selected] = useState(45);
    const [Driver2Selected, setDriver2Selected] = useState(20);
    

    // handle onChange event of the dropdown
    const handleChange1 = e => {
        setDriver1Selected(e.value);
    }

    var Driver1Data = DriverDetails[3] ;

    console.log(Driver1Data)

    const handleChange2 = e => {
        setDriver2Selected(e.value);
    }

    var Driver2Data = DriverDetails[10] ;

    console.log(Driver2Data)

    const Driver1Name = Driver1Data.name ;


    const style = {
        margin: "auto",
        padding: "5% 10% 10% 10%",
        color: "white",
        height: "3300px"
    }

    var PieChartLabels = ['Points','Podiums','Prixs','Champs']
    var PieChartData1 = [Driver1Data.points,Driver1Data.pod,Driver1Data.prix,Driver1Data.champs];
    var PieChartData2 = [Driver2Data.points,Driver2Data.pod,Driver2Data.prix,Driver2Data.champs];

    console.log(PieChartData1)
    console.log(PieChartData2)

    const [Driver1Pie, setDriver1Pie] = useState({
        labels: PieChartLabels,
        datasets: [
            {
                label: "Driver 1 Info",
                data: PieChartData1,
                backgroundColor: [
                    "#003f5c",
                    "#bc5090",
                    "#ffa600",
                    "#ff6361",
                    "#00798c"
                ],
                borderColor: "#121212",
                borderWidth: 2
            }
        ]
    });

    const [Driver2Pie, setDriver2Pie] = useState({
        labels: PieChartLabels,
        datasets: [
            {
                label: "Driver 1 Info",
                data: PieChartData2,
                backgroundColor: [
                    "#003f5c",
                    "#bc5090",
                    "#ffa600",
                    "#ff6361",
                    "#00798c"
                ],
                borderColor: "#121212",
                borderWidth: 2
            }
        ]
    });

    const [LineChartData, setLineChartData] = useState({
        labels: DriverDetails.map((data) => data.name) ,
        datasets: [
            {
                label: "Revenue Generated ",
                data: DriverDetails.map((data) => data.points),
                backgroundColor: [
                    "#003f5c",
                    "#bc5090",
                    "#ffa600",
                    "#ff6361",
                    "#00798c"
                ],
                borderColor: "#BB86FC",
                borderWidth: 2
            }
        ]
    });

    const [BarChartData, setBarChartData] = useState({
        labels: [Driver1Data.name,
        Driver2Data.name],
        datasets: [
            {
                label: "Graph ",
                data: [Driver1Data.points,Driver2Data.points],
                backgroundColor: [
                    "#003f5c",
                    "#bc5090",
                ],
                borderColor: "#121212",
                borderWidth: 2
                
            }
        ]
    });

    const [RadarChartData, SetRadarChartData] = useState({
        labels: [
            'Podiums',
            'Grand Prixs',
            'World Champs Won',
            'Points'
          ],
        datasets: [{
            label: Driver1Data.name,
            data: [Driver1Data.pod,Driver1Data.prix,Driver1Data.champs,Driver1Data.points],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }, {
            label: Driver2Data.name,
            data: [Driver2Data.pod,Driver2Data.prix,Driver2Data.champs,Driver2Data.points],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }]
    });






    return (

        <div style={style}>

            <div style={{ width: '100%' }}>

                <div style={{ width: '40%', height: '500px', float: 'left' }}>

                    <div style={{ width: "40%", float: 'left', textAlign: 'left', marginTop: '5%' }}>

                        <Select
                            placeholder="Select Option"
                            value={DriversIds.find(obj => obj.value === Driver1Selected)} // set selected value
                            options={DriversIds} // set list of the data
                            onChange={handleChange1} // assign onChange function
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundrColor: 'black',
                                    color: '#212529'
                                }),
                                option: (provided, state) => ({
                                    ...provided,
                                    fontWeight: state.isSelected ? "bold" : "normal",
                                    color: "white",
                                    backgroundColor: '#212529'

                                }),
                            }}
                        />

                        {Driver1Selected && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                            <div><b>Driver ID: </b> {Driver1Selected}</div>
                        </div>}


                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F", marginTop: '15px' }}>Name</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>{Driver1Data.name}</p>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>abbr</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>{Driver1Data.abbr}</p>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Nationality</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>{Driver1Data.nat}</p>

                    </div>


                    <div style={{ width: '60%', height: '500px', float: 'right', marginTop: '5%' }}>
                        <img style={{ width: "100%", transform: 'scaleX(-1)' }} src={Driver1Data.image}></img>
                    </div>

                </div>

                <div style={{ width: '20%', height: '500px', float: 'left', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '45%' }}>DRIVER COMPARISON</h1>
                    <h2 style={{ marginBottom: '45%' }}>VS</h2>
                    <h3 style={{ color: 'gray' }}>StatsFormula Approved</h3>
                </div>

                <div style={{ width: '40%', height: '500px', float: 'right' }}>

                    <div style={{ width: "40%", float: 'right', textAlign: 'right', marginTop: '5%' }}>

                        <Select
                            placeholder="Select Option"
                            value={DriversIds.find(obj => obj.value === Driver2Selected)} // set selected value
                            options={DriversIds} // set list of the data
                            onChange={handleChange2} // assign onChange function
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundrColor: 'black',
                                    color: '#212529'
                                }),
                                option: (provided, state) => ({
                                    ...provided,
                                    fontWeight: state.isSelected ? "bold" : "normal",
                                    color: "white",
                                    backgroundColor: '#212529'

                                }),
                            }}
                        />

                        {Driver2Selected && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                            <div><b>Driver ID: </b> {Driver2Selected}</div>
                        </div>}

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F", marginTop: '15px' }}>Name</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>{Driver2Data.name}</p>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>abbr</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>{Driver2Data.abbr}</p>

                        <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Nationality</p>
                        <p style={{ fontSize: '30px', marginBottom: '5px' }}>{Driver2Data.nat}</p>

                    </div>


                    <div style={{ width: '60%', height: '500px', float: 'left', marginTop: '5%' }}>
                        <img style={{ width: "100%" }} src={Driver2Data.image}></img>
                    </div>

                </div>

            </div>

            <div style={{ width: '49%', height: '200px', float: 'left' }}>

                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '5%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Team</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>{Driver1Data.team}</p>
                </div>
                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '3%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Number</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>{Driver1Data.num}</p>
                </div>
                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '3%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Points</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>{Driver1Data.points}</p>
                </div>




            </div>

            <div style={{ width: '49%', height: '200px', float: 'right' }}>

                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '5%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Points</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>{Driver2Data.points}</p>
                </div>
                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '3%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Number</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>{Driver2Data.num}</p>
                </div>
                <div style={{ width: '28%', height: '50px', float: 'left', marginLeft: '3%' }}>
                    <p style={{ fontSize: '20px', marginBottom: '5px', color: "#C01F1F" }}>Team</p>
                    <p style={{ fontSize: '30px', marginBottom: '5px', backgroundColor: '#212529', borderRadius: '10px', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>{Driver2Data.team}</p>
                </div>

            </div>

            <div style={{ width: '45%', height: '500px', float: 'left' }}>
                <div id='pie' style={{ width: "80%", marginBottom: "10%", marginRight:'15%'  }}><PieChart chartData={Driver1Pie} /> </div>
            </div>

            <div style={{ width: '10%', height: '500px', float: 'left' }}>
                <p style={{ fontSize: '20px', marginBottom: '5px', backgroundColor: '#003f5c', borderRadius: '10px', textAlign: 'center', marginTop: "20%", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>Points</p>
                <p style={{ fontSize: '20px', marginBottom: '5px', backgroundColor: '#ffa600', borderRadius: '10px', textAlign: 'center', marginTop: "20%", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>Podiums</p>
                <p style={{ fontSize: '20px', marginBottom: '5px', backgroundColor: '#ff6361', borderRadius: '10px', textAlign: 'center', marginTop: "20%", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>Grand Prix's</p>
                <p style={{ fontSize: '20px', marginBottom: '5px', backgroundColor: '#00798c', borderRadius: '10px', textAlign: 'center', marginTop: "20%", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>World Champs Won</p>

            </div>

            <div style={{ width: '45%', height: '500px', float: 'right' }}>
            <div id='pie' style={{ width: "80%", paddingBottom: "10%", marginLeft:'15%' }}><PieChart chartData={Driver2Pie} /> </div>
            </div>


            <div style={{width:'60%', height:'600px', float:'left', marginTop:'10%', marginLeft:'20%'}}> 
            <BarChart chartData={BarChartData} />
            </div>

            <div style={{width:'60%', height:'600px', float:'left', marginTop:'10%', marginLeft:'20%'}}> 
            <RadarChart chartData={RadarChartData} />
            </div>





        </div>


    )

}

export default Compare;