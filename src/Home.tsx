import React from 'react'
import Layout from './containers/Layout'
import { Landing } from './containers/Landing'
import { About } from './containers/About'
import { HomeSection } from './components/HomeSection'
import { Portfolio } from './containers/Portfolio'
import { Contact } from './containers/Contact'

export function Home() {
  return (
    <Layout>
      <Landing></Landing>
      <About></About>
      <Portfolio></Portfolio>
      <Contact />
      {/* <HomeSection title="About">
      </HomeSection>
      <HomeSection title="Portfolio">
        <Portfolio></Portfolio>
      </HomeSection> */}
    </Layout>
  )
}
