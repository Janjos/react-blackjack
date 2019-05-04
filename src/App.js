import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'

import { createGlobalStyle } from 'styled-components'
import { GameScreen } from './screens/gameScreen/GameScreen'
import { initialState } from './constants/data/initialState'

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
  const store = createStore(reducers, initialState)

  return (
    <Provider store={store}>
      <GlobalStyle />
      <GameScreen />
    </Provider>
  )
}
