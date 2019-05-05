import styled from 'styled-components'

export const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${props => props.color};
`

export const Container = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  width: ${props => (props.width ? props.width : '100%')};
  padding: 15px 20px;
  display: ${props => (props.display ? props.display : 'block')};
`

export const Row = styled.div`
  width: 100%;
  display: ${props => (props.display ? props.display : 'block')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`
