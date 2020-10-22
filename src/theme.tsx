import { createGlobalStyle } from 'styled-components'
import OpenSans from '../public/fonts/OpenSans-Regular.ttf'
import Inconsolata from '../public/fonts/Inconsolata-Regular.ttf'

export interface ITheme {
  color: {
    primary: string
    accent: string
    secondary: string
    dark: string
    white: string
    blue: string
  }
  fonts: {
    body: string
    heading: string
    monospace: string
  }
  navBarHeight: number
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export const theme: ITheme = {
  color: {
    primary: '#6B68FF',
    accent: '#A8DADC',
    secondary: '#E63946',
    dark: '#333333',
    blue: '#6B68FF',
    white: '#ffffff'
  },

  fonts: {
    body: 'OpenSans',
    heading: 'Alata',
    monospace: 'Inconsolata'
  },
  navBarHeight: 100
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: OpenSans;
    src: url(${OpenSans}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Inconsolata;
    src: url(${Inconsolata}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: "OpenSans";
    background-color: ${theme.color.blue};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
   
  ::-webkit-scrollbar-track {
    background: ${theme.color.primary};
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.accent}; 
  }
`

export default GlobalStyle
