import React from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'

import { GameScreen } from './screens/gameScreen/gameScreen'
import { initialState } from './constants/data/initialState'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas'
import { GlobalStyle } from './sharedComponents/globalStyle'
import { Blurry, ScanLinesFilter } from './sharedComponents/structureComponents'

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
      <ScanLinesFilter>
        <Blurry>
          <GlobalStyle />
          <GameScreen />
        </Blurry>
      </ScanLinesFilter>
    </Provider>
  )
}
