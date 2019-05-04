import React from 'react'
import { FullScreen } from '../../sharedComponents/StructureComponents'
import { COLORS } from '../../constants/colors'
import { PlayerHand } from './components/playerHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { EnemyHand } from './components/enemyHand'

function GameScreenUnconnected (props) {
  function handleUserButton () {
    props.userGetCards(1)
  }

  function handleEnemyButton () {
    props.enemyGetCards(1)
  }

  return (
    <FullScreen color={COLORS.GREEN}>
      {/* TODO Remove this buton */}
      <button onClick={handleUserButton}>Add cards</button>
      <button onClick={handleEnemyButton}>Add enemy cards</button>
      {/*
      <hud/>
      <houseHand />
      <playerHand />
      <menu />
    */}
      <EnemyHand cards={props.cards.enemyCards} />
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
