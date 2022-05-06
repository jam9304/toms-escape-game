import lightSwitch3 from "../../images/items/lightSwitchRight.png" 
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const LightSwitch3 = ({checkLightPuzzle}) => {
  const { hasTurnedOnPower, setHasTurnedOnPower } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { light3, setLight3 } = useContext(AppContext)

  const switchLight = () => {
    if (!hasTurnedOnPower) {
      setLogs([...logs, <p>There seems to not be any power</p>])
        
    } else {
      setLight3(light3 + 1)
      if (light3 === 2) { setLight3(0) }
      checkLightPuzzle()
    }
  }

  return (
    <img src={lightSwitch3} className="item" id="light-switch-3" onClick={switchLight}/>
  )
}