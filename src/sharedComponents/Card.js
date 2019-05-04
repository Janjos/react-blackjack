import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardContainer = styled.div`
  & img {
    width: 80px;
    display: block;
    position: relative
    filter: drop-shadow(-4px 5px 0px rgba(30, 40, 30, .7));
  }
`

export function Card (props) {
  return (
    <CardContainer>
      <img src={props.image} alt={props.cardName} />
    </CardContainer>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired
}
