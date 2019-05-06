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

  const showNotification =
    player.result.win || player.result.lose || player.result.draw

  return (
    <FullScreen color={COLORS.GREEN}>
      {showNotification && <GameResultNotification result={player.result} />}
      <HUD money={player.money} />
      <EnemyHand cards={enemyCards} showSecondCard={game.playerStand} />
      <PlayerHand cards={playerCards} />
      <PlayerMenu standing={game.playerStand} />
    </FullScreen>
  )
}
