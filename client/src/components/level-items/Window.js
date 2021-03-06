import window from '../../images/items/window.png';
import arrowRight from '../../images/items/arrowRight.png';
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { RadioOneAudio } from "./RadioOneAudio";
import windowBreaking from "../audio/windowBreaking.mp3"

export const Window = () => {
  const { logs, setLogs } = useContext(AppContext);
  const { hasRock, setHasRock } = useContext(AppContext);
  const { isWindowBroken, setIsWindowBroken } = useContext(AppContext);
  const { playerLocation, setPlayerLocation } = useContext(AppContext);
  const { radioPlaying, setRadioPlaying} = useContext(AppContext)

  const playAudioWindowBreaking = () => {
    new Audio(windowBreaking).play();
  }
  
  const clickWindow = () => {
    if(hasRock) { 
      playAudioWindowBreaking()
      setIsWindowBroken(!isWindowBroken) 
      setLogs([...logs, { type:"success", text: "You lob your hefty rock and smash the window to pieces!"}])
    } else {
      setLogs([...logs, { type:"inform", text: "A nigh-indestructible window! What a pane..."}])
      
    }
  }
  
  const levelComplete = () => {
    setLogs([...logs, { type:"inform", text: "You carefully tiptoe over the glass and jump out the window"}])
    setPlayerLocation(3)
    setRadioPlaying(false)
    RadioOneAudio.pause()
  }
  
  return isWindowBroken ? 
    ( <img id="arrow-right-kitchen" className="item" src={arrowRight} onClick={levelComplete}/> )
   : 
    ( <img id="window-border" className="item" src={window} onClick={clickWindow} /> )
}
