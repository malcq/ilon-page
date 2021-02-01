import header  from '../../../styles/header.js';

const { SHeaderNav } = header;

const navTitles = [
  'главная', 'технология', 'график полетов',
  'гарантии', 'о компании', 'контакты'
];

const NavItems = navTitles.map((title,index) => {
  return (
    <li className="header-nav__item" key={index}>
      <a href="/#" className="header-nav__link">
        {title.charAt().toUpperCase() + title.slice(1)}
      </a>
    </li>);
});

const HeaderNav = () => (
  <SHeaderNav className="header-nav">
   {NavItems}
  </SHeaderNav>
);
    
export default HeaderNav;