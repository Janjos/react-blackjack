import React from 'react'
import { playerGetCards, enemyGetCards } from '../../redux/actions'

import { COLORS } from '../../constants/colors'
import { FullScreen } from '../../sharedComponents/StructureComponents'
import { PlayerHand } from './components/playerHand'
import { useSelector, useDispatch } from 'react-redux'
import { EnemyHand } from './components/enemyHand'
import { HUD } from './components/hud'
import { GameResultNotification } from '../../sharedComponents/notifications/gameResultNotification'

export function GameScreen () {
  const { cards, player } = useSelector(state => ({
    cards: state.cards,
    player: state.player
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
      <GameResultNotification result={player.result} />
      <HUD money={player.money} />
      <EnemyHand cards={enemyCards} />
      <PlayerHand cards={playerCards} />
    </FullScreen>
  )
}
