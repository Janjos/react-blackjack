import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import posed from 'react-pose'
import { COLORS } from '../../constants/colors'
import { makeBet } from '../../redux/actions'

import { NotificationContainer } from './modalsSharedComponents'
import { betValues } from '../../constants/betValues'

const ModalAnm = posed.div({
  visible: { opacity: 1, transition: { duration: 300 } },
  hidden: { opacity: 0 }
})

const Modal = styled(ModalAnm)`
  display: inline-block;
  padding: 2.5em 4.37em;
  background: ${COLORS.SHADOW};
  z-index: 9;
  box-shadow: -0.5em 0.5em 0 ${COLORS.SHADOW};
  border: solid 0.37em ${COLORS.WHITE};

  @media (max-width: 640px) {
    padding: 1.3em 1.6em;
  }
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
    font-size: 1.25em;
  }

  h2 {
    font-size: 1.75em;
    font-family: Fipps;

    span {
      font-family: Fipps;
      font-size: 0.7em;
    }
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 1.2em;
    }
  
    h2 {
      font-size: 1.5em;
    }
`

const BetOptionsContainer = styled.div`
  padding: 0.93em 1.25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
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
  margin: 0 0.93em;
`

export function BetModal (props) {
  const dispatch = useDispatch()

  const handleBetOptionClick = value => {
    dispatch(makeBet(value))
  }

  return (
    props.show && (
      <NotificationContainer pose='visible' initialPose='hidden'>
        <Modal>
          <ModalText>
            <h1> PLace your bet! </h1>
          </ModalText>
          <BetOptionsContainer>
            {betValues.map(value => (
              <BetOption
                key={value}
                onClick={() => handleBetOptionClick(value)}
              >
                <ModalText>
                  <h2>
                    <span>$</span>
                    {value}
                  </h2>
                </ModalText>
              </BetOption>
            ))}
          </BetOptionsContainer>
        </Modal>
      </NotificationContainer>
    )
  )
}

BetModal.propTypes = {
  show: PropTypes.bool
}
