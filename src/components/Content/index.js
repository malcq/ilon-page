import content  from '../../styles/content.js';
import Title from './title.js';
import Aside from './aside.js';

const { SContent } = content;

const Content = () => (
  <SContent className="content">
    <Title />
    <Aside />
  </SContent>
);

export default Content;