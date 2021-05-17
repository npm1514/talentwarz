import styled from 'styled-components';

  export const ContestContent = styled.div`
    width: 100%;
    text-align: center;
  `;

  export const ContestBlock = styled.div`
    width: 100%;
    max-width: 500px;
    margin: auto;
    border: 1px solid #000;
    border-radius: 2px;
    background: #8d8d8d;
    color: #fff;
    text-align: center;
    transition: background 0.5s;
    &:hover {
      background: #8d8d8d80;
    }
  `;
