import React from 'react'
import { FullScreen } from '../../sharedComponents/StructureComponents'
import { COLORS } from '../../constants/colors'
import { PlayerHand } from './components/playerHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

function GameScreenAux (props) {
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

export const GameScreen = connect(
  null,
  actions
)(GameScreenAux)
