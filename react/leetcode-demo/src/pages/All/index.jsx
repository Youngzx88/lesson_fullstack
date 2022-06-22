import React from 'react'
import QuestionList from '../../components/QuestionList'
import Ad from '../../components/Ad'
import Nav from '../../components/nav'

import { Wrapper,Left_side,Right_side } from './style'
export default function All() {
  return (
    <Wrapper>
        <Left_side>
            <QuestionList/>
        </Left_side>
        <Right_side>
            <Ad/>
        </Right_side>
    </Wrapper>
  )
}
