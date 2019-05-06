import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'

const HudContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  & h1 {
    color: white;
    margin: 0;
    text-shadow: -5px 5px 0px ${COLORS.SHADOW};
  }
`

export function HUD (props) {
  return (
    <HudContainer>
      <h1> {props.money} </h1>
    </HudContainer>
  )
}

HUD.propTypes = {
  money: PropTypes.number.isRequired
}
