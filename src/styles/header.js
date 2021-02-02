import styled from 'styled-components';

const header = {
  SHeader: styled.header`
    background-color: rgba(21,10,0,.21);
    border-top: 1px solid #323339;
    border-bottom: 1px solid #323339;
    @media (max-width: 1250px) {
      margin-left: 10px; 
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding-right: 25px;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 98px;
    }
  `,
  SHeaderLogo: styled.div`
    grid-column: 1/6;
    
    .header-logo{
      &__layout {
        position: relative;
        width: 315px;
        height: 99px;
        background: url(../img/logo.png) no-repeat 50% 25px;

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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: #efefef;
    .header-nav {
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