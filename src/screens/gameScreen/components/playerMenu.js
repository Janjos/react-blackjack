import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { playerGetCards, enemyGetCards } from '../../../redux/actions'

import { Container, Row } from '../../../sharedComponents/StructureComponents'

const MenuContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
`

export function PlayerMenu () {
  const dispatch = useDispatch()

  function handlePlayerButton () {
    dispatch(playerGetCards(1))
  }

  function handleEnemyButton () {
    dispatch(enemyGetCards(1))
  }

  return (
    <MenuContainer>
      <Container width='100%'>
        <Row display='flex' justifyContent='center'>
          <button onClick={handlePlayerButton}>Add cards</button>
          <button onClick={handleEnemyButton}>Add enemy cards</button>
        </Row>
      </Container>
    </MenuContainer>
  )
}
