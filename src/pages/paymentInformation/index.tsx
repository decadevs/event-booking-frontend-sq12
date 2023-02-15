import React from 'react'
import './style.css'
import { Link } from '@material-ui/core'
import { paymentStyles, TitleDiv, RedSpan, GraySpan, InputDataDiv, InputArea } from './payment';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Buttons/Buttons';

const PaymentInfo = () => {
    const [formData, setFormData] = React.useState<Record<string,any>>({});
    const paymentClasses = paymentStyles()

    const handleEventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
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
                            value=''
                            name='bank'
                            placeholder='Bank Name'
                            onChange={() => console.log('changed')}

                        />
                        <InputField
                            type="text"
                            label='Account Number'
                            id='accountInput'
                            value=''
                            name='account'
                            placeholder='Account Number'
                            onChange={handleEventChange}

                        />
                        <InputArea
                            type="text"
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
