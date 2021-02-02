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
    display: flex;
    justify-content: space-between;
    max-width: 1225px;
    margin: 60px auto 0;

    @media (max-width: 1250px) {
      padding-left: 10px; 
    }
    
    @media (max-width: 990px) {
      flex-direction: column;
    }

    @media (max-width: 576px) {
      padding: 0 5px; 
    }
  `,
  STitle: styled.div`
    .content {
      &__inner {}
      &__title {
        padding-top: 35px;
        margin-left: -5px;
        font-size: 3.625em;
        text-transform: uppercase;
        font-weight: 500;
        background: linear-gradient(to left, #ff3f04 45%, #FFFFFF 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (max-width: 992px) {
          text-align: center;
        }

        @media (max-width: 480px) {
          font-size: 3em;
        }
        @media (max-width: 480px) {
          font-size: 2.5em;
        }
      }
      &__descr {
        font-size: 25px;
        background: linear-gradient(to left, #FF4106 0%, #FFFFFF 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (max-width: 992px) {
          text-align: center;
        }
      }
      &__btn-wrapper {
        margin-top: 80px;
        @media (max-width: 992px) {
          margin: 40px auto;
          display: flex;
          justify-content: center;
        }     
      }
    }
  `,
  SAside: styled.aside`
    @media (max-width: 992px) {
      margin-top: 20px;
    }
    .aside-info {
      display: grid;
      grid-template-columns: repeat(2, 170px);
      grid-template-rows: repeat(2, 160px);
      grid-gap: 10px;
      @media (max-width: 990px) {
        grid-template-columns: repeat(4,1fr);
        justify-content: space-between;
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(2,1fr);
      }
      @media (max-width: 576px) {
        grid-template-columns: repeat(1,1fr);
        grid-gap: 10px 0; 
      }
      &__item {
        display: flex;
        font-size: 18px;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        @media (max-width: 990px) {
          padding: 5px;
        }
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
         
          &:nth-child(2) {
            font-size: 60px;
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