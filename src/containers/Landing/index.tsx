import { device } from '../../devices'
import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

export function Landing() {
  const subTitle = useRef()

  return (
    <>
      <LandingContainer id="landing">
        <LandingContent>
          <Title>
            <Typewriter
              options={{
                delay: 75
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`Hi, I'm <br /><span class="accent-text"> Victor Ligas</span>`)
                  .changeCursor(' ')
                  .callFunction(() => {
                    subTitle.current.start()
                  })
                  .start()
              }}
            />
          </Title>
          <Subtitle>
            <Typewriter
              options={{
                delay: 50,
                cursor: ''
              }}
              onInit={(typewriter) => {
                subTitle.current = typewriter
                typewriter.changeCursor('|').typeString(`Full-Stack Developer`)
              }}
            />
          </Subtitle>
        </LandingContent>
        <DecorativeCircles>
          {[0, 0, 0, 0].map((_, i) => (
            <div key={i}>
              {new Array(1).fill().map((_, i) => (
                <DecorativeCircle key={i} opacity={i} />
              ))}
            </div>
          ))}
        </DecorativeCircles>
      </LandingContainer>
    </>
  )
}

export const Title = styled.div`
  font-size: 2em;
  /* padding-left: 75px; */
  color: white;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.monospace}, monospace;
`
export const Subtitle = styled.div`
  margin-top: 10px;
  font-size: 1em;
  color: white;
  text-align: center;
  /* padding-left: 80px; */
  font-family: ${(props) => props.theme.fonts.monospace}, monospace;
  position: relative;
  z-index: 1;

  .TypeWritter {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    width: 90%;
    height: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -10px;
    z-index: -1;
    background-color: ${(props) => props.theme.color.accent};
  }
`

export const LandingContent = styled.div`
  @media ${device.xs} {
    font-size: 24px;
  }

  @media ${device.md} {
    font-size: 32px;
  }

  @media ${device.lg} {
    font-size: 48px;
  }
`

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 80vh;
  width: 100%;
  overflow: hidden;
`

export const DecorativeCircles = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  right: 0px;
  width: 300px;
  overflow-x: hidden;
  // background-color: blue;
  text-align: right;
`

export const DecorativeCircle = styled.div`
  background-color: white;
  /* border-radius: 50%; */
  margin-bottom: 10px;
  display: inline-block;
  @media ${device.xs} {
    width: 0px;
    height: 0px;
  }

  @media ${device.sm} {
    width: 30px;
    height: 30px;
  }

  @media ${device.lg} {
    width: 35px;
    height: 35px;
  }
`
