import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`

    height: 70px;

    box-shadow: 0px 0px 4px 0 rgb(0 0 0 / 30%);

    margin-bottom: 36px;

    nav{
        height: 100%;

        margin-left: 36px;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
    }
`

export const StyledLink = styled(Link)`
    padding: 5px 23px;
    border: 1px solid rgba(0,0,0,0.2);
    color: rgba(0,0,0,0.8);
    border-radius: 8px;

    &:hover{
        border: 1px solid #1890ff;
        color: #1890ff;
    }

    &:focus{
        background-color: #1890ff;
        color: white;
    }
`