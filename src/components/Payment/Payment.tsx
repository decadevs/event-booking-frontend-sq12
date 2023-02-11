import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import InputField from "../../components/InputField/InputField";
import Dropdown from "../../components/Drop_Down/DropDown";
import { SelectChangeEvent } from "@mui/material";
import Buttons from "../../components/Buttons/Buttons";

// const Dropdown = styled(Form)
export default function App() {
    const [selectedVal, setSelectedVal] = useState('')
    const [valued, setValued] = useState()


    const changeValued = (selectedVal: any) => {

        // alert(selectedVal)
        if (selectedVal === "Paystack") {
            alert('we  move from here ')
        }
        // console.log(valued)


    }

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
        <div style={{}}>
            <Card style={{

                width: 500,
                height: 300,
                backgroundColor: "yellow",
            }}>
                <CardContent>

                    <h2 className="payment-type"> Payment Type
                    </h2>
                    <p className="payment-option">Select from the options your preferred payment option.
                    </p>

                    <div className="payment-card">
                        <h4 className="payment-typeB">Payment Type</h4>

                        <Dropdown
                            id={""}
                            title={""}
                            label={"Select"}
                            options={options}
                            onChange={handleChange}
                            value={undefined}
                            placeholder={"Select"}
                            boxSx={{ mt: 1, mb: 5 }}

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



