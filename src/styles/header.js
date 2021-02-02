import styled from 'styled-components';

const header = {
  SHeader: styled.header`
    background-color: rgba(21,10,0,.21);
    border-top: 1px solid #323339;
    border-bottom: 1px solid #323339;
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding-right: 25px;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 98px;
      @media (max-width: 1250px) {
        margin: 0 5px;
        padding-right: 0;
      }
      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: 98px;
        grid-gap: 20px 0;
      }
    }
  `,
  SHeaderLogo: styled.div`
    grid-column: 1/6;
    
    .header-logo{
      &__layout {
        position: relative;
        width: 315px;
        height: 99px;
        background: url(./img/logo.png) no-repeat 50% 25px;
        @media (max-width: 768px) {
          width: 100%;
        }

        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: linear-gradient(to right, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%),
            linear-gradient(to right, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%),
            linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%),
            linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%);
          background-size: 100% 1px,100% 1px,1px 100%,1px 100%;
          background-position: 0 0,0 100%,0 0,100% 0;
          background-repeat: no-repeat;
        }  
      }
    }
  `,
  SHeaderNav: styled.ul`
    grid-column: 6/13;
    @media (max-width: 992px) {
      grid-column: 7/13;
    }
    @media (max-width: 768px) {
      grid-column: 1;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      margin: 10px 0;
      grid-gap: 10px;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 490px) {
      grid-template-columns: repeat(2, 1fr);
      text-align: center;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: #efefef;
    .header-nav {
      &__item {
        @media (max-width: 992px) {
          flex: 0 0 33.33%;
        }
      }
      &__link {
        padding-bottom: 5px;
        &:hover {
          color: #605e60;
          border-bottom: 1px solid #605e60;
        }
      }
    }
  `,
}

export default header;