import React, { useRef } from 'react'
import { Nav, NavBar } from './components/Navbar'
import { AppContainer } from './AppContainer'
import { Background } from './components/Background'

export default function Layout(props: { children: JSX.Element[] | JSX.Element }): JSX.Element {
  return (
    <>
      {/* <Background /> */}
      <Nav></Nav>
      <AppContainer>{props.children}</AppContainer>
    </>
  )
}
