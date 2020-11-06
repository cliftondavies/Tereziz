import './assets/css/reset.css';
import './assets/css/style.css';

function nav() {
  const div = document.createElement('div');
  div.classList.add('nav-wrap');

  const createRadioInput = (id) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('id', id);
    input.setAttribute('name', 'tab-browse');
    return input;
  };

  const homeRadioBtn = createRadioInput('home'); // checked at start?
  homeRadioBtn.setAttribute('checked', '');
  const menuRadioBtn = createRadioInput('menu');
  const contactRadioBtn = createRadioInput('contact');
  div.appendChild(homeRadioBtn);
  div.appendChild(menuRadioBtn);
  div.appendChild(contactRadioBtn);

  const nav = document.createElement('nav');

  const createNavListItem = (forValue, labelText) => {
    const label = document.createElement('label');
    label.setAttribute('for', forValue);
    label.textContent = labelText;
    return label;
  };

  const homeTab = createNavListItem('home', 'Home');
  const menuTab = createNavListItem('menu', 'Menu');
  const contactTab = createNavListItem('contact', 'Contact');
  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);

  div.appendChild(nav);

  document.querySelector('#content').appendChild(div);
  // return div; // append div to div#content in here or in index.js?
}

export default nav;
