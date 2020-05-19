import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { provider } from 'react-redux'

import GlobalStyle from './styles/global'
import Header from './components/Header'
import Routes from './routes'

import store from './store'

function App() {
  return (
    <provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </provider>
  )
}

export default App
