import React from 'react'
import styled from 'styled-components'
import { Project } from './Project'
import seamImage from '../../../public/images/Seam-image.png'
import itsImage from '../../../public/images/Its-Image2.png'
import electronImage from '../../../public/images/Electron-image.png'
import {
  SiElectron,
  SiFirebase,
  SiMicrosoftsqlserver,
  SiNodeDotJs,
  SiReact,
  SiRedux
} from 'react-icons/si'

export function Portfolio() {
  return (
    <PortfolioContainer id="projects">
      <Project
        color="#6b68ff"
        image={itsImage}
        title="Delivery App"
        description="<p>I was in charge of front-end development, responsible of implenting the design of the interface and making its functionality, 
        after a previous developer left the project in early stages.</p><p>Additionally, I setup push notifications using Firebase and an orchestrator using Node.</p>"
        icons={[<SiFirebase key="firebase" />, <SiReact key="react" />, <SiRedux key="redux" />]}
      />
      <Project
        color="#7d7aff"
        image={seamImage}
        title="ERP Clone"
        description="<p>I worked as a full-stack developer in the redesign of an ERP system, while also adding new features to the system.</p>
        <p>I added new tables to the database to support the new features, and created an entirely new back-end. For the front-end I worked in the making of a new design and implementation of all features.</p>"
        icons={[
          <SiNodeDotJs key="node" />,
          <SiReact key="react" />,
          <SiRedux key="redux" />,
          <SiMicrosoftsqlserver key="mssql" />
        ]}
      />
      <Project
        color="#9694ff"
        image={electronImage}
        title="Mechanical Workshop App"
        description="<p>I made a desktop client application that connects to a management system and was able to control and do follow-up of the activities of mechanical workshops.</p>"
        icons={[<SiReact key="react" />, <SiRedux key="redux" />, <SiElectron key="electron" />]}
      />
    </PortfolioContainer>
  )
}

const PortfolioContainer = styled.div`
  padding-top: 40px;
  background-color: white;
`
