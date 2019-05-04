import React from 'react'
import { FullScreen } from '../../sharedComponents/StructureComponents'
import { COLORS } from '../../constants/colors'
import { PlayerHand } from './components/playerHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

function GameScreenUnconnected (props) {
  return (
    <FullScreen color={COLORS.GREEN}>
      {/*
      <hud/>
      <houseHand />
      <playerHand />
      <menu />
    */}
      <PlayerHand cards={props.cards.userCards} />
    </FullScreen>
  )
}

const mapStateToProps = state => {
  const { cards } = state
  return { cards }
}

export const GameScreen = connect(
  mapStateToProps,
  actions
)(GameScreenUnconnected)
