import React from 'react'
import './style.css'
import { Link } from '@material-ui/core'
import { paymentStyles, TitleDiv, RedSpan, GraySpan, InputDataDiv, InputArea } from './payment';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Buttons/Buttons';

const PaymentInfo = () => {
    const [formData, setFormData] = React.useState<Record<string,any>>({});
    const [bank, setBank] = React.useState<string>('');
    const [accountNumber, setAccountNumber] = React.useState<string>('');
    const paymentClasses = paymentStyles()

    const handleBankChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBank(event.target.value)
    }
    const handleAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountNumber(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.alert('Form submitted')
    }
  return (
    <section className={paymentClasses.primeContainer}>
        <div className={paymentClasses.paymentInfoContainer}>
            <div className={paymentClasses.contentJustifier}>
                <div className={paymentClasses.paymentTitle}>
                    <h2>Payment Information</h2>
                    <TitleDiv>
                        <GraySpan>Please input all information correctly</GraySpan>
                        <Link className={paymentClasses.paymentLink} href='/account-information'><RedSpan>View Account information</RedSpan></Link>
                    </TitleDiv>
                </div>
                <div className={paymentClasses.accountInfoForm}>
                    <InputDataDiv>
                        <InputField
                            type="text"
                            label='Bank'
                            id='bankInput'
                            value={bank}
                            name='bank'
                            placeholder='Bank Name'
                            onChange={handleBankChange}

                        />
                        <InputField
                            type={"text"}
                            label='Account Number'
                            id='accountInput'
                            value={accountNumber}
                            name='account'
                            placeholder='Account Number'
                            onChange={handleAccountChange}

                        />
                        <InputArea
                            type={"text"}
                            value={'Michael Obasanjo'}
                            name='name'
                            placeholder=''
                            onChange={() => {}}
                            disabled

                        />
                        <Button 
                            content="Save"
                            styleType = "primary"
                            height='4em'
                            width='100%'
                            type='submit'
                            onClick={handleSubmit}
                        />
                    </InputDataDiv>
                </div>
           </div>
        </div>
    </section>
  )
}

export default PaymentInfo;
