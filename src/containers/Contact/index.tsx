import { device } from '../../devices'
import React from 'react'
import { CgPhone } from 'react-icons/cg'
import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from 'react-icons/si'
import styled from 'styled-components'
import useMedia from 'use-media'
import { useVisibleAnimation } from '../../utils/useVisibleAnimation'
import { motion } from 'framer-motion'

export function Contact(props) {
  const isSm = useMedia(device.sm)
  const isLg = useMedia(device.lg)
  const dotNumber = isLg ? 30 : isSm ? 15 : 1

  const [controls, ref] = useVisibleAnimation()

  return (
    <ContactContainer id="contact">
      <div>
        <ContactTitle>Contact Me</ContactTitle>
        <ContactList>
          <ContactListItem>
            <SiGmail color="red" />
            <span>vligin2@gmail.com</span>
          </ContactListItem>
          <ContactListItem href="https://t.me/vligas" target="_blank">
            <SiTelegram color="#0088CC" />
            <span>t.me/vligas</span>
          </ContactListItem>
          <ContactListItem>
            <CgPhone color="grey" />
            <span>+58 412 0418010</span>
          </ContactListItem>
          <ContactListItem href="https://www.linkedin.com/in/victorligas" target="_blank">
            <SiLinkedin color="#0e76a8" />
            <span>linkedin.com/in/victorligas/</span>
          </ContactListItem>
          <ContactListItem href="https://github.com/vligas" target="_blank">
            <SiGithub />
            <span>@vligas</span>
          </ContactListItem>
        </ContactList>
      </div>
      <DecorativeCircles
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ when: 'beforeChildren' }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        {new Array(5).fill(0).map((_, i) => (
          <div key={i}>
            {new Array(dotNumber).fill(0).map((_, i) => (
              <DecorativeCircle
                key={i}
                opacity={10 - i}
                initial="hidden"
                custom={i}
                // transition={{ duration: 2 }}
                variants={{
                  visible: (custom) => ({ scale: 1, transition: { delay: 0.1 * custom } }),
                  hidden: { scale: 0 }
                }}
              />
            ))}
          </div>
        ))}
      </DecorativeCircles>
    </ContactContainer>
  )
}

export const ContactContainer = styled.div`
  background-color: white;
  /* padding-right: 240px; */
  position: relative;
  display: flex;

  @media ${device.xs} {
    padding: 50px 10px;
    font-size: 18px;
    flex-direction: row;
    justify-content: center;
  }

  @media ${device.sm} {
    padding: 50px 10px;
    font-size: 24px;
    padding-right: 40px;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }

  @media ${device.lg} {
    padding: 50px 10px;
    font-size: 28px;
    padding-right: 160px;
  }

  /* overflow-y: hidden; */
  /* overflow: hidden; */
  //   justify-content: space-between;
`

export const ContactTitle = styled.h2`
  font-size: 1.5em;
  position: relative;
  display: inline;
  z-index: 2;
  &::before {
    content: '';
    width: 100%;
    height: 10px;
    background-color: ${(props) => props.theme.color.accent};
    position: absolute;
    left: 0;
    bottom: -10px;
    z-index: -1;
  }
`

export const ContactList = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-top: 20px;
`

export const ContactListItem = styled.a`
  /* dispaly: flex; */
  display: block;
  align-items: center;
  font-size: 1em;
  margin-top: 10px;
  text-decoration: inherit;
  color: inherit;

  &:visited {
    text-decoration: inherit;
    color: inherit;
  }

  span {
    font-size: 1em;
    margin-left: 10px;
  }
`

export const DecorativeCircles = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  /* width: 100%; */
  overflow-y: hidden;
  text-align: left;
`

export const DecorativeCircle = styled(motion.div)`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.color.primary};
  margin-right: 20px;
  margin-bottom: 5px;
  display: inline-block;
  position: relative;
  z-index: 0;
`
