import nav from './nav';
import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', () => {
  content.appendChild(nav());
  content.appendChild(home());
  content.appendChild(menu());
  content.appendChild(contact());
});
