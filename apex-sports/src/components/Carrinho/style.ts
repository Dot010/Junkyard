import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    oppacity: 0;
  }
  to {
    oppacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 0.3s ease-out;
`

export const Sidebar = styled.aside`
  background-color: #121212;
  color: ${(props) => props.theme.colors.textPrimary};
  width: 360px;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.1);

  animation: ${slideIn} 0.3s ease-out;

  ul {
    list-style: none;
    overflow-y: auto;
    flex-grow: 1;
    margin-bottom: 16px;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  }
`

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.03);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 12px;
  }

  div {
    flex-grow: 1;

    h3 {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 4px;
      color: ${(props) => props.theme.colors.textPrimary};
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme.colors.primary};
      font-weight: 500;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: #ff5252;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    padding: 6px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const CartTotal = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  strong {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 18px;
  }
`
