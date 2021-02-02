
import styled from 'styled-components';

export const MainPage = styled.main`
  height: 100vh;
  background-image: url(./img/bg.jpg);
  background-repeat: no-repeat;
  background-position: calc(50% - 50px) top;
  background-color: black;

  @media (max-width: 990px) {
    background-image: url(./img/bg-mobile.jpg);
  }

  @media (max-width: 576px) {
    height: auto;
  }
`

export const SBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 35px;
  font-size: 14px;
  color: #909195;
  background: linear-gradient(to right, #0a1b2d 15px, #1e2c45 calc(100% - 7px), transparent 80%, transparent calc(100% - 7px), #1e2c45 80%, #ffffff 0%),
  linear-gradient(to right,#FFFFFF 0%,#FFFFFF 7px,transparent 7px,transparent -6%,#264166 3%,#0a1b2d 100%),
  linear-gradient(to bottom, #0a1b2d 0%, #264166 80%, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%),
  linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent 0%, #264166 20%, #0a1b2d 100%);
  background-size: 100% 1px,100% 1px,1px 100%,1px 100%;
  background-position: 0 0,0 100%,0 0,100% 0;
  background-repeat: no-repeat;
  @media (max-width: 990px) {
    background: unset;
    border: 1px solid #1a395e;
    color: #ffffff;
  }
`;