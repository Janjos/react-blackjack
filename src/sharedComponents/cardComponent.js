import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'

const cardBack = require('../assets/images/cards/back01.gif')

const CardContainer = styled.div`
  & img {
    width: 6.5em;
    display: block;
    position: relative
    filter: drop-shadow(-0.26em 0.32em 0em ${COLORS.SHADOW});

    @media (max-width: 640px){
      width: 6em;
    }
  }
`

export function CardComponent (props) {
  return (
    <CardContainer>
      <img src={props.backface ? cardBack : props.image} alt={props.name} />
    </CardContainer>
  )
}

CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  backface: PropTypes.bool
}
