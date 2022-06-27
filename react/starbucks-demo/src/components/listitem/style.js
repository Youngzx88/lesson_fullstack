import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`

export const GoodWrapper = styled.div`
  width: 43%;
  height: 215px;
  box-sizing: border-box;
  margin: 13px;
  padding: 3px;
  display: inline-block;
  .good{
    
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }
  img{
    width: 100%;
    height: calc(width);
    border-radius: 50%;
  }
  .name{
    left: 28%;
    text-align: center;
    letter-spacing:2px;
    font-weight: 400;
  }
  
`