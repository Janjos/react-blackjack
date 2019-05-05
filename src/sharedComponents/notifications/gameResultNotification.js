import React from 'react'
import PropTypes from 'prop-types'
import { GameResult } from '../../classes/GameResult'

export function GameResultNotification (props) {
  return (
    <div>
      {props.result.win && (
        <div>
          <h1> You Win! </h1>
        </div>
      )}
      {props.result.lose && (
        <div>
          <h1> You Lose! </h1>
        </div>
      )}
    </div>
  )
}

GameResultNotification.propTypes = {
  result: PropTypes.instanceOf(GameResult)
}
