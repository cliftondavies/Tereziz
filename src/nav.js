const nav = () => {
  const content = document.querySelector('#content');
  const div = document.createElement('div');
  div.classList.add('nav-wrap');

  const createRadioInput = (id) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('id', id);
    input.setAttribute('name', 'tab-browse');
    return input;
  };

  const homeRadioBtn = createRadioInput('home');
  homeRadioBtn.setAttribute('checked', '');
  const menuRadioBtn = createRadioInput('menu');
  const contactRadioBtn = createRadioInput('contact');
  content.appendChild(homeRadioBtn);
  content.appendChild(menuRadioBtn);
  content.appendChild(contactRadioBtn);

  const nav = document.createElement('nav');

  const createNavListItem = (forValue, labelText) => {
    const label = document.createElement('label');
    label.setAttribute('for', forValue);
    label.textContent = labelText;
    return label;
  };

  const homeTab = createNavListItem('home', 'CAFE TEREZIE');
  const divTwo = document.createElement('div');
  const menuTab = createNavListItem('menu', 'MENU');
  const contactTab = createNavListItem('contact', 'CONTACT');
  nav.appendChild(homeTab);
  divTwo.appendChild(menuTab);
  divTwo.appendChild(contactTab);
  nav.appendChild(divTwo);

  div.appendChild(nav);

  content.appendChild(div);
};

export { nav as default };
