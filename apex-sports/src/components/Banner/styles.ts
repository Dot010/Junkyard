// src/components/Banner/styles.ts
import styled from 'styled-components'

export const BannerCard = styled.div`
  width: 100%;
  padding: 40px 32px;
  margin: 24px 0;
  border-radius: ${(props) => props.theme.borderRadius.card};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.cardBg} 0%,
    #1e1926 100%
  );
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-size: 32px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textPrimary};

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  p {
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 16px;
  }
`
export const BotaoVerNovidades = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
  width: fit-content;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`
