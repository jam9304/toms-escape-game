import { useState, useContext } from 'react'
import { AppContext } from "../../AppContext"
import wrongInputSFX from "../audio/wrongInput.wav"
import correctInputSFX from "../audio/ping.mp3"


export const SafeForm = () => {
  const { isSafeSolved, setSafeSolved } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  
  const password = 'cigar'
  const [passwordGuess, setPasswordGuess] = useState("")

  const playAudioWrongInputSFX = () => {
    new Audio(wrongInputSFX).play();
  }

  const playAudioCorrectInputSFX = () => {
    new Audio(correctInputSFX).play();
  }
  
  const checkPassword = (e) => {
    if(passwordGuess.toLowerCase() === password) { 
      playAudioCorrectInputSFX()
      setSafeSolved(true)
      setLogs([...logs, { type:"success", text: "You cracked it open and found a smashing-looking rock inside. A window to success?"}])
    } else {
      playAudioWrongInputSFX()
      setLogs([...logs, { type:"warning", text: "Wrong combination"}])
    }
    e.preventDefault()
  }

  return (
      <form Add autocomplete="off" className="safe-form">
          <input type="text" id="safe-text" value={passwordGuess} onChange={(e) => setPasswordGuess(e.target.value)} />
          <input type="submit" value="Crack it!" onClick={checkPassword} />
      </form>
  )
}
