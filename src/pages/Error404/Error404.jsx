import React from 'react'
import { styled } from 'styled-components'

export default function Error404() {
  return (
    <Error404Styled>
      <h1>Sorry, this page cannot be found!</h1>
    </Error404Styled>
  )
}


const Error404Styled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 50px);
`