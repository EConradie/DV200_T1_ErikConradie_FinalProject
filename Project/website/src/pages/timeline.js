import react from 'react';
import { useState, useEffect } from "react";
import axios from "axios"
import '../App.css';
import Select from 'react-select'
import LineChart from "../components/LineChart";
import { DriversIds } from "../utils/DriversIds";
import { DriverDetails } from '../utils/DriverDetails';
import { Chart, ArcElement } from 'chart.js'
import { CategoryScale } from 'chart.js';
import { registerables } from 'chart.js';
import { TimeLineSelection } from '../utils/TimelineSelect';

function Timeline() {

    const [TLSelected, setTLSelected] = useState(1);
    const [DisplayData, setDisplayData] = useState();

    var DataData = [];

    // handle onChange event of the dropdown
    const handleChange1 = e => {
        setTLSelected(e.value);
    }


    const [LineChartData1, setLineChartData1] = useState({
        labels: DriverDetails.map((data) => data.name),
        datasets: [
            {
                label: "Points ",
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

    const [LineChartData2, setLineChartData2] = useState({
        labels: DriverDetails.map((data) => data.name),
        datasets: [
            {
                label: "Podiums ",
                data: DriverDetails.map((data) => data.pod),
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

    const [LineChartData3, setLineChartData3] = useState({
        labels: DriverDetails.map((data) => data.name),
        datasets: [
            {
                label: "Prixs ",
                data: DriverDetails.map((data) => data.prix),
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

    const [LineChartData4, setLineChartData4] = useState({
        labels: DriverDetails.map((data) => data.name),
        datasets: [
            {
                label: "Champs Won ",
                data: DriverDetails.map((data) => data.champs),
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

    if (TLSelected == 1) {

        DataData = LineChartData1

    } else if (TLSelected == 2) {

        DataData = LineChartData2
    } else if (TLSelected == 3) {

        DataData = LineChartData3
    } else if (TLSelected == 4) {

        DataData = LineChartData4
    }

    return (

        <div style={{ width: "80%", height: '1000px', margin: 'auto', marginTop: '4%' }}>


            <div style={{ width: "40%",margin: 'auto', marginTop: '4%' }}><Select
                placeholder="Select Option"
                value={TimeLineSelection.find(obj => obj.value === TLSelected)} // set selected value
                options={TimeLineSelection} // set list of the data
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
            /></div>




            <div style={{ width: "100%", marginTop:'3%' }}><LineChart chartData={DataData} /></div>
        </div>


    )

}

export default Timeline;