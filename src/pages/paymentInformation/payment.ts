import { makeStyles, styled } from "@material-ui/core/styles";

export const paymentStyles = makeStyles((theme) => ({
    primeContainer: {
        background: '#E5E5E5',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        // position: 'relative',
        width: '100%',
        height: '100vh',
    },
    paymentInfoContainer: {
        display: 'flex',
        // flexDirection: 'column',
        width: '100%',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentJustifier: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginBottom: '5%',
        // alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    paymentLink: {
        textAlign: 'end',
    },
    accountInfoForm: {
        height: '80%',
        display: 'flex',
        // padding: '2em 0 2em 0',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: '#fff',
        border: '1px solid #E5E5E5',
    },
    paymentTitle: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '0 0 2.5em 0',
        '& h2': {
            fontSamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '2em',
            letterSpacing: '0.25px',
            color: '#252D42',

        }
    },
    bankInput: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '2em !important',
        lineHeight: '1.7em !important',
        color: '#252D42',
    },
    accountInput: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '2em !important',
        lineHeight: '1.7em !important',
        color: '#1248d2',
    }
    
}))

export const TitleDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
});

export const GraySpan = styled('span')({
    color: '#A9A9A9',
    fontSize: '1em',
    fontWeight: 400,
    fontStyle: 'normal',
    fontFamily: 'Inter sans-serif', 
    lineSpacing: '0.01em',
});
export const RedSpan = styled('span')({
    color: '#FF5722',
    fontSize: '1em',
    fontWeight: 400,
    fontStyle: 'normal',
    fontFamily: 'Inter sans-serif', 
    lineSpacing: '0.01em',
});
export const AcctTitle = styled('span')({
    color: '#252D42',
    fontSize: '2em',
    fontWeight: 700,
    fontStyle: 'normal',
    fontFamily: 'Inter sans-serif', 
    lineSpacing: '0.02em',
});

export const InputDataDiv = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'space-between',
    gap: '3em',
    height: '100%',
    margin: '5% 0 5% 0',
});
export const InputArea = styled('input')({
    display: 'flex',
    padding: '0.5em',
    // flexDirection: 'column',
    width: '100%',
    background: '#FEFBE8',
    height: '3em',
    fontSize: '1em',
    fontWeight: 400,
    fontStyle: 'normal',
    fontFamily: 'Manrope sans-serif',
    color: '#252D42',
    border: 'none',
    borderRadius: '0.5em',
});
