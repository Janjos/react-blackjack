import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Container, Row } from '../../../sharedComponents/structureComponents'
import { CardComponent } from '../../../sharedComponents/cardComponent'

const Offset = styled.div`
  margin-left: ${props => props.left};
  margin-top: ${props => props.top};
`

export function EnemyHand (props) {
  return (
    <Container display='flex'>
      <Row display='flex' justifyContent='center'>
        {props.cards.map((card, i) => (
          <Offset key={card.id} left='-1.25em' top={`-${0.5 * i}em`}>
            <CardComponent
              image={card.image}
              name={card.name}
              // The second enemy card, at a first time, have to be hidden
              backface={i === 1 && !props.showSecondCard}
            />
          </Offset>
        ))}
      </Row>
    </Container>
  )
}

EnemyHand.propTypes = {
  showSecondCard: PropTypes.bool.isRequired
}
