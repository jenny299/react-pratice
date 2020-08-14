import { makeStyles } from "@material-ui/styles";
export default () =>
	makeStyles({
        signInWrapper: {
            backgroundColor: '#FFF',
            textAlign: 'center',
           
        },
        signInForm: {
            border: '1px solid #f1f1f1',
            width: '50%',
            maxWidth: 400,
            margin: 'auto',
            textAlign: 'center',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            "& button": {
                marginTop: 20,
                maxWidth: 100,
                margin: 'auto'
            },
        }
	});
