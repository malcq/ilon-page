import header  from '../../styles/header.js';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';


const { SHeader } = header;

const Header = () => (
  <SHeader className="header">
    <div className="header-inner">
      <HeaderLogo />
      <HeaderNav />
    </div>
  </SHeader>
);

export default Header;

