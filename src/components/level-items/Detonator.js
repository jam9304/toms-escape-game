import detonator from "../../images/items/detonator.png"
import { PouchDetonator } from "../pouch-items/PouchDetonator"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const Detonator = ( { setHasDetonator } ) => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const grabDetonator = () => {
    setHasDetonator(true)
    setPouch([...pouch, <PouchDetonator key="detonator"/>])
    setLogs([...logs, { type:"inform", text: "A detonator! Boom!"}])
  }
  return (
    <img className='item' id="detonator" onClick={grabDetonator} src={detonator}/>
  )
}