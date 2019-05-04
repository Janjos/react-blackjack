import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../../classes/Card'

import { Container, Row } from '../../../sharedComponents/StructureComponents'
import { CardComponent } from '../../../sharedComponents/CardComponent'

export function PlayerHand (props) {
  return (
    <Container display='flex'>
      <Row display='flex'>
        {props.cards.map(card => (
          <CardComponent key={card.id} image={card.image} name={card.name} />
        ))}
      </Row>
    </Container>
  )
}

PlayerHand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(Card)).isRequired
}
