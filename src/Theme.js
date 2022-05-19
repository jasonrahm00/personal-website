import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#0053b3'
    },
    secondary: {
      main: '#a9193d'
    },
    common: {
      black: '#212529'
    }
  },
  typography: {
    h1: {
      fontSize: '2.25rem',
      textAlign: 'center',
      paddingBottom: '3rem'
    },
    h2: {
      fontSize: '2rem',
      marginBottom: '1rem'
    },
    h3: {
      fontSize: '1.75rem',
      marginBottom: '1rem'
    }
  }
});

export default Theme;