import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'

const HudContainer = styled.div`
  position: absolute;
  top: 1.25em;
  left: 1.25em;

  & h1,
  h2,
  p {
    color: ${COLORS.WHITE};
    margin: 0;
    text-shadow: -4px 4px 0px ${COLORS.SHADOW};
  }
`

const MoneyHud = styled.div`
  h1 {
    margin: 0;
    font-size: 1em;
    color: ${COLORS.WHITE};
  }

  h2 {
    margin: 0;
    font-size: 2.25em;
    color: ${COLORS.WHITE};
    line-height: 1.87em;
    display: inline;
  }

  p {
    display: inline;
    margin: 0;
    font-size: 1em;
    color: ${COLORS.WHITE};
  }
`

const BetHud = styled.div`
  margin-top: 1.56em;

  h1 {
    margin: 0;
    font-size: 1em;
    color: ${COLORS.WHITE};
  }

  h2 {
    margin: 0;
    font-size: 1.5em;
    color: ${COLORS.WHITE};
    line-height: 1.5em;
    display: inline;
  }

  p {
    display: inline;
    margin: 0;
    font-size: 1em;
    color: ${COLORS.WHITE};
  }
`

export function HUD (props) {
  return (
    <HudContainer>
      <MoneyHud>
        <h1> money </h1>
        <p>$</p>
        <h2>{props.money}</h2>
      </MoneyHud>
      <BetHud>
        <h1> bet </h1>
        <p>$</p>
        <h2>{props.bet}</h2>
      </BetHud>
    </HudContainer>
  )
}

HUD.propTypes = {
  money: PropTypes.number.isRequired,
  bet: PropTypes.number.isRequired
}
