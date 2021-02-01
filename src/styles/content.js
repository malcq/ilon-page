import styled from 'styled-components';


const getGradient = (num) => `linear-gradient(${num}deg,rgba(255,255,255,0) 50%,rgba(255,255,255,.3) 200%)`;
const getGradientHover = (num) => `linear-gradient(${num}deg,rgba(255,255,255,0) 50%,rgba(255,255,255,.5) 200%)`;

const bottomLeft = getGradient(225);
const bottomLeftHover = getGradientHover(225);

const bottomRight = getGradient(145);
const bottomRightHover = getGradientHover(145);

const topRight = getGradient(45);
const topRightHover = getGradientHover(45);

const topLeft = getGradient(325);
const topLeftHover = getGradientHover(325);

const content = {
  SContent: styled.div`
    max-width: 1200px;
    margin: 60px auto 0;
    display: grid;
    padding-right: 25px;
    grid-template-columns: repeat(12, 1fr);
    @media (max-width: 1050px) {
      padding-right: 0;
    }
  `,
  STitle: styled.div`
  grid-column: 1/12;

    .content {
      &__inner {
        
      }
      &__title {
        padding-top: 35px;
        font-size: 58px;
        text-transform: uppercase;
        font-weight: 500;
        background: linear-gradient(to left, #ff3f04 45%, #FFFFFF 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &__descr {
        padding-left: 5px;
        font-size: 25px;
        background: linear-gradient(to left, #FF4106 0%, #FFFFFF 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &__btn-wrapper {
        margin-top: 80px;
        margin-left: 5px;
      }
    }
  `,
  SAside: styled.aside`
    grid-column: 12/13;
    .aside-info {
      display: grid;
      grid-template-columns: repeat(2, 170px);
      grid-template-rows: repeat(2, 160px);
      grid-gap: 10px;
      &__item {
        flex: 0 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        &:nth-child(1) {
          background: ${bottomRight};
          :hover {
            background: ${bottomRightHover};
          }
        }
        &:nth-child(2) {
          background: ${bottomLeft};
          :hover {
            background: ${bottomLeftHover};
          }
        }
        &:nth-child(3) {
          background: ${topRight};
          :hover {
            background: ${topRightHover};
          }
        }
        &:nth-child(4) {
          background: ${topLeft};
          :hover {
            background: ${topLeftHover};
          }
        }
        &:nth-child(2n) {
            color: #b8b8b8;
          }
        & > a {
          &:first-child {
            font-size: 16px;
          }
          &:nth-child(2) {
            font-size: 60px;
          }

          &:last-child {
            font-size: 18px;
          }
        } 
      }
      &__link {
        &_number {
          font-weight: 600;
        }
      }
    }
  `,
}

export default content;