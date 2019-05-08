import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../../classes/Card'
import styled from 'styled-components'

import { Container, Row } from '../../../sharedComponents/structureComponents'
import { CardComponent } from '../../../sharedComponents/cardComponent'

const Offset = styled.div`
  margin-left: ${props => props.left};
  margin-top: ${props => props.top};
`

export function PlayerHand (props) {
  return (
    <Container display='flex'>
      <Row display='flex' justifyContent='center'>
        {props.cards.map((card, i) => (
          <Offset key={card.id} left='-1.25em' top={`-${0.5 * i}em`}>
            <CardComponent image={card.image} name={card.name} />
          </Offset>
        ))}
      </Row>
    </Container>
  )
}

PlayerHand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(Card)).isRequired
}
