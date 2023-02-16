import { makeStyles, styled } from "@material-ui/core/styles";

export const accountStyles = makeStyles((theme) => ({
    acctContainer: {
        background: '#E5E5E5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        // position: 'relative',
        // marginTop: '15%',
    },
    acctInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        height: '70%',
        alignItems: 'center',
        padding: '0 5% 0 5%',
    },
    accountInfoForm: {
        height: '100%',
        display: 'flex',
        // padding: '0 0 2em 0',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: '#fff',
        border: '1px solid #E5E5E5',
        marginBottom: '10%',
        marginTop: '2%',
    },
    acctTitle: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '0 0 0 0',
        '& h2': {
            fontSamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '2em',
            letterSpacing: '0.25px',
            color: '#252D42',
        }
    },
}))

export const AcctTitle = styled('span')({
    color: '#252D42',
    fontSize: '2em',
    fontWeight: 700,
    fontStyle: 'normal',
    fontFamily: 'Inter sans-serif', 
    lineSpacing: '0.02em',
});

export const InputDataDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    position: 'relative',
    // justifyContent: 'space-between',
    alignItems: 'center',
    gap: '4em',
    height: '100%',
    margin: '5% 0 5% 0',
    '& Button': {
        position: 'absolute',
        right: '0',
    },
});
export const AccountDetails = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: '',
});
export const AccountLabel = styled('span')({
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1em',
    letterSpacing: '0.01em',
    color: '#98A2B3',
    
});
export const AccountHead = styled('span')({
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.5em',
    color: '#101828',
});
