import styled from 'styled-components'
import posed from 'react-pose'
import { COLORS } from '../constants/colors'

export const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${props => props.color};
  display: ${props => (props.display ? props.display : 'block')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'initial'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`

export const Container = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
  padding: 0.93em 1.25em;
  display: ${props => (props.display ? props.display : 'block')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'initial'};
`

export const Row = styled.div`
  width: 100%;
  display: ${props => (props.display ? props.display : 'block')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`
export const Blurry = styled.div`
  filter: blur(0.03em);
`
export const ButttonClickAnm = posed.button({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.9 }
})

export const BasicButton = styled(ButttonClickAnm)`
  background: #eef;
  box-shadow: inset 0 -0.188em 0 ${COLORS.LIGHT_BLUE};
  border: solid 0.188em #333;
  color: #333;
  padding: 0.5em 1.25em;
  margin: 0 0.5em;
  font-size: 1em;
`

export const ScanLinesFilter = styled.div`
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        rgba(18, 16, 16, 0.03) 50%,
        rgba(0, 0, 0, 0.11) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.03),
        rgba(0, 255, 0, 0.01),
        rgba(0, 0, 255, 0.05)
      );
    z-index: 2;
    background-size: 100% 0.25em, 0.06em 100%;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }

  @media (max-width: 600px) {
    &::before {
      display: none;
    }
  }

  @keyframes flicker {
    0% {
      opacity: 0.27;
    }
    5% {
      opacity: 0.3;
    }
    10% {
      opacity: 0.25;
    }
    15% {
      opacity: 0.8;
    }
    20% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.6;
    }
    30% {
      opacity: 0.3;
    }
    35% {
      opacity: 0.5;
    }
    40% {
      opacity: 0.2;
    }
    45% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.9;
    }
    55% {
      opacity: 0.1;
    }
    60% {
      opacity: 0.2;
    }
    65% {
      opacity: 0.5;
    }
    70% {
      opacity: 0.3;
    }
    75% {
      opacity: 0.2;
    }
    80% {
      opacity: 0.6;
    }
    85% {
      opacity: 0.7;
    }
    90% {
      opacity: 0.75;
    }
    95% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.1;
    }
  }
`
