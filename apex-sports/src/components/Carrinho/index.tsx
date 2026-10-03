import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remover } from '../../store/reducers/carrinho'
import { paraReal } from '../Produto'
import * as S from './style'

type Props = {
  onClose: () => void
}

const Carrinho = ({ onClose }: Props) => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const dispatch = useDispatch()

  const valorTotal = itens.reduce((acc, item) => {
    return (acc += item.preco)
  }, 0)

  return (
    <S.CartContainer onClick={onClose}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            alignSelf: 'flex-end',
            marginBottom: '16px'
          }}
        >
          ✕
        </button>

        <ul>
          {itens.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.imagem} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{paraReal(item.preco)}</span>
              </div>
              <button type="button" onClick={() => dispatch(remover(item.id))}>
                Remover
              </button>
            </S.CartItem>
          ))}
        </ul>

        <S.CartTotal>
          <span>Valor total:</span>
          <strong>{paraReal(valorTotal)}</strong>
        </S.CartTotal>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Carrinho
