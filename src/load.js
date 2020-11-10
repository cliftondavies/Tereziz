import nav from './nav';
import home from './home';
import menu from './menu';
import contact from './contact';

const loadPage = () => {
  nav();
  home();
  menu();
  contact();
};

export { loadPage as default };
