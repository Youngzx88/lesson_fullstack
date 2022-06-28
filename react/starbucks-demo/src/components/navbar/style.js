import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 80%;
  height: 80px;
  font-family: "Gotham", Helvetica, Arial, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  .nav-title{
    font-weight: 700;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 12px;
  }
  .subcategories{
    width: 100%;
    font-size: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    -webkit-overflow-scrolling: touch;
    margin-bottom: -12px;
    white-space: nowrap;
    width: 100%;
    margin: 0;
  }
  li{
    display: inline-block;
    padding-top: 12px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 3px;
    margin-right: 18px;
    &.active{
      border-bottom: 3px solid rgb(0, 168, 98);
      color: rgba(0, 0, 0, 0.87);
      font-weight: 700;
      transition: all 0.2s;
    }
  }
  
`