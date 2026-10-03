import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import Produtos from './containers/Produtos'
import Carrinho from './components/Carrinho'

import { GlobalStyle, darkTheme } from './styles'
import { store } from './store'
import Banner from './components/Banner'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [estaberto, setEstaberto] = useState(false)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header onOpenCart={() => setEstaberto(true)} />
        {estaberto && <Carrinho onClose={() => setEstaberto(false)} />}
        <div className="container">
          <Banner />
          <Produtos produtos={produtos} />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
