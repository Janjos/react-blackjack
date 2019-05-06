import React from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import { createGlobalStyle } from 'styled-components'

import { GameScreen } from './screens/gameScreen/GameScreen'
import { initialState } from './constants/data/initialState'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas'

const cursorImage = require('./assets/images/interface/white-cursor.png')

const GlobalStyle = createGlobalStyle`
  * {
    cursor: url(${cursorImage}), default;
  }

  body {
    margin: 0;
    padding: 0;
  }

  img {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }

  div {
    box-sizing: border-box;
  }
`

export default function App () {
  const sagaMiddleWare = createSagaMiddleware()

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  )

  sagaMiddleWare.run(rootSaga)

  return (
    <Provider store={store}>
      <GlobalStyle />
      <GameScreen />
    </Provider>
  )
}
