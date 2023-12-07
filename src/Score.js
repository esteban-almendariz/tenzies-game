import React from "react"
import './Score.css'

const Score = ({score, bestScore}) => {

    return <div className="score-container">
                <h3>Current Score: {score}</h3>
                <h3>Best Score: {bestScore}</h3>
        </div>
}

export default Score;