import React from 'react'
import Layout from './containers/Layout'
import { ThemeProvider } from 'styled-components'
import GlobalStyles, { theme } from './theme'
import { Home } from './Home'

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  )
}
