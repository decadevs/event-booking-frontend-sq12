import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../../components/InputField/InputField";
import Button from "../../../components/Buttons/Buttons";
import { styledPayments } from "./style";
import "./style.css";
import { SelectChangeEvent } from "@mui/material";
import Dropdown from '../Dropdown';
import { PlaylistAddCheck } from "@mui/icons-material";

const  PaymentTypePage: React.FC = () => {
    const payments = styledPayments();
    const options = ['Select', 'Paystack', 'Flutterwave', 'Bank Transfer', 'Online Payment'];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const pay = () => {
        window.location.href = '/payment-type'
      }
    return(
        <div>
            <div className={payments.mainContainer}>
                <div className={payments.secondContainer}>
                    <p className={payments.type}>Payment Type</p>
                    <p className={payments.select}>Select from the options your prefered payment option</p>
                    <p className={payments.type2}>Payment Type</p>
                </div>
                   <Dropdown
                    options={options}
                    selectedOption={selectedOption}
                    onOptionSelect={setSelectedOption}
                    />
                    <div className= {payments.btn}>
              <button className={payments.payBtn} onClick={pay}>Pay</button>
            </div>
            </div>
        </div>
    )

}

export default PaymentTypePage;