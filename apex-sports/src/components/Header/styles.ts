import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.colors.textPrimary};
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary};

    background: linear-gradient(90deg, #fff 0%, #a29bfe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const ItemCabecalho = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textPrimary};

  svg {
    width: 14px;
    height: 14px;
    fill: ${(props) => props.theme.colors.secondary};
  }

  img {
    width: 16px;
    height: 16px;
    filter: brightness(0) invert(1);
  }
`
