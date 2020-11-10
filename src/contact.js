import './assets/css/reset.css';
import './assets/css/style.css';

const contact = () => {
  const div = document.createElement('div');
  div.classList.add('contact-wrap');

  const divTwo = document.createElement('div');

  const buildElement = (elementTag, elementText) => {
    const element = document.createElement(elementTag);
    element.textContent = elementText;
    return element;
  };

  const h2 = buildElement('h2', 'Contact Us');
  const h3 = buildElement('h3', 'HOW TO GET IN TOUCH?');
  const p = buildElement('p',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Eiusmod tempor incididunt ut labore et dolore magna aliqua.`);
  divTwo.appendChild(h2);
  divTwo.appendChild(h3);
  divTwo.appendChild(p);

  const createContactDetails = (headingText, spanText) => {
    const div = document.createElement('div');
    const h4 = buildElement('h4', headingText);
    const span = buildElement('span', spanText);
    div.appendChild(h4);
    div.appendChild(span);
    return div;
  };

  const address = createContactDetails('ADDRESS', '123 Sixth Street, London, EC1 5WC, UK');
  const phone = createContactDetails('PHONE NUMBER', '+44208 423 1213');
  const email = createContactDetails('EMAIL ADDRESS', 'contact@tere.com');

  divTwo.appendChild(address);
  divTwo.appendChild(phone);
  divTwo.appendChild(email);

  div.appendChild(divTwo);

  document.querySelector('#content').appendChild(div);
};

export { contact as default };
