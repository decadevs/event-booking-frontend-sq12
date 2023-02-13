import styled from "styled-components";
export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
export const Selected = styled.select`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background: white;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%;
  padding-right: 1rem;
  background-size: 1.65rem auto;
  @media (max-width: 768px) {
    width: 250px;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-right: 2rem;
  label{    
    color:white;    
    font-size:10px;   
     margin-bottom:6px;    
     line-height:10px;    
     font-weight:150;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    padding: 0 5%;
  }
`;
