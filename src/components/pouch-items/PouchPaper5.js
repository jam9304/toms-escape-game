import noteG from "../../images/items/note-G.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PouchPaper5 = () => {

  const { logs, setLogs } = useContext(AppContext)
  const paperClue = () => {
    setLogs([...logs, { type:"pouch-item", text: "Scribbled on the note is the letter: G"}])

  }

  return (
 
      <img className='item' id="pouch-paper-5" src={noteG} onClick={paperClue} style={{ height: '40px' }} />

    
  )
}