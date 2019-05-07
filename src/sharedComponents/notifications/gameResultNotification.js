import React from 'react'
import PropTypes from 'prop-types'
import { GameResult } from '../../classes/GameResult'
import styled from 'styled-components'
import { COLORS } from '../../constants/colors'
import posed from 'react-pose'

const NotificationContainer = posed.div({
  visible: { opacity: 1, transition: { duration: 300 } },
  hidden: { opacity: 0 }
})

const ResultText = posed.h1({
  visible: {
    marginTop: '0',
    transition: { duration: 300, delay: 500, ease: 'easeOut' }
  },
  hidden: { marginTop: '-100vh' }
})

const StyledNotificationContainer = styled(NotificationContainer)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: ${COLORS.SHADOW};
`
const ResultTextStyled = styled(ResultText)`
  font-size: 22px;
  color: white;
  text-shadow: -2px 4px 0px ${props => props.color};
  margin: 0;
`

export function GameResultNotification (props) {
  return (
    <StyledNotificationContainer pose='visible' initialPose='hidden'>
      <div>
        {props.result.win && (
          <ResultTextStyled
            pose='visible'
            initialPose='hidden'
            color={COLORS.BLUE}
          >
            You Win!
          </ResultTextStyled>
        )}
        {props.result.lose && (
          <ResultTextStyled
            pose='visible'
            initialPose='hidden'
            color={COLORS.RED}
          >
            You Lose!
          </ResultTextStyled>
        )}
        {props.result.draw && (
          <ResultTextStyled
            pose='visible'
            initialPose='hidden'
            color={COLORS.GREEN}
          >
            Draw!
          </ResultTextStyled>
        )}
      </div>
    </StyledNotificationContainer>
  )
}

GameResultNotification.propTypes = {
  result: PropTypes.instanceOf(GameResult)
}
