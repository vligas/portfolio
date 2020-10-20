import React from 'react'
import styled from 'styled-components'
import { Project } from './Project'
import seamImage from '../../../public/images/Seam-image.png'
import itsImage from '../../../public/images/Its-Image2.png'
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
        description="I was the unique frontend developer. responsible of making up the interface and funcionality after the one who preceded me leaved the project in the early stages."
        icons={[<SiFirebase />, <SiReact />, <SiRedux />]}
      />
      <Project
        color="#7d7aff"
        image={seamImage}
        title="ERP Clone"
        description="I was the unique frontend developer. responsible of making up the interface and funcionality after the one who preceded me leaved the project in the early stages."
        icons={[<SiNodeDotJs />, <SiReact />, <SiRedux />, <SiMicrosoftsqlserver />]}
      />
      <Project
        color="#9694ff"
        image={seamImage}
        title="Mechanical Workshop App"
        description="I was the unique frontend developer. responsible of making up the interface and funcionality after the one who preceded me leaved the project in the early stages."
        icons={[<SiReact />, <SiRedux />, <SiElectron />]}
      />
    </PortfolioContainer>
  )
}

const PortfolioContainer = styled.div`
  padding-top: 40px;
  background-color: white;
`
