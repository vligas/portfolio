import { Hexagon } from '../../components/Hexagon'
import React, { useEffect } from 'react'
import { DiGit, DiJavascript1, DiNodejsSmall, DiPostgresql, DiReact } from 'react-icons/di'
import styled from 'styled-components'
import useMedia from 'use-media'
import { device } from '../../devices'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function HexagonTechs() {
  const isMobile = !useMedia(device.sm)
  console.log(isMobile)

  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const desktopTechMatrix = [
    [<DiJavascript1 key="javascript" />, <DiNodejsSmall key="node" />],
    [<DiReact key="react" />, <DiGit key="git" />, <DiPostgresql key="postgres" />]
  ]

  const mobileTechMatrix = [
    [<DiJavascript1 key="javascript" />, <DiNodejsSmall key="node" />],
    [<DiReact key="react" />],
    [<DiGit key="git" />, <DiPostgresql key="postgres" />]
  ]

  const techMatrix = isMobile ? mobileTechMatrix : desktopTechMatrix

  return (
    <AboutTechs
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ when: 'beforeChildren' }}
      variants={{
        visible: { scale: 1 },
        hidden: { scale: 0 }
      }}
    >
      {techMatrix.map((row, i) => (
        <HexagonRow key={i}>
          {row.map((icon) => (
            <Hexagon key={icon.key}>{icon}</Hexagon>
          ))}
        </HexagonRow>
      ))}
      <DecorativeBoxes>
        {new Array(10).fill(0).map((_, i) => (
          <DecorativeBox
            key={i}
            initial="hidden"
            custom={i}
            // transition={{ duration: 2 }}
            variants={{
              visible: (custom) => ({ scale: 1, transition: { delay: 0.1 * custom } }),
              hidden: { scale: 0 }
            }}
          />
        ))}
      </DecorativeBoxes>
    </AboutTechs>
  )
}

export const HexagonRow = styled.div`
  display: flex;
  /* flex-wrap: wrap;
  justify-content: center; */

  ${Hexagon} {
    margin-left: 2px;
    margin-right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
  }
`

export const AboutTechs = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${HexagonRow}:not(:last-child) {
    margin-bottom: -35px;
  }
`

export const DecorativeBox = styled(motion.div)`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.color.secondary};
  margin-left: 7px;
  margin-top: 50px;
`

export const DecorativeBoxes = styled(motion.div)`
  margin-top: 20px;

  ${DecorativeBox}:first-child {
    margin-left: 0px;
  }
`
