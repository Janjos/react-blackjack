import React from 'react'
import PropTypes from 'prop-types'
import { GameResult } from '../../classes/GameResult'
import styled from 'styled-components'
import { COLORS } from '../../constants/colors'
import posed from 'react-pose'

import { NotificationContainer } from './modalsSharedComponents'

const ResultText = posed.h1({
  visible: {
    marginTop: '0',
    transition: { duration: 300, delay: 500, ease: 'easeOut' }
  },
  hidden: { marginTop: '-100vh' }
})

const ResultTextStyled = styled(ResultText)`
  font-size: 1.37em;
  color: white;
  text-shadow: -0.125em 0.25em 0em ${props => props.color};
  margin: 0;
`

export function GameResultNotification (props) {
  return (
    props.show && (
      <NotificationContainer pose='visible' initialPose='hidden'>
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
      </NotificationContainer>
    )
  )
}

GameResultNotification.propTypes = {
  result: PropTypes.instanceOf(GameResult),
  show: PropTypes.bool
}
