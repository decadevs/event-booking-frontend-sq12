import React from "react"
import styled from 'styled-components';

const Main = styled.div`
  display: flex
  right: 10rem;
  text-align: left;
  aligh-items: left;
  justify-content: center;
  justify-content: flex-end;
  margin: 0 auto;


    .contain-text{
        margin-bottom: -0.5rem;
        margin-left: 1.7rem;
        font-size: 1.2rem;
        border: .0px solid #E5E9E9;
        font-weight: 550;

        
    
    }
    .input-btn{
        width: 40vw;
        overflow: hidden;
        height: 3.5rem;
        margin-left: 01.5px;
        border: 0.5px solid black;
        background-color: #E5E9E9;
    }

    .container{
        position: absolute;
        right: 5rem;
        top: 5rem;
        margin: 2rem;
        background-color: #E5E9E9 ;
    padding: 10px;
    width: 35vw;
    
   .summary{
     padding: 10px 0 10px 25px;
     font-size: 1.5rem;
   }
   .attend{
    padding: 25px 0 10px 25px;
    & h3{
        font-size: 1.3rem;
        font-weight: 500;
    }
   }
    .date-container{
        padding: 25px 0 25px 25px;
        
    }
    .date-sub-container{
        display: flex;
        gap: 4rem;
        & span{
            font-size: 1.2rem;
            font-weight: 500;
            margin-top: 0.8rem;
        }
        
    }
    .type-container{
        padding: 25px 0 25px 25px;
    }
   .total-amount{
    padding: 35px 0 25px 10px;
   }
   .total-container{
         display: flex;
            justify-content: space-between;
            padding: 0 25px 0 35px;
            & span{
                font-size: 1.8rem;
                font-weight: bold;
            }
   }

   .total {
    margin-left: -1.3rem;
   }
    .btn{
        background-color: red;
        width: 95%;
        outline: none;
        border: none;
        margin-left: 0.5rem;
        padding: 10px 10px;
       margin-top: 2rem;
       color: white;
       font-size: 1.5rem;
       font-weight: bolder;
       align-items: center;
    }



`



export const Demo: React.FC = () => {
return (
   <Main>
        <div className="container">

            <h4 className="summary">Ticket Summary</h4>
            <hr/>
            <div className="attend">
                <span>Attendee</span>
                <h3>1 x Attendee</h3>

            </div>
            <hr/>
            <div className="date-container">
                <span>Date/Time</span>
                <div className="date-sub-container">
                <span>20th Jan 2022 </span>
                 <span>04:00PM</span>
                </div>

            </div>
            <hr/>
            <div className="type-container">
                <span>Type</span>
                <h3>Regular</h3>

            </div>
            <hr/>
            <div className="total-amount">
               <div className="total-container">
               <span className="total">Total</span>
                <span className="amount">N5,000</span>
               </div>

               <div>
               <button type="submit" className="btn btn-primary">Buy Ticket</button>
               </div>
            </div>
        </div>
        </Main>
)
}