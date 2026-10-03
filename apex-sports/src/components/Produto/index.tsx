import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart } from 'react-icons/fa'

import { Produto as ProdutoType } from '../../App'
import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favoritos'
import { RootReducer } from '../../store'
import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const estaNosFavoritos = favoritos.some((f) => f.id === produto.id)

  const IconeCoracao = FaHeart as React.ElementType

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>

      <S.Conteudo>
        <S.Titulo>{produto.nome}</S.Titulo>
        <S.Prices>
          <strong>{paraReal(produto.preco)}</strong>
        </S.Prices>
      </S.Conteudo>

      <S.BotoesContainer>
        <S.BtnComprar
          onClick={() => dispatch(adicionar(produto))}
          type="button"
        >
          Adicionar ao Carrinho
        </S.BtnComprar>

        <S.BtnFavorito
          $ativo={estaNosFavoritos}
          onClick={() => dispatch(favoritar(produto))}
          type="button"
          aria-label={
            estaNosFavoritos
              ? 'Remover dos favoritos'
              : 'Adicionar aos favoritos'
          }
        >
          <IconeCoracao />
        </S.BtnFavorito>
      </S.BotoesContainer>
    </S.Produto>
  )
}

export default ProdutoComponent
