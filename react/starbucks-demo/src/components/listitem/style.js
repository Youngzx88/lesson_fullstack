import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`

export const GoodWrapper = styled.div`
  width: 50%;
  box-sizing: border-box;
  margin: 10px;
  padding: 3px;
  display: flex;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;

  }
  .name{
    left: 28%;
    text-align: center;
    letter-spacing:2px;
    font-weight: 400;
  }
`