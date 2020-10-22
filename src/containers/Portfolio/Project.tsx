import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { SiFirebase, SiReact, SiRedux } from 'react-icons/si'
import useMedia from 'use-media'
import { device } from '../../devices'
import { motion } from 'framer-motion'
import { useVisibleAnimation } from '../../utils/useVisibleAnimation'

export function Project(props) {
  const isMobile = !useMedia(device.sm)
  const [controls, ref] = useVisibleAnimation()

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ when: 'beforeChildren' }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
    >
      <ProjectContainer
        container
        color={props.color}
        direction={isMobile ? 'column-reverse' : undefined}
      >
        <Grid item sm={6} lg={3}>
          <ProjectImage src={props.image} />
        </Grid>
        <Grid item sm={6} lg={9}>
          <ProjectContent>
            <div>
              <ProjectTitle>{props.title}</ProjectTitle>
              <ProjectDescription
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></ProjectDescription>
            </div>
            <ProjectTechnologies>
              {props.icons.map((icon, i) => (
                <ProjectTechnolyIcon key={i}>{icon}</ProjectTechnolyIcon>
              ))}
            </ProjectTechnologies>
          </ProjectContent>
        </Grid>
      </ProjectContainer>
    </motion.div>
  )
}

const ProjectContainer = styled(Grid)`
  background-color: ${(props) => props.color};
  color: white;
`

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  font-family: ${(props) => props.theme.fonts.monospace};
`

const ProjectDescription = styled.p`
  font-size: 1em;
`

const ProjectImage = styled.img`
  width: 100%;
  margin: 0 auto;
  padding-top: 40px;
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media ${device.xs} {
    padding: 0px 15px;
    font-size: 18px;
  }

  @media ${device.md} {
    padding: 0px 30px;
    font-size: 24px;
  }

  @media ${device.lg} {
    padding: 0px 100px;
    font-size: 28px;
  }
`

const ProjectTechnolyIcon = styled.span`
  margin: 0 5px;
  font-size: 2.5rem;
  border-radius: 10px;
  padding: 7px;
  display: inline-block;
  color: white;
`

const ProjectTechnologies = styled.span`
  padding: 5px 10px;
  margin-bottom: 20px;
  display: inline;
  width: auto;
  /* text-align: right; */
  /* display: flex; */
  /* align-items: center; */
`
