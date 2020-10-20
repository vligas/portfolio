import styled, { css } from 'styled-components'
import React, { useState } from 'react'

import { NavBarList } from './NavBarList'
import { NavBarItem } from './NavBarItem'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import { device } from '../../../../devices'
import useMedia from 'use-media'
import { CgMenu, CgMenuRound } from 'react-icons/cg'
import { Link } from 'react-scroll'

export function Nav() {
  const [whiteNavbar, setWhiteNavbar] = useState(false)
  const isMobile = !useMedia(device.sm)

  useScrollPosition(
    ({ currPos }) => {
      setWhiteNavbar(currPos.y > 100)
    },
    undefined,
    undefined,
    true
  )

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <NavBar scroll={whiteNavbar}>
      <Link to="landing" smooth>
        Victor Ligas
        <br />
        Portfolio
      </Link>
      {isMobile ? (
        <MobileMenu white={whiteNavbar}>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <CgMenuRound />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="about" offset={-75} smooth>
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="projects" offset={-50} smooth>
                Projects
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="contact" smooth>
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </MobileMenu>
      ) : (
        <NavBarList>
          <NavBarItem>
            <Link to="about" offset={-75} smooth>
              About
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link to="projects" offset={-50} smooth>
              Projects
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link to="contact" smooth>
              Contact
            </Link>
          </NavBarItem>
        </NavBarList>
      )}
    </NavBar>
  )
}

export const MobileMenu = styled.div`
  button {
    color: ${(props) => (!props.white ? 'white' : props.theme.color.primary)};
    /* font-size: 1em; */
  }
`

export const NavBar = styled.nav`
  display: flex;
  position: sticky;
  z-index: 100;
  top: 0;
  border-bottom: 3px solid transparent;
  color: ${({ theme, scroll }) => (!scroll ? '#fff' : theme.color.primary)};
  justify-content: space-between;
  transition: background-color 0.25s linear;
  padding: 20px 20px;
  background-color: ${({ theme, scroll }) => (scroll ? '#fff' : theme.color.primary)};

  ${(props) =>
    props.scroll &&
    css`
      border-bottom-color: ${({ theme }) => theme.color.primary};
      ${NavBarItem} {
        border-color: 'white';
        color: ${(props) => props.theme.color.primary};
      }
    `}
`
