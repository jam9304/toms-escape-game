// import logo from './logo.svg';

import { useState, useRef, useEffect, } from 'react'
import { AppContext } from './AppContext'
import { MyStopwatch } from './components/Stopwatch'
import { LevelOne } from './components/levels/LevelOne'
import { LevelTwo } from './components/levels/LevelTwo'
import { TextInterface } from './components/TextInterface'
import { Pouch } from './components/Pouch'



import './App.css';

function App() {
  const messagesEnd = useRef(null)
  
  const [logs, setLogs] = useState([ { type: "inform", text: "Oh no! You've been locked in the dungeon with Tom! Look around you to find something that might help you escape!"}])
  const [pouch, setPouch] = useState([])
  const [hasBook, setHasBook] = useState(false)
  const [hasBroom, setHasBroom] = useState(false)
  const [isPadlockSolved, setPadlockSolved] = useState(false)
  const [isSafeSolved, setSafeSolved] = useState(false)
  const [doorOneOpen, setDoorOneOpen] = useState(false)
  const [hasTurnedOnPower, setHasTurnedOnPower] = useState(false)
  const [light1, setLight1] = useState(0)
  const [light2, setLight2] = useState(0)
  const [light3, setLight3] = useState(0)
  const [hasPaper1, setHasPaper1] = useState(false)
  const [hasPaper2, setHasPaper2] = useState(false)
  const [hasPaper3, setHasPaper3] = useState(false)
  const [hasPaper4, setHasPaper4] = useState(false)
  const [hasPaper5, setHasPaper5] = useState(false)

  // Locations are: 1 for basement, 2 for kitchen, 3 for garden
  const [playerLocation, setPlayerLocation] = useState(1)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth"})
  })
  

  return (
    <div className= "whole-screen">
      <AppContext.Provider value={{pouch, setPouch, logs, setLogs, hasBook, setHasBook, isPadlockSolved, setPadlockSolved, doorOneOpen, setDoorOneOpen, hasBroom, setHasBroom, hasTurnedOnPower, setHasTurnedOnPower, light1, setLight1, light2, setLight2, light3, setLight3, isSafeSolved, setSafeSolved, hasPaper1, setHasPaper1, hasPaper2, setHasPaper2, hasPaper3, setHasPaper3, hasPaper4, setHasPaper4, hasPaper5, setHasPaper5}} >
        <div className='game-window'>
          <div className='game-background'>
            <MyStopwatch />
            {playerLocation === 1 && <LevelOne
              setPlayerLocation={setPlayerLocation}
              logs={logs}
              setLogs={setLogs}
              />}
            {playerLocation === 2 && <LevelTwo
              setPlayerLocation={setPlayerLocation}
              logs={logs}
              setLogs={setLogs}
            />}
          </div>
          <div className='bottom-ui'>
            <div className = "text-interface">
              <TextInterface logs={logs}/>
              <div ref={messagesEnd} style={{height: "20px"}}></div>
            </div>
            <div className ='pouch'>
              <Pouch />
            </div>
          </div>
      </div>
          
      </AppContext.Provider>
    </div>
  )


}

export default App;
