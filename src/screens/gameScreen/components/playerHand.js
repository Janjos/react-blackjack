import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../../classes/Card'
import styled from 'styled-components'

import { Container, Row } from '../../../sharedComponents/StructureComponents'
import { CardComponent } from '../../../sharedComponents/CardComponent'

const Offset = styled.div`
  margin-left: ${props => props.left};
  margin-top: ${props => props.top};
`

export function PlayerHand (props) {
  return (
    <Container display='flex'>
      <Row display='flex' justifyContent='center'>
        {props.cards.map((card, i) => (
          <Offset key={card.id} left='-20px' top={`-${8 * i}px`}>
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
