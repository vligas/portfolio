import styled from 'styled-components'
import React from 'react'

export function HomeSection(props) {
  return (
    <div>
      <TagTitle>{`<${props.title}>`}</TagTitle>
      {props.children}
      <TagTitle>{`</${props.title}>`}</TagTitle>
    </div>
  )
}

const TagTitle = styled.div`
  margin-left: 20px;
  font-size: 2rem;
  color: ${(props) => props.theme.color.blue};
  font-family: ${(props) => props.theme.fonts.monospace}, monospace;
`
