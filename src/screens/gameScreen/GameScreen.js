import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { COLORS } from '../../constants/colors'
import { FullScreen } from '../../sharedComponents/StructureComponents'
import { PlayerHand } from './components/playerHand'
import { EnemyHand } from './components/enemyHand'
import { HUD } from './components/hud'
import { GameResultNotification } from '../../sharedComponents/notifications/gameResultNotification'
import { PlayerMenu } from './components/playerMenu'
import { startGame } from '../../redux/actions'

export function GameScreen () {
  const { cards, player, game } = useSelector(state => ({
    cards: state.cards,
    player: state.player,
    game: state.game
  }))

  const enemyCards = cards.enemyCards
  const playerCards = cards.playerCards

  // TODO refactory start game logic
  const dispatch = useDispatch()
  if (!game.gameRunning) {
    dispatch(startGame())
  }

  return (
    <FullScreen color={COLORS.GREEN}>
      <GameResultNotification result={player.result} />
      <HUD money={player.money} />
      <EnemyHand cards={enemyCards} />
      <PlayerHand cards={playerCards} />
      <PlayerMenu />
    </FullScreen>
  )
}
