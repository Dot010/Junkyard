import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((produto) => produto.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },

    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer
