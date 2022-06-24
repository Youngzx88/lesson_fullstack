import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 80.391px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    .display-1{
        font-size: 22px;
        font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        font-weight: 700;
        margin-bottom: 12px;
    }

    .tabs-wrapper{
        display: flex;
        a {
        padding-top: 12px;
        padding-bottom: 3px;
        margin-right: 18px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        color: #0000008F;
        &.active {
            border-bottom: 3px solid #00A862;
            color: rgba(0, 0, 0, 0.87);
            font-weight: 700;
            padding-bottom: 3px;
        }
        i{
            font-size: 1.5em;
        }
    }
    }
`