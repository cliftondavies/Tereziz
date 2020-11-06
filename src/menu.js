function menu() {
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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  divTwo.appendChild(h2);
  divTwo.appendChild(h3);
  divTwo.appendChild(p);

  const section = document.createElement('section');

  const createMenuItem = (dishName, description, price) => {
    const div = document.createElement('div');

    const divTwo = document.createElement('div');
    const h4 = buildElement('h4', dishName);
    const p = buildElement('p', description);
    divTwo.appendChild(h4);
    divTwo.appendChild(p);
    div.appendChild(divTwo);

    const span = buildElement('span', price);
    div.appendChild(span);

    return div;
  };

  const firstDish = createMenuItem('YORKSHIRE LAMB PATTIES',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet.',
    '£17');
  const secondDish = createMenuItem('SWEET POTATO FRIES',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet.',
    '£35');
  const thirdDish = createMenuItem('STUFFED JACKET POTATOES',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet.',
    '£23');
  const fourthDish = createMenuItem('GRILLED CITRUS FISH',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet.',
    '£46');
  const fifthDish = createMenuItem('CORN AND MANGO SALAD',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet.',
    '£17');
  const sixthDish = createMenuItem('CHICKEN PIE',
    'Adipiscing elit duis tristique sollicitudin nibh sit amet.',
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
  // return div; // append div to div#content in here or in index.js?
}

export default menu;
