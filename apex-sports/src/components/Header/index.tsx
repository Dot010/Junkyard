import { useSelector } from 'react-redux'
import { FaHeart } from 'react-icons/fa'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'
import { Produto } from '../../App'

type Props = {
  onOpenCart: () => void
}

const Header = ({ onOpenCart }: Props) => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )

  const valorTotal = itens.reduce((acc: number, item: Produto) => {
    return acc + item.preco
  }, 0)

  const IconeCoracao = FaHeart as React.ElementType

  return (
    <S.Header>
      <S.HeaderContent>
        <h1>Apex Sports</h1>
        <div>
          <S.ItemCabecalho>
            <IconeCoracao />
            <span>{itensFavoritos.length} favoritos</span>
          </S.ItemCabecalho>

          <S.ItemCabecalho onClick={onOpenCart} style={{ cursor: 'pointer' }}>
            <img src={cesta} alt="Cesta" />
            <span>
              {itens.length} itens, valor total: {paraReal(valorTotal)}
            </span>
          </S.ItemCabecalho>
        </div>
      </S.HeaderContent>
    </S.Header>
  )
}

export default Header
