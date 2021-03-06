import doorOneClosedImg from "../../images/items/closedDoor.png"
import arrowForward from  "../../images/items/arrowForward.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import lockedDoorSound from "../audio/lockedDoor.mp3"
import openDoorSound from "../audio/openDoor.mp3"
import { PaulsTongueAudio } from "./PaulsTongueAudio";

export const Door = ({ setDoorOneOpen, hasKeyOne, doorOneOpen }) => {

  const { logs, setLogs } = useContext(AppContext)
  const { playerLocation, setPlayerLocation } = useContext(AppContext)
  const { paulPlaying, setPaulPlaying } = useContext(AppContext)

  const playAudioLockedDoor = () => {
    new Audio(lockedDoorSound).play();
  }

  const playAudioOpenDoor = () => {
    new Audio(openDoorSound).play();
  }
  
  const openDoor = () => {
    if(hasKeyOne) {
      playAudioOpenDoor()
      setDoorOneOpen(true)
      setLogs([...logs, { type:"success", text: "You insert the key and it magically opens the door!"}])
    } else {
      playAudioLockedDoor()
      setLogs([...logs, { type:"warning", text: "You really expected the door to open? It's LOCKED! Some sort of key would be in order..."}])
    }
    
  }
  
  const moveToLevel2 = () => {
    if(doorOneOpen) {
      setLogs([...logs, { type:"inform", text: "You tip toe into the kitchen... these rich folk probably got bare munch"}])
      setPlayerLocation(2)
      setPaulPlaying(false)
      PaulsTongueAudio.pause()
    }
  }

  return doorOneOpen ? (
    <img src={arrowForward} className="item" id='arrow-forward' data-testid="arrow-forward" onClick={moveToLevel2} />)
    : (<img src={doorOneClosedImg} onClick={openDoor} id='door' data-testid="door" className="item" />)
}
