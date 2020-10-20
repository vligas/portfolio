import styled from 'styled-components'

export const Hexagon = styled.div`
  color: ${(props) => props.color};
  position: relative;
  width: 125px;
  height: 72.17px;
  background-color: #ffffff;
  margin: 36.08px 0;
  border-left: solid 2px ${(props) => props.theme.color.primary};
  border-right: solid 2px ${(props) => props.theme.color.primary};

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 88.39px;
    height: 88.39px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 16.3058px;
  }

  &:before {
    top: -44.1942px;
    border-top: solid 2.8284px ${(props) => props.theme.color.primary};
    border-right: solid 2.8284px ${(props) => props.theme.color.primary};
  }

  &:after {
    bottom: -44.1942px;
    border-bottom: solid 2.8284px ${(props) => props.theme.color.primary};
    border-left: solid 2.8284px ${(props) => props.theme.color.primary};
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`
