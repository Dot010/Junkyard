import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      cardBg: string
      cardHover: string
      primary: string
      secondary: string
      textPrimary: string
      textSecondary: string
      border: string
    }
    borderRadius: {
      card: string
      button: string
    }
  }
}
