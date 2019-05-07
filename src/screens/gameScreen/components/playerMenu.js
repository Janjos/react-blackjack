import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { playerGetCards, playerStand } from '../../../redux/actions'
import PropTypes from 'prop-types'

import { Container, Row } from '../../../sharedComponents/structureComponents'

const MenuContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
`

export function PlayerMenu (props) {
  const dispatch = useDispatch()

  function handlePlayerHit () {
    dispatch(playerGetCards(1))
  }

  function handlePlayerStand () {
    dispatch(playerStand())
  }

  return (
    <MenuContainer>
      <Container width='100%'>
        <Row display='flex' justifyContent='center'>
          <button onClick={handlePlayerHit} disabled={props.standing}>
            HIT
          </button>
          <button onClick={handlePlayerStand} disabled={props.standing}>
            STAND
          </button>
        </Row>
      </Container>
    </MenuContainer>
  )
}

PlayerMenu.propTypes = {
  standing: PropTypes.bool
}
