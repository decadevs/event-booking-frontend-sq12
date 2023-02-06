import { createTheme } from '@material-ui/core/styles'
const PRIMARY_COLOR = '#10375C';
const SECONDARY_COLOR = '#FF5722';
const SECONDARY_COLOR_LIGHT = "rgba(255, 87, 34, 0.1)";
const FONT_SM = 13;
export const theme = createTheme({
	typography: {
		fontFamily: 'Open Sans, sans-serif',
		fontSize: 16,
		button: { textTransform: 'none', letterSpacing: 0, fontWeight: 'bold' },
	},
	overrides: {
		MuiFormControl: { root: { marginBottom: '15px' } },
		MuiInput: {
			input: { fontWeight: 'bold' },
			underline: {
				'&:before': { borderBottom: '1px solid #d5dfee' },
				'&:after': { borderBottom: `3px solid ${PRIMARY_COLOR}` },
				'&:hover:not($disabled):not($focused):not($error):before': {
					borderBottom: `1px solid ${PRIMARY_COLOR}`,
				},
			},
		},
		MuiFormLabel: {
			root: {
				color: SECONDARY_COLOR,
				fontSize: '18px',
				paddingLeft: '5px',
				'&$focused': { paddingLeft: '5px', color: SECONDARY_COLOR },
			},
			asterisk: { color: 'transparent' },
		},
		MuiTypography: { h4: { fontSize: '2rem', fontWeight: 'bold' } },
	},
	palette: {
		primary: { main: PRIMARY_COLOR },
		secondary: { main: SECONDARY_COLOR },
		gradient: {
			start: (opacity) => `rgb(58 141 255 / ${opacity || 100}%)`,
			end: (opacity) => `rgb(134 185 255 / ${opacity || 100}%)`,
		},
	},
});
