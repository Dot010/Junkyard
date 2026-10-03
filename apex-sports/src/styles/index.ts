import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  colors: {
    background: '#1E1926',
    cardBg: '#2B2B2B',
    cardHover: '#3B3B3B',
    primary: '#A259FF',
    secondary: '#00cec9',
    textPrimary: '#FFFFFF',
    textSecondary: '#A1A1AA',
    border: '#3B3B3B'
  },
  borderRadius: {
    card: '20px',
    button: '12px'
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    padding-bottom: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`
