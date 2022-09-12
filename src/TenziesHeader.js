import './TenziesHeader.css'

function TenziesHeader() {
    return (
        <div className='header'>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
    )
}

export default TenziesHeader;