import React from 'react'
import './style.css'
import { Link } from '@material-ui/core'
import { AccountDetails, AccountHead, AccountLabel, accountStyles, InputDataDiv } from './account';
import Button from '../../components/Buttons/Buttons';

interface AccountInfoProps {
    accountName: string;
    accountNumber: string;
    bank: string;
}
const AccountInfo = () => {
    const accountClasses = accountStyles()

    const navigateToPaymentInfo = () => {
        window.location.href = '/payment-information'
    }
  return (
    <section className={accountClasses.acctContainer}>
        <div className={accountClasses.acctInfoContainer}>
            <div className={accountClasses.acctTitle}>
                <h2>Payment Information</h2>
            </div>
            <div className={accountClasses.accountInfoForm}>
                <InputDataDiv>
                    <AccountDetails>
                        <AccountLabel>
                            Account Name
                        </AccountLabel>
                        <AccountHead>
                            {'Michael Obasanjo'}
                        </AccountHead>
                    </AccountDetails>
                    <AccountDetails>
                        <AccountLabel>
                            Account Number
                        </AccountLabel>
                        <AccountHead>
                            {'3052678899'}
                        </AccountHead>
                    </AccountDetails>
                    <AccountDetails>
                        <AccountLabel>
                            Bank
                        </AccountLabel>
                        <AccountHead>
                            {'First Bank'}
                        </AccountHead>
                    </AccountDetails>
                    <Button 
                        content="Edit"
                        styleType = "primary"
                        height='3em'
                        width='5em'
                        onClick={navigateToPaymentInfo}
                        type='submit'
                     />
                </InputDataDiv>
            </div>
        </div>
    </section>
  )
}

export default AccountInfo;