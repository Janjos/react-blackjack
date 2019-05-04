import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const cardBack = require('../images/cards/back01.gif')

const CardContainer = styled.div`
  & img {
    width: 80px;
    display: block;
    position: relative
    filter: drop-shadow(-4px 5px 0px rgba(30, 40, 30, .6));
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
