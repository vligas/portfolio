import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import dogeImage from '../../../public/images/doge3.png'
import { device } from '../../devices'
import { HexagonTechs } from './HexagonTechs'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import { useVisibleAnimation } from '../../utils/useVisibleAnimation'
import { motion } from 'framer-motion'

export function About() {
  const overlay = useRef<HTMLElement>()
  useScrollPosition(
    ({ currPos }) => {
      if (overlay.current) {
        console.log(overlay.current)
        if (currPos.y < 100) {
          overlay.current.style.width = '100%'
        } else if (currPos.y >= 100 && currPos.y <= 200) {
          overlay.current.style.width = `${100 - (currPos.y - 100)}%`
        } else {
          overlay.current.style.width = '0%'
        }
      }
    },
    undefined,
    undefined,
    true,
    100
  )

  const [ref, inView] = useInView({ threshold: 0.5 })
  const [quoteDecoration, setQuoteDecoration] = useState(false)

  useEffect(() => {
    if (inView) {
      setQuoteDecoration(true)
    }
  }, [inView])

  const [dogeControls, imgRef] = useVisibleAnimation()
  const [controls, textRef] = useVisibleAnimation()

  return (
    <AboutContainer id="about">
      <Overlay ref={overlay}>
        <AboutTitle>
          <Link to="about" offset={-75} smooth>
            About <ArrowDown />
          </Link>
        </AboutTitle>
      </Overlay>
      <AboutTitle>About</AboutTitle>

      <Grid container justify="center" alignItems="center">
        <Grid item md={6} xs={12}>
          <AboutText
            ref={textRef}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            <p>
              I’am a full-stack developer based in Venezuela. I studied Computer Science. I really
              enjoy programming and I am lucky that my job is my actual passion ❤️
            </p>
            <p>
              I’m a fast learner, and enthusiastic to use new technologies and grow professionally.
            </p>
            <p>
              In the past I have worked with Python and Django in different projects, but right now
              I am focused in Typescript, React and Node backends with different frameworks.
            </p>
          </AboutText>
        </Grid>
        <Grid item md={6} xs={12}>
          <HexagonTechs />
        </Grid>
      </Grid>
      <Quote>
        <QuoteText ref={ref} className={`${quoteDecoration ? 'visible' : undefined}`}>
          Si estás preocupado, no te preocupes
        </QuoteText>
      </Quote>
      <DogeImg
        src={dogeImage}
        ref={imgRef}
        animate={dogeControls}
        initial="hidden"
        variants={{
          visible: { scale: 1 },
          hidden: { scale: 0 }
        }}
      />
    </AboutContainer>
  )
}

export const AboutContent = styled.div`
  flex-direction: row;
  display: flex;
`

export const AboutIcon = styled.div`
  width: 100px;
  height: 100px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  margin: 10px;
  border-radius: 50%;
  transition: all 0s linear;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 40px;
  }

  :hover {
    background-color: ${(props) => props.color};
    color: white;
  }
`

export const AboutContainer = styled.div`
  background-color: white;
  color: black;
  position: relative;
  /* padding: 50px 40px; */

  @media ${device.xs} {
    padding: 50px 15px;
    font-size: 18px;
  }

  @media ${device.md} {
    padding: 50px 30px;
    font-size: 24px;
  }

  @media ${device.lg} {
    padding: 50px 40px;
    font-size: 28px;
  }
`

export const AboutText = styled(motion.div)`
  padding-right: 20px;
  margin-bottom: 50px;
  font-size: 0.9em;
  flex: 1;

  @media ${device.xs} {
    padding-right: 0px;
  }

  @media ${device.md} {
    padding-right: 20px;
  }
`

export const AboutTitle = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  position: relative;
  color: ${(props) => props.theme.color.secondary};
`

export const ArrowDown = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid;
  border-top-color: ${(props) => props.theme.color.white};
`

export const Overlay = styled.div`
  transition: width 0.1s linear;
  overflow: hidden;
  content: '';
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.primary};

  ${AboutTitle} {
    color: ${(props) => props.theme.color.white};
    padding-left: 40px;
    padding-top: 50px;
    width: 300px;
    @media ${device.xs} {
      padding-left: 15px;
    }

    @media ${device.md} {
      padding-left: 30px;
    }

    @media ${device.lg} {
      padding-left: 40px;
    }
  }
`

export const Quote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  font-size: 1.5em;
  font-style: italic;
  position: relative;
  text-align: center;
`

export const QuoteText = styled.span`
  position: relative;
  z-index: 2;
  &::before {
    content: '';
    width: 0%;
    height: 10px;
    background-color: ${(props) => props.theme.color.accent};
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: width 2s ease;
  }

  &.visible::before {
    width: 100%;
  }
`
export const DogeImg = styled(motion.img)`
  position: absolute;
  @media ${device.xs} {
    width: 75px;
    margin-left: 20px;
    right: 10%;
    bottom: -50px;
  }
  @media ${device.sm} {
    width: 150px;
    margin-left: 20px;
    right: 5%;
    bottom: -75px;
  }

  @media ${device.md} {
    width: 200px;
    margin-left: 20px;
    right: 5%;
    bottom: -100px;
  }

  @media ${device.lg} {
    width: 200px;
    margin-left: 20px;
    right: 10%;
    bottom: -100px;
  }
`
