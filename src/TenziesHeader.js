import './TenziesHeader.css'

function TenziesHeader({tenzies}) {
    const nameOnChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className='header'>
            <h1 className="title">{tenzies ? 'You Won!' : 'Tenzies'}</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div>
                <p>Enter name to start game.</p>
                <input 
                    placeholder='Name'
                    onChange={nameOnChange}
                    />
            </div>
        </div>
    )
}

export default TenziesHeader;