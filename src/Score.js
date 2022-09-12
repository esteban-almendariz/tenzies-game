import React, { useState } from "react";
import './Score.css'

function Score(props) {

    return <div className="score-container">
        <h3>Current Score: {props.score}</h3>
        <h3>Best Score: {props.bestScore}</h3>
    </div>
}

export default Score;