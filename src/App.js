import React from 'react'

import { createGlobalStyle } from 'styled-components'
import { GameScreen } from './screens/gameScreen/GameScreen'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  div {
    box-sizing: border-box;
  }
`

export default function App () {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GameScreen />
    </React.Fragment>
  )
}
