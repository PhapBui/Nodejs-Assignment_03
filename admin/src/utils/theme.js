import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { responsiveFontSizes } from '@mui/material';

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#0a68ff',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
          '& *::-webkit-scrollbar': {
            borderRadius: 0,
            width: '8px',
          },
          '& *::-webkit-scrollbar-thumb': {
            borderRadius: '4px',
            backgroundColor: 'rgba(22, 24, 35, 0.16)',
          },
          '& *::-webkit-scrollbar-track': {
            borderRadius: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        'ul,li,ol': {
          listStyle: 'none',
        },
        'button,input,optgroup,select,textarea': {
          padding: '0',
          border: 'none',
          font: 'inherit',
          color: 'inherit',
          backgroundColor: 'transparent',
          wordBreak: 'normal',
          lineHeight: 0.6,
        },
        span: {
          fontSize: '14px',
          lineHeight: 'normal',
          fontWeight: 'inherit',
        },
        '.flex': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.flex-item': {
          alignItems: 'center',
          display: 'flex',
          flexBasis: 'auto',
          flexGrow: '0',
          flexShrink: '0',
          justifyContent: 'center',
        },
        'img,video': {
          height: 'auto',
          width: '100%',
        },
        '.MuiSelect-select ':{
          whiteSpace:"pre-wrap"
        }
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export let cssVariables = {
  width: {
    sidebar: '240px',
    playlist: '330px',
    logo: '120px',
  },
  height: {
    player: '90px',
    header: '70px',
  },
  padding: {
    paddingSection: '59px',
  },
  color: {
    icons:"#7451f8",

    statusText:"#0d9b0d",
    

    sidebarText:"#938b88"
  },
  border: {
    color: {
      primary: 'hsla(0,0%,100%,0.1)',
      secondary: ' hsla(0,0%,100%,0.05)',
      borderBox: 'hsla(0,0%,100%,0.2)',
    },
  },
  boxShadow:{
    card: "1px 1px 6px 2px #ccc",
  },
  margin: {
    topSection: '48px',
  },
  iconSize: {
    small: '14px',
    normal: '20px',
    player: '45px',
  },
};

theme = responsiveFontSizes(theme);
