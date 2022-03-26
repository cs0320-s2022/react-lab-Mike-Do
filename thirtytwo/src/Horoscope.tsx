import React, {useState} from 'react';
import TextBox from "./TextBox";
// @ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function Horoscope() {

    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");

    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising
        };

        // define the config for the request
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        // make a post request with the data
        axios.post('http://localhost:4567/horoscope', toSend, config)
            .then(response => {
                console.log(response.data);
                setHoroscope(response.data['horoscope']);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className="Horoscope">
            <h1>
                Horoscopes!
            </h1>
            <TextBox label={"Sun Sign"} change={setSun}/>
            <TextBox label={"Moon Sign"} change={setMoon}/>
            <TextBox label={"Rising Sign"} change={setRising}/>

            <AwesomeButton type="primary" onPress={requestHoroscope}>Submit</AwesomeButton>
            {/*if the horoscope is not empty, display it*/}
            {horoscope == null ? "" : horoscope.map((trait: String) => <p>{trait}</p>)}
        </div>
    );
}

export default Horoscope;
