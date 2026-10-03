import styled from 'styled-components'

export const Produto = styled.div`
  background-color: ${(props) => props.theme.colors.cardBg};
  border-radius: ${(props) => props.theme.borderRadius.card};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

export const Capa = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: fill;
  }
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;

  margin: 0;
`

export const Prices = styled.div`
  font-size: 14px;

  strong {
    font-size: 16px;
    font-weight: bold;
  }
`

export const BotoesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`

export const BtnComprar = styled.button`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

export const BtnFavorito = styled.button<{ $ativo: boolean }>`
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) =>
      props.$ativo
        ? props.theme.colors.secondary
        : props.theme.colors.textPrimary};
    transition: fill 0.3s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
