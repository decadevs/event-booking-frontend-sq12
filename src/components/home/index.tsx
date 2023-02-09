import React from "react"
import styled from 'styled-components';

const Main = styled.div`
    background-color: var(--secondary);
    padding: 10px;
   
    width:100%;

`

export const Demo: React.FC = () => {
return (
    <Main>
        <h2> Hello BookR</h2>
    </Main>
)
}