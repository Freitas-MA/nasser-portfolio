import React from 'react'
import { styled } from 'styled-components'

import { Background } from "../../components/index";

export default function Error404() {
  return (
    <Error404Styled>
      <Background />
      <Content>
        <Title>Sorry, this page cannot be found!</Title>
        <Subtitle>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</Subtitle>
        <Button href="/">Return to homepage</Button>
      </Content>
    </Error404Styled>
  )
}

const Error404Styled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: gray;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: sans-serif;
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: sans-serif;
`

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 2rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-family: sans-serif;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`