import { createTheme } from '@mui/material/styles';

const colors = {
  primary: '#0053b3',
  secondary: '#a9193d',
  black: '#212529'
}

const Theme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    common: {
      black: colors.black
    }
  },
  typography: {
    h1: {
      fontSize: '2.25rem',
      textAlign: 'center',
      paddingBottom: '3rem',
      color: colors.black
    },
    h2: {
      fontSize: '2rem',
      marginBottom: '1rem',
      color: colors.black
    },
    h3: {
      fontSize: '1.75rem',
      marginBottom: '1rem',
      color: colors.black
    }
  }
});

export default Theme;
