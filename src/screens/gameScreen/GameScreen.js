import React from 'react'
import { FullScreen } from '../../sharedComponents/StructureComponents'
import { COLORS } from '../../constants/colors'
import { PlayerHand } from './components/playerHand'

export function GameScreen () {
  return (
    <FullScreen color={COLORS.GREEN}>
      {/*
      <hud/>
      <houseHand />
      <playerHand />
      <menu />
    */}
      <PlayerHand />
    </FullScreen>
  )
}
