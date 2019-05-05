import React from 'react'
import { FullScreen } from '../../sharedComponents/StructureComponents'
import { COLORS } from '../../constants/colors'
import { PlayerHand } from './components/playerHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { EnemyHand } from './components/enemyHand'
import gameLogic from '../../gameLogic'

function GameScreenUnconnected (props) {
  const enemyCards = props.cards.enemyCards
  const playerCards = props.cards.playerCards

  function handlePlayerButton () {
    console.log('player')
    props.playerGetCards(1)
  }

  function handleEnemyButton () {
    console.log('enemy')
    props.enemyGetCards(1)
  }

  return (
    <FullScreen color={COLORS.GREEN}>
      {/* TODO Remove this buttons */}
      <button onClick={handlePlayerButton}>Add cards</button>
      <button onClick={handleEnemyButton}>Add enemy cards</button>

      <EnemyHand cards={enemyCards} />
      <PlayerHand cards={playerCards} />
    </FullScreen>
  )
}

const mapStateToProps = state => {
  const { cards, player } = state
  return { cards, player }
}

export const GameScreen = connect(
  mapStateToProps,
  actions
)(GameScreenUnconnected)
