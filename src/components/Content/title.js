import content  from '../../styles/content.js';
import Btn from './btn.js';


const { STitle } = content;

const Title = () => (
  <STitle className="content__inner">
    <h1 className="content__title">Путешествие</h1>
    <p className="content__descr">на красную планету</p>
    <div className="content__btn-wrapper">
      <Btn />
      <span className="content__layout" />
    </div>
    
  </STitle>
);

export default Title;