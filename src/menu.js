import './assets/css/reset.css';
import './assets/css/style.css';

const menu = () => {
  const div = document.createElement('div');
  div.classList.add('menu-wrap');

  const divTwo = document.createElement('div');

  const buildElement = (elementTag, elementText) => {
    const element = document.createElement(elementTag);
    element.textContent = elementText;
    return element;
  };

  const h2 = buildElement('h2', 'Our Menu');
  const h3 = buildElement('h3', 'OUR DELICIOUS DISHES');
  const p = buildElement('p',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Eiusmod tempor incididunt ut labore et dolore magna aliqua.`);
  divTwo.appendChild(h2);
  divTwo.appendChild(h3);
  divTwo.appendChild(p);

  const section = document.createElement('section');

  const createMenuItem = (dishName, description, price) => {
    const div = document.createElement('div');

    const divTwo = document.createElement('div');
    divTwo.classList.add('name-price');
    const h4 = buildElement('h4', dishName);
    const span = buildElement('span', price);
    divTwo.appendChild(h4);
    divTwo.appendChild(span);
    div.appendChild(divTwo);

    const p = buildElement('p', description);
    div.appendChild(p);

    return div;
  };

  const firstDish = createMenuItem('YORKSHIRE LAMB PATTIES',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet curam.',
    '£17');
  const secondDish = createMenuItem('SWEET POTATO FRIES',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet curam.',
    '£35');
  const thirdDish = createMenuItem('STUFFED JACKET POTATOES',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet curam.',
    '£23');
  const fourthDish = createMenuItem('GRILLED CITRUS FISH',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet curam.',
    '£46');
  const fifthDish = createMenuItem('CORN AND MANGO SALAD',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet curam.',
    '£17');
  const sixthDish = createMenuItem('CHICKEN PIE',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet curam.',
    '£24');

  section.appendChild(firstDish);
  section.appendChild(secondDish);
  section.appendChild(thirdDish);
  section.appendChild(fourthDish);
  section.appendChild(fifthDish);
  section.appendChild(sixthDish);

  divTwo.appendChild(section);
  div.appendChild(divTwo);

  document.querySelector('#content').appendChild(div);
};

export { menu as default };
