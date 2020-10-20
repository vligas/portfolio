import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { BackgroundContainer } from './BackgroundContainer'
import rectangle from '../../../../../public/bg_rectangle.svg'
import circle from '../../../../../public/bg_circle.svg'
import triangle from '../../../../../public/bg_triangle.svg'
import { BackgroundImage } from './BackgroundImage'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export function Background(props) {
  const [scrollY, setScrollY] = useState(0)
  useScrollPosition(
    ({ currPos }) => {
      setScrollY(currPos.y)
    },
    [],
    undefined,
    true,
    1000
  )

  return (
    <BackgroundContainer>
      <Circle src={circle} top={scrollY}></Circle>
      <BackgroundImage src={rectangle}></BackgroundImage>
      <Triangle src={triangle}></Triangle>
      {props.children}
    </BackgroundContainer>
  )
}

const circleAnimation = keyframes`
 0% { transform: scale(1, 1) translate(0px, 0px); }
 50% { transform: scale(0.9, 0.9) translate(-25px, -100px); }
 100% { transform: scale(1, 1) translate(0px, 0px); }

`

const Circle = styled(BackgroundImage)`
  top: ${(props) => 45 + props.top}px;
  right: 1vw;
  animation-name: ${circleAnimation};
  animation-timing-function: ease-in-out;
  animation-duration: 6s;
  animation-iteration-count: infinite;
`

const triangelAnimation = keyframes`
 0% { transform: rotate(0deg); }
 50% { transform: rotate(-8deg); }
 100% { transform: rotate(0deg); }

`

const Triangle = styled(BackgroundImage)`
  top: 35vh;
  right: 20vw;
  animation-name: ${triangelAnimation};
  animation-timing-function: ease-in-out;
  animation-duration: 10s;
  animation-iteration-count: infinite;
`
