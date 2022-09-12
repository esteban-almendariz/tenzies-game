import React from 'react'
import Dice from "./Dice"
import Score from './Score'
import TenziesHeader from './TenziesHeader'
import RollBtn from './RollBtn'


function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [bestScore, setBestScore] = React.useState(0)



  React.useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const sameValue = dice.every(die => die.value === firstValue)
    let highscore = JSON.parse(localStorage.getItem('bestscore'))

    //check highscore present
    if (highscore) {
      setBestScore(highscore)
    }
    if (allDiceHeld && sameValue) {
      setTenzies(true)
      document.querySelector('.title').innerHTML = 'You Won!'
      if (bestScore === 0) {
        setBestScore(score)
        console.log(score)
      }
      if (score < bestScore) {
        localStorage.setItem('bestscore', JSON.stringify(score))
        setBestScore(score)
        console.log(score, bestScore)
      } else {
        localStorage.setItem('bestscore', JSON.stringify(score)
        )
      }
    }

  }, [dice])



  function allNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: Math.floor(Math.random() * 9999) + 1
      })
    }
    return newDice
  }

  const diceElements = dice.map(die => {
    return <Dice value={die.value}
      isHeld={die.isHeld}
      key={die.id}
      holdDice={() => holdDice(die.id)}
    />
  })


  function rollDie() {
    setDice(oldDice => oldDice.map(die => {
      return !die.isHeld ? {
        ...die, value: Math.floor(Math.random() * 6) + 1,
        id: Math.floor(Math.random() * 9999) + 1
      } :
        die
    }))
    setScore(score + 1)

    if (tenzies) {
      setDice(allNewDice)
      setTenzies(false)
      document.querySelector('.title').innerHTML = 'Tenzies'
    }
    if (document.querySelector('.roll-dice').innerHTML === "New Game") {
      setScore(0)
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {
        ...die, isHeld: !die.isHeld
      } :
        die
    }))
  }



  return (
    <main>
      <TenziesHeader />
      <div className="dice-container">
        {diceElements}
      </div>
      <Score
        score={score}
        bestScore={bestScore}
      />
      <RollBtn
        tenzies={tenzies}
        rollDie={rollDie}
      />
    </main>
  )
}

export default App;




// function App() {

//   const [dice, setDice] = React.useState(allNewDice())
//   const [tenzies, setTenzies] = React.useState(false)
//   const [score, setScore] = React.useState(0)
//   const [bestScore, setBestScore] = React.useState(0)



//   React.useEffect(() => {
//     const allDiceHeld = dice.every(die => die.isHeld)
//     const firstValue = dice[0].value
//     const sameValue = dice.every(die => die.value === firstValue)
//     let highscore = JSON.parse(localStorage.getItem('bestscore'))


//     if (highscore) {
//       setBestScore(highscore)
//     }
//     if (allDiceHeld && sameValue) {
//       setTenzies(true)
//       document.querySelector('.title').innerHTML = 'You Won!'
//       if (bestScore === 0) {
//         setBestScore(score)
//       }
//       if (score < bestScore) {
//         localStorage.setItem('bestscore', JSON.stringify(score))
//         setBestScore(score)
//         console.log(score, bestScore)
//       } else {
//         localStorage.setItem('bestscore', JSON.stringify(score)
//         )
//       }
//     }

//   }, [dice])



//   function allNewDice() {
//     let newDice = []
//     for (let i = 0; i < 10; i++) {
//       newDice.push({
//         value: Math.floor(Math.random() * 6) + 1,
//         isHeld: false,
//         id: Math.floor(Math.random() * 9999) + 1
//       })
//     }
//     return newDice
//   }

//   const diceElements = dice.map(die => {
//     return <Dice value={die.value}
//       isHeld={die.isHeld}
//       key={die.id}
//       holdDice={() => holdDice(die.id)}
//     />
//   })


//   function rollDie() {
//     setDice(oldDice => oldDice.map(die => {
//       return !die.isHeld ? {
//         ...die, value: Math.floor(Math.random() * 6) + 1,
//         id: Math.floor(Math.random() * 9999) + 1
//       } :
//         die
//     }))
//     setScore(score + 1)

//     if (tenzies) {
//       setDice(allNewDice)
//       setTenzies(false)
//       document.querySelector('.title').innerHTML = 'Tenzies'
//     }
//     if (document.querySelector('.roll-dice').innerHTML === "New Game") {
//       setScore(0)
//     }
//   }

//   function holdDice(id) {
//     setDice(oldDice => oldDice.map(die => {
//       return die.id === id ? {
//         ...die, isHeld: !die.isHeld
//       } :
//         die
//     }))
//   }



//   return (
//     <main>
//       <TenziesHeader />
//       <div className="dice-container">
//         {diceElements}
//       </div>
//       <Score
//         score={score}
//         bestScore={bestScore}
//       />
//       <RollBtn />
//     </main>
//   )
// }

// export default App





{/* <main>
      <TenziesHeader />
      <div className="dice-container">
        {diceElements}
      </div>
      <Score
        score={score}
        bestScore={bestScore}
      />
      <button className="roll-dice" onClick={rollDie}>{tenzies ? 'New Game' : "Roll"}</button>
    </main> */}