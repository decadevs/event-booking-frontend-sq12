import React from "react"
import styled from 'styled-components';
import EventSearch from '../search/index';

const Main = styled.div`
    // background-color: var(--secondary);
    // padding: 10px;
    // width:100vw

`

export const Demo: React.FC = () => {
return (
    <Main>
        <EventSearch />
    </Main>
)
}