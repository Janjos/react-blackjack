import React from 'react'
import { FullScreen } from '../../sharedComponents/StructureComponents'
import { COLORS } from '../../constants/colors'
import { PlayerHand } from './components/playerHand'
import { useSelector, useDispatch } from 'react-redux'
import { EnemyHand } from './components/enemyHand'
import { playerGetCards, enemyGetCards } from '../../redux/actions'

export function GameScreen () {
  const { cards } = useSelector(state => ({
    cards: state.cards
  }))
  const enemyCards = cards.enemyCards
  const playerCards = cards.playerCards

  const dispatch = useDispatch()

  function handlePlayerButton () {
    dispatch(playerGetCards(1))
  }

  function handleEnemyButton () {
    dispatch(enemyGetCards(1))
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
