import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import PaystackPop from '@paystack/inline-js'
import PaystackPop from '@paystack/inline-js'

import { SelectChangeEvent } from "@mui/material";
import Dropdown from "../Drop_Down/DropDown";
import Buttons from "../Buttons/Buttons";




// const Dropdown = styled(Form)
export default function App() {
    const [selectedVal, setSelectedVal] = useState('')
    const [valued, setValued] = useState()


    const changeValued = (selectedVal: any,) => {
        // e.preventDefault();

        // alert(selectedVal)
        if (selectedVal === "Paystack") {
            let paystack = new PaystackPop()
            paystack.newTransaction({
                key: "pk_test_f6c0cac5e4c9c3c53f15171d570d8376e758fd66",
                // email,
                // firstName,
                // lastName,
                // amount,
                onSuccess(transaction: any) {
                    let message = `Payment completed!, Reference ${transaction.reference}`
                    alert(message)
                },
                onCancel() {
                    alert(`You have cancelled payment`)
                }
            })
        }
    }
    // console.log(valued)




    const handleChange = (e: any) => {
        setSelectedVal(e.target.value)
        console.log(selectedVal)
    }
    const options = [
        { label: 'Paystack', value: 'Paystack' },
        { label: 'Flutterwave', value: 'Fluttterwave' },
        { label: 'Bank Transfer', value: 'Bank' },
        { label: 'Online Payment', value: 'Online' }
    ]
    return (
        <div style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            marginTop: 10
        }}>
            <Card style={{

                // width: 500,
                height: 300,
                backgroundColor: "#C4C4C4",
                boxShadow: "10px 10px 5px 5px rgba(78,0,0,0.2)",
                // margin: 40
            }}>
                <CardContent>
                    <div className="payment-writeup">
                        <h2 className="payment-type" style={{ paddingBottom: 15 }}> Payment Type
                        </h2>
                        <p className="payment-option" style={{ paddingBottom: 10 }}>Select from the options your preferred payment option.
                        </p>
                    </div>

                    <div className="payment-card">
                        <h4 className="payment-typeB">Payment Type</h4>

                        {/* <Dropdown
                            id={""}
                            title={""}
                            label={"Select"}
                            options={options}
                            onChange={handleChange}
                            value={undefined}
                            placeholder={"Select"}
                            boxSx={{ mt: 1, mb: 5 }}

                        /> */}
                        <Dropdown
                            label={""}
                            value={""}
                            options={options}
                            onChange={handleChange}
                            boxSx={{ mt: 1, mb: 5, }}
                            formSx={{ minWidth: 469 }}


                        />
                        <Buttons
                            content={"Pay"}
                            height={""}
                            width={"469px"}
                            type={'submit'}
                            onClick={() => changeValued(selectedVal)} />
                    </div>

                </CardContent>

            </Card>
        </div >);
}



