(this["webpackJsonpilon-page"]=this["webpackJsonpilon-page"]||[]).push([[0],{17:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t(1),i=t.n(r),c=t(8),o=t.n(c),d=(t(17),t(2)),p=t(3);function l(){var n=Object(d.a)(["\n    grid-column: 6/13;\n    @media (max-width: 992px) {\n      grid-column: 7/13;\n    }\n    @media (max-width: 768px) {\n      grid-column: 1;\n      display: grid;\n      grid-template-columns: repeat(6, 1fr);\n      margin: 10px 0;\n      grid-gap: 10px;\n    }\n    @media (max-width: 768px) {\n      grid-template-columns: repeat(3, 1fr);\n    }\n    @media (max-width: 490px) {\n      grid-template-columns: repeat(2, 1fr);\n      text-align: center;\n    }\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    color: #efefef;\n    .header-nav {\n      &__item {\n        @media (max-width: 992px) {\n          flex: 0 0 33.33%;\n        }\n      }\n      &__link {\n        padding-bottom: 5px;\n        &:hover {\n          color: #605e60;\n          border-bottom: 1px solid #605e60;\n        }\n      }\n    }\n  "]);return l=function(){return n},n}function s(){var n=Object(d.a)(["\n    grid-column: 1/6;\n    \n    .header-logo{\n      &__layout {\n        position: relative;\n        width: 315px;\n        height: 99px;\n        background: url(./img/logo.png) no-repeat 50% 25px;\n        @media (max-width: 768px) {\n          width: 100%;\n        }\n\n        &:before {\n          content: '';\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          background: linear-gradient(to right, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%),\n            linear-gradient(to right, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%),\n            linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%),\n            linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%);\n          background-size: 100% 1px,100% 1px,1px 100%,1px 100%;\n          background-position: 0 0,0 100%,0 0,100% 0;\n          background-repeat: no-repeat;\n        }  \n      }\n    }\n  "]);return s=function(){return n},n}function x(){var n=Object(d.a)(["\n    background-color: rgba(21,10,0,.21);\n    border-top: 1px solid #323339;\n    border-bottom: 1px solid #323339;\n    .header-inner {\n      max-width: 1200px;\n      margin: 0 auto;\n      padding-right: 25px;\n      display: grid;\n      grid-template-columns: repeat(12, 1fr);\n      grid-template-rows: 98px;\n      @media (max-width: 1250px) {\n        margin: 0 5px;\n        padding-right: 0;\n      }\n      @media (max-width: 768px) {\n        display: grid;\n        grid-template-columns: repeat(1,1fr);\n        grid-template-rows: 98px;\n        grid-gap: 20px 0;\n      }\n    }\n  "]);return x=function(){return n},n}var F={SHeader:p.a.header(x()),SHeaderLogo:p.a.div(s()),SHeaderNav:p.a.ul(l())},g=F.SHeaderLogo,m=function(){return Object(a.jsx)(g,{className:"header-logo",children:Object(a.jsx)("div",{className:"header-logo__layout"})})},u=F.SHeaderNav,b=["\u0433\u043b\u0430\u0432\u043d\u0430\u044f","\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f","\u0433\u0440\u0430\u0444\u0438\u043a \u043f\u043e\u043b\u0435\u0442\u043e\u0432","\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0438","\u043e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438","\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"].map((function(n,e){return Object(a.jsx)("li",{className:"header-nav__item",children:Object(a.jsx)("a",{href:"/#",className:"header-nav__link",children:n.charAt().toUpperCase()+n.slice(1)})},e)})),h=function(){return Object(a.jsx)(u,{className:"header-nav",children:b})},f=F.SHeader,j=function(){return Object(a.jsx)(f,{className:"header",children:Object(a.jsxs)("div",{className:"header-inner",children:[Object(a.jsx)(m,{}),Object(a.jsx)(h,{})]})})};function w(){var n=Object(d.a)(["\n    @media (max-width: 992px) {\n      margin-top: 20px;\n    }\n    .aside-info {\n      display: grid;\n      grid-template-columns: repeat(2, 170px);\n      grid-template-rows: repeat(2, 160px);\n      grid-gap: 10px;\n      @media (max-width: 990px) {\n        grid-template-columns: repeat(4,1fr);\n        justify-content: space-between;\n      }\n      @media (max-width: 768px) {\n        grid-template-columns: repeat(2,1fr);\n      }\n      @media (max-width: 576px) {\n        grid-template-columns: repeat(1,1fr);\n        grid-gap: 10px 0; \n      }\n      &__item {\n        display: flex;\n        font-size: 18px;\n        flex-direction: column;\n        align-items: center;\n        cursor: pointer;\n        &:nth-child(1) {\n          background: ",";\n          :hover {\n            background: ",";\n          }\n        }\n        &:nth-child(2) {\n          background: ",";\n          :hover {\n            background: ",";\n          }\n        }\n        &:nth-child(3) {\n          background: ",";\n          :hover {\n            background: ",";\n          }\n        }\n        &:nth-child(4) {\n          background: ",";\n          :hover {\n            background: ",";\n          }\n        }\n        &:nth-child(2n) {\n            color: #b8b8b8;\n          }\n        & > a {\n         \n          &:nth-child(2) {\n            font-size: 60px;\n          }\n        } \n      }\n      &__link {\n        &_number {\n          font-weight: 600;\n        }\n      }\n    }\n  "]);return w=function(){return n},n}function _(){var n=Object(d.a)(["\n    .content {\n      &__inner {}\n      &__title {\n        padding-top: 35px;\n        margin-left: -5px;\n        font-size: 3.625em;\n        text-transform: uppercase;\n        font-weight: 500;\n        background: linear-gradient(to left, #ff3f04 45%, #FFFFFF 80%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        @media (max-width: 992px) {\n          text-align: center;\n        }\n\n        @media (max-width: 480px) {\n          font-size: 3em;\n        }\n        @media (max-width: 480px) {\n          font-size: 2.5em;\n        }\n      }\n      &__descr {\n        font-size: 25px;\n        background: linear-gradient(to left, #FF4106 0%, #FFFFFF 80%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        @media (max-width: 992px) {\n          text-align: center;\n        }\n      }\n      &__btn-wrapper {\n        margin-top: 80px;\n        @media (max-width: 992px) {\n          margin: 40px auto;\n          display: flex;\n          justify-content: center;\n        }     \n      }\n    }\n  "]);return _=function(){return n},n}function k(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    max-width: 1225px;\n    margin: 60px auto 0;\n\n    @media (max-width: 1250px) {\n      padding-left: 10px; \n    }\n    \n    @media (max-width: 990px) {\n      flex-direction: column;\n    }\n\n    @media (max-width: 576px) {\n      padding: 0 5px; \n    }\n  "]);return k=function(){return n},n}var O=function(n){return"linear-gradient(".concat(n,"deg,rgba(255,255,255,0) 50%,rgba(255,255,255,.3) 200%)")},v=function(n){return"linear-gradient(".concat(n,"deg,rgba(255,255,255,0) 50%,rgba(255,255,255,.5) 200%)")},N=O(225),y=v(225),S=O(145),z=v(145),C=O(45),H=v(45),L=O(325),T=v(325),A={SContent:p.a.div(k()),STitle:p.a.div(_()),SAside:p.a.aside(w(),S,z,N,y,C,H,L,T)};function B(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 35px;\n  font-size: 14px;\n  color: #909195;\n  background: linear-gradient(to right, #0a1b2d 15px, #1e2c45 calc(100% - 7px), transparent 80%, transparent calc(100% - 7px), #1e2c45 80%, #ffffff 0%),\n  linear-gradient(to right,#FFFFFF 0%,#FFFFFF 7px,transparent 7px,transparent -6%,#264166 3%,#0a1b2d 100%),\n  linear-gradient(to bottom, #0a1b2d 0%, #264166 80%, transparent 7px, transparent calc(100% - 7px), #FFFFFF 80%, #FFFFFF 100%),\n  linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 7px, transparent 7px, transparent 0%, #264166 20%, #0a1b2d 100%);\n  background-size: 100% 1px,100% 1px,1px 100%,1px 100%;\n  background-position: 0 0,0 100%,0 0,100% 0;\n  background-repeat: no-repeat;\n"]);return B=function(){return n},n}function I(){var n=Object(d.a)(["\n  height: 100vh;\n  background-image: url(./img/bg.jpg);\n  @media (max-width: 990px) {\n    background-image: url(./img/bg-mobile.jpg);\n  }\n  background-repeat: no-repeat;\n  background-position: calc(50% - 50px) top;\n  background-color: black;\n"]);return I=function(){return n},n}var J=p.a.main(I()),P=p.a.a(B()),D=function(){return Object(a.jsx)(P,{href:"/#",className:"content__btn",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435"})},E=A.STitle,M=function(){return Object(a.jsxs)(E,{className:"content__inner",children:[Object(a.jsx)("h1",{className:"content__title",children:"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435"}),Object(a.jsx)("p",{className:"content__descr",children:"\u043d\u0430 \u043a\u0440\u0430\u0441\u043d\u0443\u044e \u043f\u043b\u0430\u043d\u0435\u0442\u0443"}),Object(a.jsxs)("div",{className:"content__btn-wrapper",children:[Object(a.jsx)(D,{}),Object(a.jsx)("span",{className:"content__layout"})]})]})},U=A.SAside,q=[["\u043c\u044b",1,"\u043d\u0430 \u0440\u044b\u043d\u043a\u0435"],["\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u043c","50%","\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c"],["\u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0438\u043a \u0437\u0430",2001,"\u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],["\u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435",597,"\u0434\u043d\u0435\u0439"]].map((function(n,e){return Object(a.jsxs)("li",{className:"aside-info__item",children:[Object(a.jsx)("a",{href:"/#",children:n[0]}),Object(a.jsx)("a",{href:"/#",className:"aside-info__link aside-info__link_number",children:n[1]}),Object(a.jsx)("a",{href:"/#",children:n[2]})]},e)})),G=function(){return Object(a.jsx)(U,{className:"aside",children:Object(a.jsx)("ul",{className:"aside-info",children:q})})},K=A.SContent,Q=function(){return Object(a.jsxs)(K,{className:"content",children:[Object(a.jsx)(M,{}),Object(a.jsx)(G,{})]})};var R=function(){return Object(a.jsxs)(J,{className:"page",children:[Object(a.jsx)(j,{}),Object(a.jsx)(Q,{})]})},V=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),a(n),r(n),i(n),c(n)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),V()}},[[20,1,2]]]);
//# sourceMappingURL=main.477f1d3a.chunk.js.map