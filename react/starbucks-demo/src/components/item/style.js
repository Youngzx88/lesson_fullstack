import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`
export const Card = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 200px;
  padding: 20px;
  .title{
    color: rgba(0, 0, 0, 0.56);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1;
    text-transform: uppercase;
    top: 0;
    left: 0;
    width: 100%;
  }
  .preview{
    margin: 16px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 12%);
    background-image: url(https://www.starbucks.com.cn/images/products/affogato.jpg);
    background-size: cover;
  }
  .circle{

  }
`