import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface INavBarItemProps {
  selected?: boolean
}

export const NavBarItem = styled.li`
  color: white;
  cursor: pointer;
  &.active {
    background-color: ${({ theme }) => theme.color.dark};
    color: ${({ theme }) => theme.color.primary};
  }
  transition: all 0.5s ease-out;
  list-style: none;
  text-decoration: none;
  margin: 0 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  padding: 0.8rem 0.8rem;
  border: 2px solid;
  border-radius: 25px;
  border-color: white;
  min-width: 50px;
  font-size: 1.1rem;
  text-align: center;
`
