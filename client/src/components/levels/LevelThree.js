
import { Bowl } from '../level-items/Bowl'
import { Killer } from '../level-items/Killer'
import { Kennel } from '../level-items/Kennel'
import { Hole } from "../level-items/Hole"
import { Bone } from "../level-items/Bone"
import { ArrowDown } from "../level-items/ArrowDown"
import { TomsKey } from "../level-items/TomsKey"
import { Dinnerbell } from "../level-items/Dinnerbell"
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import { KillerDefeated } from '../level-items/KillerDefeated'
import { HappyTom } from "../level-items/HappyTom"
import { ArrowRight } from '../level-items/ArrowRight'
import { Tnt } from '../level-items/Tnt'
import { JoeEasterEgg } from '../level-items/JoeEasterEgg'
import { GeorgeSun } from '../level-items/GeorgeSun'

export const LevelThree = () => {
  const { isHoleDug, setIsHoleDug } = useContext(AppContext);
  const { hasBone, setHasBone } = useContext(AppContext);
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext);
  const { isKillerDefeated, setIsKillerDefeated } = useContext(AppContext)
  const { hasTomsKey, setHasTomsKey } = useContext(AppContext)
  const { tomIsFree, setTomIsFree } = useContext(AppContext)
  const { detonatorAudioPlayed, setDetonatorAudioPlayed } = useContext(AppContext)


  const background = isTrapLaid ? ("level-three-trail") : ("level-three")

  


  return (
    <div className ={background}>
      <ArrowDown/>
      <Bowl/>
      <Kennel/>
      {!isKillerDefeated && <Killer/>}
      <Hole/>
      {(isHoleDug && !hasBone) && <Bone/>}
      {!hasTomsKey && <TomsKey/>}
      <Dinnerbell/>
      {isKillerDefeated && <KillerDefeated />}
      {isKillerDefeated && <ArrowRight />}
      {tomIsFree && <HappyTom />}
      {(isTrapLaid && !detonatorAudioPlayed) && <Tnt />}
      {isHoleDug && <JoeEasterEgg />}
      {tomIsFree && <GeorgeSun />}
    </div>
  )
  }