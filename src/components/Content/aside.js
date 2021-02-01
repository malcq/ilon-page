import content  from '../../styles/content.js';

const { SAside } = content;

const aSideInfo = [
  ['мы', 1, 'на рынке'],
  ['гарантируем', '50%', 'безопасность'],
  ['календарик за', 2001, 'в подарок'],
  ['путешествие', 597, 'дней']
];

const aSideItems = aSideInfo.map((infos,index) => {
  return (
    <li className="aside-info__item" key={index}>
      <a href="/#">{infos[0]}</a>
      <a href="/#" className="aside-info__link aside-info__link_number">{infos[1]}</a>
      <a href="/#">{infos[2]}</a>
    </li>);
});

const Aside = () => (
  <SAside className="aside">
    <ul className="aside-info">
      {aSideItems}
    </ul>
  </SAside>
);

export default Aside;