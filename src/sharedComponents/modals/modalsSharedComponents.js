import styled from 'styled-components'
import posed from 'react-pose'
import { COLORS } from '../../constants/colors'

export const NotificationContainerAnm = posed.div({
  visible: { opacity: 1, transition: { duration: 300 } },
  hidden: { opacity: 0 }
})

export const NotificationContainer = styled(NotificationContainerAnm)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: ${COLORS.SHADOW};
`
