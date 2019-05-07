import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { COLORS } from '../../constants/colors'

import { Container, Row, BasicButton } from '../structureComponents'
import { NotificationContainer } from './modalsSharedComponents'
import { betValues } from '../../constants/betValues'

const Modal = styled.div`
  display: inline-block;
  padding: 40px 70px;
  background: ${COLORS.SHADOW};
  z-index: 9;
  box-shadow: -8px 8px 0 ${COLORS.SHADOW};
  border: solid 6px ${COLORS.WHITE};
`

const ModalText = styled.div`
  h1,
  h2 {
    color: ${COLORS.WHITE};
    margin: 0;
    text-align: center;
    text-shadow: -3px 3px ${COLORS.BLUE};
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 28px;
    font-family: Fipps;

    span {
      font-family: Fipps;
      font-size: 18px;
    }
  }

  span {
    margin: 0;
  }
`

const BetOptionAnm = posed.div({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.3
  }
})

const BetOption = styled(BetOptionAnm)`
  display: inline-block;
  margin: 0 15px;
`

export function BetModal () {
  return (
    <NotificationContainer>
      <Modal>
        <ModalText>
          <h1> PLace your bet! </h1>
        </ModalText>
        <Container display='flex' flexDirection='row'>
          <Row display='flex' justifyContent='space-between'>
            {betValues.map(value => (
              <BetOption>
                <ModalText>
                  <h2>
                    <span>R$</span>
                    {value}
                  </h2>
                </ModalText>
              </BetOption>
            ))}
          </Row>
        </Container>
        <Container>
          <Row display='flex' justifyContent='center'>
            <ModalText>
              <h1>Current bet:</h1>
              <h2>
                <span>R$</span>200
              </h2>
            </ModalText>
          </Row>
          <Row display='flex' justifyContent='center'>
            <BasicButton> CONFIRM </BasicButton>
          </Row>
        </Container>
      </Modal>
    </NotificationContainer>
  )
}
