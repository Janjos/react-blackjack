import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { COLORS } from '../../constants/colors'
import { FullScreen } from '../../sharedComponents/structureComponents'
import { PlayerHand } from './components/playerHand'
import { EnemyHand } from './components/enemyHand'
import { HUD } from './components/hud'
import { GameResultNotification } from '../../sharedComponents/notifications/gameResultNotification'
import { PlayerMenu } from './components/playerMenu'
import { startGame } from '../../redux/actions'

const HandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const HandRow = styled.div`
  margin-top: 50px;
`

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
      <HandsContainer>
        <HandRow>
          <EnemyHand cards={enemyCards} showSecondCard={game.playerStand} />
        </HandRow>
        <HandRow>
          <PlayerHand cards={playerCards} />
        </HandRow>
      </HandsContainer>
      <PlayerMenu enabled={game.buttonsEnabled} />
    </FullScreen>
  )
}
