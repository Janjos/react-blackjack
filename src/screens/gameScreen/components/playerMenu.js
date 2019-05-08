import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { playerGetCards, playerStand } from '../../../redux/actions'
import PropTypes from 'prop-types'

import {
  Container,
  Row,
  BasicButton
} from '../../../sharedComponents/structureComponents'

const MenuContainer = styled.div`
  position: fixed;
  bottom: 1.25em;
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
          <BasicButton onClick={handlePlayerHit} disabled={!props.enabled}>
            HIT
          </BasicButton>
          <BasicButton onClick={handlePlayerStand} disabled={!props.enabled}>
            STAND
          </BasicButton>
        </Row>
      </Container>
    </MenuContainer>
  )
}

PlayerMenu.propTypes = {
  enabled: PropTypes.bool
}
