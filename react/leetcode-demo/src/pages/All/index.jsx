import React from 'react'
import QuestionList from '../../components/QuestionList'
import Ad from '../../components/Ad'
import Nav from '../../components/nav'

import { Wrapper,Mainside,Rightside } from './style'
export default function All() {
  return (
    <Wrapper>
      <Mainside>
        <Nav/>
        <QuestionList/>
      </Mainside>
      <Rightside>
        <Ad/>
      </Rightside>
    </Wrapper>
  )
}
