import './RollBtn.css'

function RollBtn(props) {

    return <div>
        <button className="roll-dice" onClick={props.rollDie}>{props.tenzies ? 'New Game' : "Roll"}</button>
    </div>
}

export default RollBtn; 