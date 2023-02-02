import React, {useContext} from "react"
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--white);
    justify-content: space-between;
    background-color: var(--primary);
    padding: 10px

`

export const Dasboard: React.FC = () => {
   const user = import.meta.env.VITE_SOME_KEY
return (
    <Container>
        <h2> Hello  {user} </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere id omnis fuga, 
            asperiores neque nemo accusamus? Odit, voluptatum dignissimos.</p>
    </Container>
)
}